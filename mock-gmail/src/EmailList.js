import EmailListEntry from './EmailListEntry.js';

function EmailList({emails, callback}) {
    return (
      <div className="email-list">
          <ul>{emails.map(email => (
              <EmailListEntry email={email} callback={callback} />
          ))}
          </ul>
      </div>
    );
  }

  export default EmailList;
