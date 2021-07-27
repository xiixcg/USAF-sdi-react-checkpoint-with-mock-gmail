import EmailListEntry from './EmailListEntry.js';

function EmailList({emails, emailClicked}) {
    return (
      <div className="email-list">
        {emails.map(email => (
          <EmailListEntry key={email.id} email={email} emailClicked={emailClicked} />
        ))}
      </div>
    );
  }

  export default EmailList;
