import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@inject("store")
@observer
export default class ClassNamePlaceHolder extends Component
{
    // constructor(props) 
    // {
    //     super(props);
    // }
    
    // componentDidMount()
    // {
    //    // 
    // }

    // componentDidUpdate(prevProps)
    // {
    //     if (this.props.data !== prevProps.data) 
    //     {
           
    //     }
    // }
    
    render()
    {
        return <div>ClassNamePlaceHolder</div>;
    }
}