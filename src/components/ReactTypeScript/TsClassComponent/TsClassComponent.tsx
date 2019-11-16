import React, { Component } from 'react';

interface tsCounterState {
    count: Number;
}

interface tsClassComponentProps {
    title: string;
    counterState: tsCounterState;
    setCounterState: void;
}

export default class tsClassComponent extends Component {
    constructor(props: tsClassComponentProps) {
        super(props);
    }
    render() {
        const { title, counterState } = this.props;
        return (
            <div>
                {title}
                <div>
                    Current Count:
                    {counterState.count}
                </div>
            </div>
        );
    }
}
