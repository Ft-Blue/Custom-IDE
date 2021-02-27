import "./Generator.css";

import React from "react";
import axios from "axios";
class Generator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            grammarRoot: "",
        }
    }

    uploadGrammar(e) {
        if (this.state.selectedFile) {
            const data = new FormData()
            data.append('file', this.state.selectedFile);
            data.append('grammarRoot', this.state.grammarRoot)
            const response = axios.post(
                "http://localhost:5000/generate",
                data
            )
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error))
        }
    }

    onChangeHandler = (e) => this.setState({ selectedFile: e.target.files[0] })

    render() {
        return (
            <div className="container">
                <h3>Upload your grammar file</h3>
                <div className="upload-zone">
                    <label>Grammar Root</label>
                    <input type="text" value={this.state.grammarRoot} onChange={(e) => this.setState({ grammarRoot: e.target.value })}></input><br /><br />
                    <input type="file" name="file" onChange={this.onChangeHandler} /><br /><br />
                    <button onClick={this.uploadGrammar.bind(this)}>Upload</button>
                </div>
            </div>);
    }
}
export default Generator;