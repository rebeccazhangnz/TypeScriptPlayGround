import React from 'react';
import TsClassComponent from './TsClassComponent';
import TsFunctionalComponent from './TsFunctionalComponent';

export default function ReactTypeScript() {
    const cTitle = 'This is The Class Component Counter: ';
    const fTitle = 'This is the Functional Component Counter:';

    return (
        <div>
            <div>
                <h1>Class Component</h1>
                <TsClassComponent title={cTitle} />
            </div>
            <div>
                <h1> Functional Component</h1>
                <TsFunctionalComponent title={fTitle} />
            </div>
        </div>
    );
}
