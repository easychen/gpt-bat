import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import SoloView from '../component/SoloView'; 
import { Button, ButtonGroup, Spinner } from '@blueprintjs/core';
import Dropzone from 'react-dropzone';
import TextLine from '../component/TextLine';
import SingleSelectLine from '../component/SingleSelectLine';
import { get_encoding, encoding_for_model } from "@dqbd/tiktoken";

@withRouter
@inject("store")
@observer

class Bat extends Component
{
    constructor(props) 
    {
        super(props);
        this.drop_ref = React.createRef();
        this.state = { uploaded: false };
    }
    
    // componentDidMount()
    // {
    //    // 
    // }
    onDropped( files )
    {
        console.log( files );
        
        const reader = new FileReader();
        reader.addEventListener("loadend", (event) => {
            const content = event.target.result;
            console.log( content );
        });
        reader.readAsText(files[0]);

        //console.log( "here" );

        
        //const store = this.props.store;
        // store.openFile( files[0] );
        //console.log( files[0] );
    }

    



    render()
    {
        const main = <div className="flex flex-row justify-between border rounded  p-10 mt-10 editor">
            <div className="left">
            
            <SingleSelectLine field="split_type" className="mt-2" label="分隔方式" options={[
                {value:"newline",label:"按换行分隔"},
                {value:"length",label:"按长度分隔"},
                {value:"char",label:"按特殊字符分隔"},
            ]} />

            {this.props.store.split_type == "length" && <TextLine field="split_length" className="mt-2" placeholder="分隔长度" />}
            {this.props.store.split_type == "char" && <TextLine field="split_char" className="mt-2" placeholder="分隔符，支持正则" />}
            
            <div className="border rounded p-5 mt-8">
            <TextLine type="textarea" field="system_prompt" className="mt-2" placeholder="" label="System 提示词" /> 
            <TextLine type="textarea" field="user_prompt" className="mt-2" placeholder="" label="User 提示词" />       
            <TextLine field="max_tokens" className="mt-2" placeholder="" label="Max Tokens" />   
            <SingleSelectLine field="model" className="mt-2" label="模型" 
            menuPlacement='top'
            options={[
                {value:"gpt4",label:"GPT4"},
                {value:"gpt-3.5-turbo",label:"GPT3.5"},
            ]} />    
            </div>

            <ButtonGroup className="mt-8">
            <Dropzone 
                maxSize={1024*1024*10}
                multiple={false} 
                ref={this.drop_ref} 
                onDrop={acceptedFiles => this.onDropped(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    {/*  */}
                    <input {...getInputProps()} />
                    <Button large={true} icon="upload" text="上传" />
                </div>
                )}
            </Dropzone>
            <Button large={true} icon="rocket-slant" className="ml-2" text="开始处理" disabled={!this.state.uploaded} />
            </ButtonGroup>

            </div>
            <div className="right">3333</div>
        </div>;
        return <SoloView title={this.props.store.appname} main={main} />;
    }
}
export default Bat ; 