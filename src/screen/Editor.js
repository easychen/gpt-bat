import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

@withRouter
@inject("store")
@observer
export default class Editor extends Component
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
        const main = <div className="edit">
            <div className="side">

            </div>
            <div className="main">

            </div>
        </div>;


        return <DocumentTitle title={this.props.store.appname}>{main}</DocumentTitle>;
    }
}