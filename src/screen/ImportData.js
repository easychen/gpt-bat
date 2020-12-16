import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import SoloView from '../component/SoloView'; 


@withRouter
@inject("store")
@observer
export default class ImportData extends Component
{
    // constructor(props) 
    // {
    //     super(props);
    // }
    
    // componentDidMount()
    // {
    //    // 
    // }

    render()
    {
        const main = <div>ImportData</div>;
        return <SoloView title={this.props.store.appname} main={main} />;
    }
}