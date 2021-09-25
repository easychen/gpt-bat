import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

@withRouter
@inject("store")
@observer

class MarkdownLine extends Component
{
    state = {"type":"write"};
    render()
    {
        const markdown = this.props.store[this.props.field];
        
        return <ReactMde className="lossline"
        value={markdown}
        onChange={(e)=>this.props.store[this.props.field] = e }
        generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        selectedTab={this.state.type}
        onTabChange={(type)=>this.setState({"type":type})}  
      />;
    }
}
export default MarkdownLine ; 
