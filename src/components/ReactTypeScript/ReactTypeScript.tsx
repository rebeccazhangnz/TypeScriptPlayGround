import React, { useState, useEffect } from 'react';
import TsClassComponent from './TsClassComponent';
import TsFunctionalComponent from './TsFunctionalComponent';

const INIT_COUNTER_STATE = {
    count: 0,
};

export default function ReactTypeScript() {
    const cTitle = 'This is The Class Component Counter: ';
    const fTitle = 'This is the Functional Component Counter:';
    const [classCounterState, setClassCounterState] = useState(INIT_COUNTER_STATE);
    const [functionalCounterState, setFunctioalCounterState] = useState(INIT_COUNTER_STATE);

    useEffect(() => {
        setClassCounterState(INIT_COUNTER_STATE);
        setFunctioalCounterState(INIT_COUNTER_STATE);
    });

    return (
        <div>
            <div>
                <h1>Class Component</h1>
                <TsClassComponent
                    title={cTitle}
                    counterState={classCounterState}
                    setConterState={setClassCounterState}
                />
            </div>
            <div>
                <h1> Functional Component</h1>
                <TsFunctionalComponent
                    title={fTitle}
                    counterState={functionalCounterState}
                    setCounterState={setFunctioalCounterState}
                />
            </div>
        </div>
    );
}
