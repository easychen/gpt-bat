import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FormGroup, InputGroup, TextArea } from "@blueprintjs/core";
import CodeEditor from '@uiw/react-textarea-code-editor';

@withRouter
@inject("store")
@observer
class CodeLine extends Component
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
        const value = this.props.store[this.props.field] || "";

        return <FormGroup
        label={this.props.label}>

        <CodeEditor
            value={value}
            language={this.props.language||"js"}
            placeholder={this.props.placeholder||this.props.label}
            onChange={(e)=>this.props.store[this.props.field] = e.target.value }
            padding={15}
            style={{
                fontSize: 16,
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
        
        </FormGroup>;

    }
}

export default CodeLine;