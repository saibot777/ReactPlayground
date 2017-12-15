import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div>
        <img className="Logo" src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;