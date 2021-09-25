import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';

@withRouter
@inject("store")
@observer
export default DropLine ; 

 class DropLine extends Component
{
    render()
    {
        let value = this.props.store[this.props.field] || "0";
        let selectedOption = this.props.options.filter( item => item.value == value )[0];
        let key = 1;
        const prefix = Date.now();
        
        return <div className="lossline">
    <div className="lossline">{this.props.label}</div>
            <Select
            placeholder={this.props.placeholder||"请选择"}
            value={selectedOption}
            isMulti={this.props.isMulti}
            onChange={(e)=>
            {
                console.log(e);
                this.props.store[this.props.field] = parseInt(e.value)+'';
                console.log( this.props.store[this.props.field] );
            } }
            options={this.props.options||[]}
        /></div>;
        
        
    }
}