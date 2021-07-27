import EmailListEntry from './EmailListEntry.js';

function EmailList({emails, callback}) {
    return (
      <div className="email-list">
        {emails.map(email => (
          <EmailListEntry key={email.id} email={email} callback={callback} />
        ))}
      </div>
    );
  }

  export default EmailList;
