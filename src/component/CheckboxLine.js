import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FormGroup, RadioGroup,Checkbox } from "@blueprintjs/core";

@withRouter
@inject("store")
@observer
export default class CheckboxLine extends Component
{
    render()
    {
        let key = 1;
        const prefix = Date.now();
        
        return  <div className="lossline"
        >
        <div className="label lossline">{this.props.label}</div>    
        { this.props.options && this.props.options.map( item => { return <Checkbox key={prefix+key++} checked={this.props.store[item.field]=="1"} label={item.label} onChange={e => { this.props.store[item.field] = e.target.checked ? "1":"0"}} inline={true} /> } )  }
        
        </div>;
    }
}

