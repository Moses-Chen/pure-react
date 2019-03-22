import React from 'react';
import './App.css';
import ContactInformation from './components/ContactInformation'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "moses"
    };
  };

  firstNameChanged = (firstName) => {
    this.setState({ firstName: firstName });
  };

  lastNameChanged = (lastName) => {
    this.setState({ lastName: lastName });
  };

  phoneChanged = (phone) => {
    this.setState({ phone: phone });
  };

  emailChanged = (email) => {
    this.setState({ email: email });
  };

  render() {
    return (
      <ContactInformation
        firstName={this.state.firstName}
        firstNameChanged={this.firstNameChanged}
        lastName={this.state.lastName}
        lastNameChanged={this.lastNameChanged}
        phone={this.state.phone}
        phoneChanged={this.phoneChanged}
        email={this.state.email}
        emailChanged={this.emailChanged}
      />
    );
  };

}

export default App;
