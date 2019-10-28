import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';

@inject("store")
@observer
export default class Hello extends Component
{
    render()
    {
        return <div className="title"><h1>Hello，{this.props.store.appname}</h1></div>;
    }
}