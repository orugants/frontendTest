import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TweetForm from './TweetForm';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import 'dist/react-bootstrap-table-all.min.css'
//import './Table.js'


class App extends Component {
  render() {
    search();
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweet Sentiment Analysis</h2>
          <h3> {search()}</h3>
        </div>
        <p className="App-intro">
          <br/>
        </p>
        <TweetForm />
      </div>
    );
  }
}

function search() {
  return fetch(`/api/tweet`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}


export default App;
