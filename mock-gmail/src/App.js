import './App.css';
import EmailList from './EmailList.js';
import EmailDetails from './EmailDetails.js';
import Search from './Search.js';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEmail: null,
      emailList: [],
      searchEmailList: null
    }
    //this.emailClicked().bind(this);
  }

  async componentDidMount() {
    var response = await fetch("http://localhost:3001/emails");
    var jsonresponse = await response.json();
    this.setState({ emailList: jsonresponse });
  }

  getEmails() {
    if (this.state.searchEmailList === null) {
      return this.state.emailList;
    }

    return this.state.searchEmailList;
  }

  emailClicked(email) {
    this.setState({ currentEmail: email });
  }

  toggleEmailDetails() {
    if (this.state.currentEmail === null) {
      return "none";
    }

    return "block";
  }

  backButtonClicked() {
    this.setState({ currentEmail: null });
  }

  searchClicked(emails, searchTarget) {
    let foundEmailList = emails.filter(email => email.subject.toUpperCase().includes(searchTarget.toUpperCase()));
    this.setState({ searchEmailList: foundEmailList });
  }

  searchValueChanged(searchTarget) {
    if (!searchTarget.trim()) {
      this.setState({ searchEmailList: null });
    }
  }

  render() {
    return (
      <div className="App">
        <Container className="email-page">
          <Row>
            <Search emails={this.state.emailList} searchClicked={this.searchClicked.bind(this)} searchValueChanged={this.searchValueChanged.bind(this)} />
          </Row>
          <EmailDetails email={this.state.currentEmail} toggleEmailDetails={this.toggleEmailDetails.bind(this)} backButtonClicked={this.backButtonClicked.bind(this)} />
          <Row id="table-title">
            <Col md={3}>Sender</Col>
            <Col md={6}>Subject</Col>
            <Col md={3}>Date Received</Col>
          </Row>
          <EmailList emails={this.getEmails()} emailClicked={this.emailClicked.bind(this)} />
        </Container>
      </div>
    );
  }

}

export default App;
