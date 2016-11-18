import React, { Component } from 'react';
import ReactTable from './ReactTable';
import { Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';


var tweets = [{
      sentiment: "positive",
      tweet: "Item name 1 Item name 1 Item name 1 Item name 1 Item name 1 Item name 1 Item name 1 Item name 1",
      price: 100
  },{
      sentiment: "negative",
      tweet: "Item name 2",
      price: 100
  },{
        sentiment: "neutral",
        tweet: "Item name 5",
        price: 200
    }];

  var t = search().toString();

class TweetForm extends React.Component {
 render() { return (
   <div>
<div>
   <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Keyword</ControlLabel>
      {' '}
      <FormControl type="text" placeholder="Keyword" />
    </FormGroup>
    {' '}

    <Button type="submit">
      Search
    </Button>
    <div>
      <ReactTable value={t.toString()} />
    </div>
  </Form>
  </div>

  </div>);
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


export default TweetForm;
