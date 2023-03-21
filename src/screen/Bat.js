import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import SoloView from '../component/SoloView'; 
import { Button, ButtonGroup, Dialog, AnchorButton } from '@blueprintjs/core';
import Dropzone from 'react-dropzone';
import TextLine from '../component/TextLine';
import SubmitLine from '../component/SubmitLine';
import SingleSelectLine from '../component/SingleSelectLine';
import { toast } from '../util/Function';
import { saveAs } from 'file-saver';

@withRouter
@inject("store")
@observer

class Bat extends Component
{
    constructor(props) 
    {
        super(props);
        this.drop_ref = React.createRef();
        this.state = {"open_dialog":false,"out":"","map_text":"","lang":"en"};
    }
    
    // componentDidMount()
    // {
    //    // 
    // }
    onDropped( files )
    {
        console.log( files );
        
        const reader = new FileReader();
        reader.addEventListener("loadend", async (event) => {
            const content = event.target.result;
            if( this.props.store.split_type == "newline" )
            {
                this.props.store.lists = content.split( "\n" ).filter( item => item.length > 0 );
            }
            if( this.props.store.split_type == "char" )
            {
                this.props.store.lists = content.split( RegExp(this.props.store.split_char) ).filter( item => item.length > 0 );
            }
            if( this.props.store.split_type == "length" )
            {
                // 按 this.props.store.split_length 分割 content 为数组
                const split_length = parseInt( this.props.store.split_length );
                const ret = [];
                for( let i = 0 ; i < content.length ; i+=split_length )
                {
                    ret.push( content.substr(i,split_length) );
                }
                if( ret && ret.length > 0 ) this.props.store.lists = ret;
            }

            // 循环 lists ，将长度超过 max_tokens 的内容分割为多个数组元素
            const max_tokens = parseInt( this.props.store.max_tokens );
            const ret = [];
            for( let i = 0 ; i < this.props.store.lists.length ; i++ )
            {
                const item = this.props.store.lists[i];
                if( item.length > max_tokens )
                {
                    const split_count = Math.ceil( item.length / max_tokens );
                    for( let j = 0 ; j < split_count ; j++ )
                    {
                        ret.push( item.substr( j*max_tokens, max_tokens ) );
                    }
                }
                else
                {
                    ret.push( item );
                }
            }
            if( ret && ret.length > 0 ) this.props.store.lists = ret;

            console.log(" files");
            const prompts_token_count = await this.props.store.get_token_count( this.props.user_prompt + '' + this.props.system_prompt );

            const content_token_count = await this.props.store.get_token_count( content );

            console.log( "prompts_token_count", prompts_token_count , "content_token_count", content_token_count );
            
            this.props.store.upload_tokens_count = content_token_count + ( 6 +  prompts_token_count )* this.props.store.lists.length;

        });
        reader.readAsText(files[0]);

        //console.log( "here" );

        
        //const store = this.props.store;
        // store.openFile( files[0] );
        //console.log( files[0] );
    }

    async process()
    {
        if( this.props.store.openai_key.trim().length == 0 )
        {
            toast("请先设置OpenAI/API2D Key");
            this.setState( {"open_dialog":true} );
            return;
        }

        this.setState( {"out":"开始处理"} );
        
        // do_process
        const store = this.props.store;
        // 循环 lists 处理
        const ret = [];
        for( let i = 0 ; i < store.lists.length ; i++ )
        {
            const item = store.lists[i];
            const ret_item = await store.do_process( item, store.user_prompt, store.system_prompt, store.model, store.max_tokens||1000  );
            if( ret_item ) ret.push( ret_item );
            this.setState( {"out":"已完成" + (i+1) + "/" + store.lists.length,"map_text": " - "+ret_item.substr(0,50)+'...'} );
        }

        // 保存结果
        // 下载结果
        const join_string = store.split_type == "length" ? "":"\r\n" ;
        
        saveAs( new Blob( [ret.join(join_string)], {type: "text/plain;charset=utf-8"} ), "result.txt" );

        window.setTimeout( ()=>{
            if( window.confirm("处理完成，是否清除缓存") )
            {
                // 删除所有 cache 开头的localstorage
                for( let i = 0 ; i < localStorage.length ; i++ )
                {
                    const key = localStorage.key(i);
                    if( key.startsWith("cache") )
                    {
                        localStorage.removeItem(key);
                    }
                }
                toast("清除完成");
            }
        }, 2000 );
        
        
    }

    async save_key()
    {
        this.props.store.openai_key = this.props.store.openai_key.trim();
        this.props.store.openai_api_url = this.props.store.openai_api_url.trim();
        if( this.props.store.openai_key && this.props.store.openai_key.trim().startsWith("fk") && (this.props.store.openai_api_url.trim() == 'https://api.openai.com' || !this.props.store.openai_api_url ) )
        {
            toast("检测到您使用的是api2d key，已自动切换到API2D地址");
            this.props.store.openai_api_url =  "https://openai.api2d.net";   
        }
        
        this.props.store.save_vars();
        this.setState({"open_dialog":false});
        toast("保存成功");
    }

    



