import './App.css';
import EmailList from './EmailList.js';
import EmailDetails from './EmailDetails.js';
import Search from './Search.js';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEmail: {},
      emailList: []
    }
    //this.emailClicked().bind(this);
  }

  async componentDidMount() {
    var response = await fetch("http://localhost:3001/emails")
    var jsonresponse = await response.json()
    this.setState({ emailList: jsonresponse })
  }

  emailClicked(email) {
    this.setState({ currentEmail: email })
  }

  searchClicked(emails, searchTarget) {

    console.log('Search Target: ', searchTarget);
  }

  render() {
    return (
      <div className="App">
        <Search emails={this.state.emailList} callback={this.searchClicked.bind(this)} />
        <EmailDetails email={this.state.currentEmail} />
        <EmailList emails={this.state.emailList} callback={this.emailClicked.bind(this)} />
      </div>
    );
  }

}

export default App;
