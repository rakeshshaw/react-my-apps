import React from "react";
import ReactDOM from "react-dom";
import { saveAs } from "file-saver";
import axios from "axios";
import upload from "../../apis/upload";

class FileUpload extends React.Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "_attachment",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    //Upload, convert and download the modified file using one API Call
    // let url = "https://localhost:3000/api/uploads/bluepages";
    let url = "https://sds-api.wdc1a.cirrus.ibm.com/api/uploads/bluepages"
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "yourFilename.xlsx"));

    // Request made to the backend api
    // Send formData object
    // upload.post("api/uploads/bluepages", formData).then(response => response.blob()).then(blob => saveAs(blob, "yourFilename.xlsx"));
    // .catch(error => {
    //     //whatever
    // });
    // const response = await upload.get("api/uploads/bluepages/rashaw11@in.ibm.com");
    // console.log(response);
  };

  // File content to be displayed after file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate?.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Fetch Bluepage Details!</h1>
        <h3>File Upload feature in React!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default FileUpload;
