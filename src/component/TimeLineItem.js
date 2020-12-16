import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter,Link } from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { Icon, Button,AnchorButton  } from "@blueprintjs/core";

@withRouter
@inject("store")
@observer
export default class TimeLineItem extends Component
{
    goto()
    {
        const item = this.props.data;
        
        if( item.status > 0 )
        {
            if( item.post.weibo_mid.length > 1 )
                window.open( "https://m.weibo.cn/detail/"+item.post.weibo_mid , "_blank" );
            else
                window.open( item.post.link , "_blank" );     
        }
    }

    goto2()
    {
        const item = this.props.data;
        
        if( item.post.flink )
        {
            window.open( item.post.flink , "_blank" );    
        }
    }
    
    render()
    {
        const item = this.props.data;
        console.log( item );
        const icon = item.status == 1 ? <Icon icon="endorsed" /> : <Icon icon="info-sign" />
        
        return <><TimelineEvent className="bp3-card" title={item.box.name+"·"+item.post.summary} createdAt={item.created_at}
        icon={icon} iconColor="#757575"  >
        </TimelineEvent>
        <div className="timeline-edit" >
           { item.post.status > 1 && item.post.link.length > 5 && <>
            <Button icon="select" text={item.post.link_count+"点击"} minimal={true} />
            <Button  onClick={()=>this.goto()} text="去微博" minimal={true} />
           </>}
           
           { item.post.fimi_status> 1 && item.post.flink.length > 1 && <Button  onClick={()=>this.goto2()} text="去菲米" minimal={true} />
            }
           
            <AnchorButton  text="修改" icon="edit" href={"/post/modify/"+item.post.id} minimal={true} />
            
        </div>
        </>  ;
    }
}