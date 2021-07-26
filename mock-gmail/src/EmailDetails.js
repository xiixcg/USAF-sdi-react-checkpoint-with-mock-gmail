function EmailDetails({email}) {
    return (
      <div className="email-details">
          <h3>{email.subject}</h3>
          <p>{email.sender}</p>
          <p>{email.recipient}</p>
          <p>{email.message}</p>
          <p>{email.date}</p>
      </div>
    );
  }

  export default EmailDetails;