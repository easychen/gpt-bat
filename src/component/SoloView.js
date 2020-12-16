import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Header from '../component/Header'; 
import Footer from '../component/Footer'; 

@withRouter
@inject("store")
@observer
export default class SoloView extends Component
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
        return <DocumentTitle title={this.props.title||this.props.store.appname}>
            <div className="cbox"><Header className="wrapped"/>
            <div className="solo-center body wrapped">
            {this.props.main}
            </div>
            <Footer className="wrapped"/>
            </div></DocumentTitle>;
    }
}