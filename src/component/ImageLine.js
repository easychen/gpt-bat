import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button  } from "@blueprintjs/core";
import ReactFileReader from 'react-file-reader';
import { toast , isApiOk , showApiError } from '../util/Function';

@withRouter
@inject("store")
@observer
export default class ImageLine extends Component
{
    async onSelected( files )
    {
        //console.log( files[0] , files[0].blob  )
        // return ;
        if( files[0] )
        {
            const { data } = await this.props.store.uploadCover( files[0] );
            if( isApiOk( data ) )
            {
                // 封面图片上传完成，地址为 data.data.url
                
                if( !data.data.url || data.data.url.length < 1 )
                {
                    toast("图片上传失败，请重试");
                    return false;
                }
                else
                {
                    this.props.store[this.props.field] = data.data.url;
                }
                
                console.log( data.data );
            }else
                showApiError( data );
        }
    }
        
    
    render()
    {
        const cover_url = this.props.store[this.props.field];
        return <>
        {cover_url && cover_url.length > 0  && <div><img className="cover_preview" src={cover_url} onClick={()=>window.open( cover_url , "_blank" )} /></div>}
        <div className="lossline">{this.props.label||"图片"}</div>
        <div className="lossline"><ReactFileReader fileTypes={[".jpg",".jepg",".gif",".png"]} handleFiles={(files)=>this.onSelected(files)} ><Button icon="upload" large={true} text={this.props.action||"上传图片"} /></ReactFileReader></div></>;
    }
}