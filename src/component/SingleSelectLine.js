import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';

@withRouter
@inject("store")
@observer
class SingleSelectLine extends Component
{
    render()
    {
        let selectedOptions = this.props.options.filter( item => this.props.store[this.props.field] ==  item.value );
        let key = 1;
        const prefix = Date.now();
        
        return <div >
    <div className="lossline">{this.props.label}</div>
            <Select
            className={this.props.className}
            menuPlacement={this.props.menuPlacement||'auto'}
            placeholder={this.props.placeholder||"请选择"}
            value={selectedOptions}
            isMulti={false}
            onChange={(e)=>
            {
                console.log( "e", e );
                if( !e )
                {
                    this.props.store[this.props.field] = "";
                }
                else
                this.props.store[this.props.field] = e.value;
            }}
            options={this.props.options||[]}
        /></div>;
        
        
    }
}

export default SingleSelectLine ;