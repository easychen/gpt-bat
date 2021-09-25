import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@inject("store")
@observer
class ActionLine extends Component
{
    render()
    {
        return <div>ActionLine</div>;
    }
}
export default ActionLine ; 

 