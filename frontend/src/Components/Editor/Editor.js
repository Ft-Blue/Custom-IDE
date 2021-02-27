import React, { Component } from 'react';
import * as monaco from "monaco-editor-core";

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            divNode: null,
            assignRef: (node) => this.setState({ divNode: node })
        }
    }
    componentDidUpdate() {
        if (this.state.divNode) {
            const editor = monaco.editor.create(this.state.divNode, {
                language: this.props.language,
                minimap: { enabled: false },
                autoIndent: true
            })
        }
    }
    render() {
        return (
            <div ref={this.state.assignRef} style={{ height: '90vh' }}></div>
        );
    }
}

export default Editor;