    render()
    {
        const store = this.props.store;
        const main = <div className="flex flex-row justify-between border rounded  p-10 mt-10 editor">
            <div className="left w-1/2">

            <div className="text-xl text-blue-500">GPT::BAT</div>
            <div className="text-lg mb-5 text-gray-400">{store.i18n[this.state.lang]?.subtitle}</div>
            
            <SingleSelectLine field="split_type" className="mt-2" label={store.i18n[this.state.lang]?.split_type} options={[
                {value:"newline",label:store.i18n[this.state.lang]?.split_by_line},
                {value:"length",label:store.i18n[this.state.lang]?.split_by_length},
                {value:"char",label:store.i18n[this.state.lang]?.split_by_char},
            ]} />

            {this.props.store.split_type == "length" && <TextLine field="split_length" className="mt-2" placeholder={store.i18n[this.state.lang]?.split_length} />}
            {this.props.store.split_type == "char" && <TextLine field="split_char" className="mt-2" placeholder={store.i18n[this.state.lang]?.split_char} />}
            
            <div className="border rounded p-5 mt-8">
            <TextLine type="textarea" field="system_prompt" className="mt-2" placeholder="" label={store.i18n[this.state.lang]?.system_prompt} /> 
            <TextLine type="textarea" field="user_prompt" className="mt-2" placeholder="" label={store.i18n[this.state.lang]?.user_prompt} />       
            <TextLine field="max_tokens" className="mt-2" placeholder="" label="Max Tokens" />   
            <SingleSelectLine field="model" className="mt-2" label={store.i18n[this.state.lang]?.model} 
            menuPlacement='top'
            options={[
                {value:"gpt4",label:"GPT4"},
                {value:"gpt-3.5-turbo",label:"GPT3.5"},
            ]} />    
            </div>

            <ButtonGroup className="mt-8">
            <Button large={true} icon="key" className="ml-2" onClick={()=>this.setState({"open_dialog":!this.state.open_dialog})} />
            <Dropzone 
                maxSize={1024*1024*10}
                multiple={false} 
                ref={this.drop_ref} 
                onDrop={acceptedFiles => this.onDropped(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    {/*  */}
                    <input {...getInputProps()} />
                    <Button large={true} icon="upload" text={store.i18n[this.state.lang]?.upload_file} />
                </div>
                )}
            </Dropzone>
            <Button large={true} icon="rocket-slant" className="ml-2" text={store.i18n[this.state.lang]?.begin_process} onClick={()=>this.process()} disabled={!(this.props.store.lists.length>0)} />

            <ButtonGroup className="ml-2">
                <Button large={true} text="En" active={this.state.lang=='en'} onClick={()=>this.setState({"lang":"en"})}/>
                <Button large={true} text="中文" active={this.state.lang=='zh'} onClick={()=>this.setState({"lang":"zh"})}/>
            </ButtonGroup>

            </ButtonGroup>

            <div className="bg-blue-100 rounded p-5 mt-5 process-info">{this.state.out}{this.state.map_text}</div>

            <div className="text-gray-400 px-2 mt-5">Make by <a href="https://github.com/easychen" rel="noreferrer" target="_blank">EasyChen</a></div>

            </div>
            <div className="right w-1/2">
                    <div className="log p-2 text-lg bg-blue-100">{this.props.store.lists.length} {store.i18n[this.state.lang]?.segment} {store.i18n[this.state.lang]?.about} {(parseInt(this.props.store.upload_tokens_count/100)+1)*100} Tokens</div>
                    
                    <div className="content-list">
                    {this.props.store.lists && this.props.store.lists.map( (item,index) => <div key={index} className="p-2 content-item">{item}</div> )}
                    </div>
                    <Dialog isOpen={this.state.open_dialog} title={store.i18n[this.state.lang]?.key_settings_title} icon="info-sign" onClose={()=>this.setState({"open_dialog":false})}>
                    <div className="p-5 mt-2">
                    <TextLine field="openai_key" placeholder={store.i18n[this.state.lang]?.key_settings_key} />
                    <TextLine field="openai_api_url" placeholder={store.i18n[this.state.lang]?.key_settings_url} />
                    <SubmitLine onSubmit={()=>this.save_key()} cancel={<AnchorButton large={true} icon="key" href="https://api2d.com/r/186008" target="_blank">{store.i18n[this.state.lang]?.key_settings_apply}</AnchorButton>} />

                    </div>
                    </Dialog>
                    
            </div>
        </div>;
        return <SoloView title={this.props.store.appname} main={main} />;
    }
}
export default Bat ; 