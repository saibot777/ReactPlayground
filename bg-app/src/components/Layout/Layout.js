import React from 'react';
import Aux from '../../components/shared/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => {
    return (
        <Aux>
            <Toolbar />>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;