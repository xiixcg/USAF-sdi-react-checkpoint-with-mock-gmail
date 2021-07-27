function EmailDetails({email}) {
    return (
      <div className="email-details">
          <h3>{email.subject}</h3>
          <p>Sender: {email.sender}</p>
          <p>Recipient: {email.recipient}</p>
          <p>Date Recieved: {email.date}</p>
          <p>Message: {email.message}</p>
      </div>
    );
  }

  export default EmailDetails;