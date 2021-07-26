function EmailListEntry({ email, callback }) {
  return (

    <li className="email-list-entry" onClick={() => { callback(email) }}>
      <span>{email.sender}</span><span>{email.subject}</span>
    </li>

  );
}

export default EmailListEntry;