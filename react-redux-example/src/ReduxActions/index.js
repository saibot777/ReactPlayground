import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    requestAddItem
} from '../modules/ui/actions';

class ReduxActions extends Component {

    render () {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (appState, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
           requestAddItem
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxActions);
