import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReduxActions extends Component {

    render () {
        return (
            <div>Hello</div>
        )
    }
}

const mapStateToProps = (appState, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxActions);
