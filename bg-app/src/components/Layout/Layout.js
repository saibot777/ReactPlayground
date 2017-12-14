import React from 'react';
import Aux from '../../components/shared/Auxiliary';

const layout = ( props ) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;