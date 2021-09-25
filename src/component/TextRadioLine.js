import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FormGroup, RadioGroup,Radio } from "@blueprintjs/core";

@withRouter
@inject("store")
@observer

class TextRadioLine extends Component
{
    render()
    {
        let value = this.props.store[this.props.field] || "0";
        let key = 1;
        const prefix = Date.now();
        
        return  <RadioGroup className="lossline"
        label={this.props.label}
        onChange={(e)=>
            {
                this.props.store[this.props.field] = e.target.value;
                console.log( this.props.field, this.props.store );
            } }
        selectedValue={value}
        inline={true}
        >
        { this.props.options && this.props.options.map( item => { return <Radio key={prefix+''+key++} label={item.name} value={item.value} /> } )  }
        
        </RadioGroup>;
    }
}

export default TextRadioLine ; 
