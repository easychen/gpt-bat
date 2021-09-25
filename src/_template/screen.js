import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import SoloView from '../component/SoloView'; 


@withRouter
@inject("store")
@observer

class ClassNamePlaceHolder extends Component
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
        const main = <div>ClassNamePlaceHolder</div>;
        return <SoloView title={this.props.store.appname} main={main} />;
    }
}
export default ClassNamePlaceHolder ; 