import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contactsFromFile from './contacts.json';

ReactDOM.render(<App data = {contactsFromFile}/>, document.getElementById('root'));