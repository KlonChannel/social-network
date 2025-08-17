import React, { useEffect } from 'react';
import {getDialogs, getMessages} from "../../redux/messages-reducer";
import {connect} from 'react-redux';
import {getDialogsArray, getMessagesArray} from '../../redux/selectors/messages-selector';
import { useLocation } from 'react-router-dom';

import Messages from './Messages';

const MessagesContainer = (props) => {
    const location = useLocation();
    
    useEffect(() => {
        getDialogs();
    }, []);

    const getDialogs = () => {
        props.getDialogs();
    };

    const getMessages = () => {
        props.getMessages();
    };
    
    return (
       <Messages dialogs={props.dialogs} getMessages={getMessages} messages={props.messages}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        dialogs: getDialogsArray(state),
        messages: getMessagesArray(state)
    })
}

export default connect(mapStateToProps, {getDialogs, getMessages})(MessagesContainer);