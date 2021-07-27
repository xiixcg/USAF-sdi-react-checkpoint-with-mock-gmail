import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EmailListEntry({ email, callback }) {
  return (
    <Row className="email-list-entry"  onClick={() => { callback(email) }}>
      <Col md={3}>{email.sender}</Col>
      <Col md={6}>{email.subject}</Col>
      <Col md={3}>{email.date}</Col>
    </Row>
  );
}

export default EmailListEntry;