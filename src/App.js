import React, {Component} from 'react';
import Contacts from './Contacts'

class App extends Component {
  constructor(props)
  {
      super(props)
  }
  onTextboxChange = (event) =>
  {

  }
    render() {
        const {contacts} = this.props.data
      return (
          <div>
            <input type="text" id="inputArea" onChange ={this.onTextboxChange}/>
            <Contacts contacts = {contacts} />
        </div>
      );
    }
  }

  export default App