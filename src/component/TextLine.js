import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FormGroup, InputGroup, TextArea } from "@blueprintjs/core";

@withRouter
@inject("store")
@observer
export default class TextLine extends Component
{
    render()
    {
        const value = this.props.store[this.props.field] || "";
        
        return <FormGroup
        label={this.props.label}>

        { this.props.type == 'textarea' ? 
            <TextArea
            growVertically={true}
            large={true}
            placeholder={this.props.placeholder} 
            onChange={(e)=>this.props.store[this.props.field] = e.target.value } value={value}
            className="fluid"
        />
            : 
            <InputGroup type={this.props.type} large="true" placeholder={this.props.placeholder} onChange={(e)=>this.props.store[this.props.field] = e.target.value } value={value} />
        }

    { parseInt(this.props.max_count) > 0 && <div className="text-count">{value.length}/{this.props.max_count}</div> }
        
        
        </FormGroup>;
    }
}