import React from 'react';
import {connect} from 'react-redux';

import Editor from './Editor';

const EditorContainer = (props) => {
    return (
        <Editor/>
    )
}

let mapStateToProps = (state) => {
    return ({})
}

export default connect(mapStateToProps, {})(EditorContainer);