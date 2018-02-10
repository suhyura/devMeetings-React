import React, {Component} from 'react';
import Contacts from './Contacts'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter : "",
            contacts: props.data.contacts
        }
    }
   

  onTextboxChange = (event) =>
  {
    this.setState({filter : event.target.value}, () => {
        this.state.filter === "" ? this.state.contacts : this.setState({
            contacts: this.props.data.contacts.filter( (contact) => contact.name.includes(this.state.filter))
        }, () => {
            console.log(this.state.contacts);
        })
    });
    
  }
  getFilteredContacts =() => {
    return this.state.filter === "" ? this.state.contacts : this.state.contacts.filter( (contact) => contact.name.includes(this.state.filter) )
  }
 
    render() {
        return (
            <div>
                <input type="text" id="inputArea" onChange ={this.onTextboxChange}/>
                <Contacts contacts = {this.state.contacts} />
            </div>
        );
    }
  }

  export default App