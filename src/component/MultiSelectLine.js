import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';

@withRouter
@inject("store")
@observer
export default MultiSelectLine ; 

 class MultiSelectLine extends Component
{
    render()
    {
        let value_array = this.props.store[this.props.field] || [];
        let selectedOptions = this.props.options.filter( item => value_array.includes( item.value ));
        let key = 1;
        const prefix = Date.now();
        
        return <div className="lossline">
    <div className="lossline">{this.props.label}</div>
            <Select
            placeholder={this.props.placeholder||"请选择"}
            value={selectedOptions}
            isMulti={true}
            onChange={(e)=>
            {
                if( !e )
                {
                    this.props.store[this.props.field] = [];
                }
                else
                {
                    console.log( e.map( item => item.value ) );

                    this.props.store[this.props.field] = e.map( item => item.value );
                }
                
                
            } }
            options={this.props.options||[]}
        /></div>;
        
        
    }
}