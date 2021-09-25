import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FormGroup, Button, Intent } from "@blueprintjs/core";

@withRouter
@inject("store")
@observer

class SubmitLine extends Component
{
    render()
    {
        return <><div className="std-hr form-div"/><FormGroup>
        <div className="row-half">
            <div className="left">
            <Button large="true" intent={Intent.PRIMARY} onClick={()=>this.props.onSubmit()}>提交</Button>
            </div>
            <div className="right">

            <Button large="true" onClick={()=>this.props.history.goBack()} className="right-20">取消</Button>

                
            </div>
        </div>
        
        </FormGroup></>;
    }
}

export default SubmitLine ; 
