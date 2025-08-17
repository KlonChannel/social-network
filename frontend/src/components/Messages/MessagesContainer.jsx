import React, { useEffect } from 'react';
import {getDialogs} from "../../redux/messages-reducer";
import {connect} from 'react-redux';
import {getDialogsArray} from '../../redux/selectors/messages-selector';

import Messages from './Messages';

const MessagesContainer = (props) => {
    useEffect(() => {
        getDialogs();
    }, []);

    const getDialogs = () => {
        props.getDialogs();
    };
    
    return (
       <Messages dialogs={props.dialogs}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        dialogs: getDialogsArray(state)
    })
}

export default connect(mapStateToProps, {getDialogs})(MessagesContainer);