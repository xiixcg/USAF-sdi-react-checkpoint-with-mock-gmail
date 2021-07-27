import Button from 'react-bootstrap/Button';

function EmailDetails({ email, toggleEmailDetails, backButtonClicked }) {
  if (email !== null) {
    return (
      <div id="email-details" display={toggleEmailDetails(email)}>
        <Button onClick={() => { backButtonClicked() }}>
          Back
        </Button>
        <h3>{email.subject}</h3>
        <p>Sender: {email.sender}</p>
        <p>Recipient: {email.recipient}</p>
        <p>Date Recieved: {email.date}</p>
        <p>Message: {email.message}</p>
      </div>
    );
  }

  return (
    <div className="email-details" display={toggleEmailDetails(email)}></div>
  )
}

export default EmailDetails;