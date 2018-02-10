import React, {Component} from 'react';


class Contact extends Component {

    constructor(props){
        super(props)
    }
    render() {
        const {contact} = this.props
      return (
            <div>
                <li>
                    {contact.name}
                </li>
            </div>
        
      );
    }
  }

  export default Contact