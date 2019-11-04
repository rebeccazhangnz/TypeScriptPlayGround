import React, { Component } from 'react';

export default class tsClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
        };
    }


    render() {
        const {counter} = this.state;
        return (
            <div>    
                this is the class component.
                <div>
                    Current Count:
                    {counter}
                </div>
            </div>
        );
    }
}
