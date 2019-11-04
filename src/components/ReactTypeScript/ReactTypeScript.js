import React from 'react';
import TsClassComponent from './TsClassComponent';
import TsFunctionalComponent from './TsFunctionalComponent';

export default function ReactTypeScript() {
    

    return (
        <div>
            <div>
                <h1>Class Component</h1>
                <TsClassComponent  />
            </div>
            <div>
                <h1> Functional Component</h1>
                <TsFunctionalComponent />
            </div>
        </div>
    );
}
