import React, {Component} from 'react';
import Contact from './Contact'

class Contacts extends Component {
    
    render() {
        const {contacts} = this.props
        return (
              <div>
                  <ul>
                  {contacts.map(contact => <Contact contact = {contact} key={contact.id} /> )}
                  </ul>
              </div>
            );  
    }
  }

  export default Contacts