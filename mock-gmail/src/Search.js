import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Search({ emails, searchClicked , searchValueChanged}) {
  return (
    <div className="search">
      <InputGroup className="mb-3">
        <FormControl
          id="search-input"
          placeholder="Search email by subject"
          aria-label="Search email by subject"
          aria-describedby="basic-addon2"
          onChange={() => searchValueChanged(document.getElementById("search-input").value)}
        />
        <Button variant="outline-secondary" onClick={(event) => {
          event.preventDefault()
          searchClicked(emails, document.getElementById("search-input").value)
        }}>
          Search
        </Button>
      </InputGroup>

      {/* <form>
        <input type="text" placeholder="search" id="searchInput" onChange={() => searchValueChanged(document.getElementById("searchInput").value)}></input>
        <button type="submit" onClick={(event) => {
          event.preventDefault()
          searchClicked(emails, document.getElementById("searchInput").value)
        }}> search</button>
      </form> */}
    </div>
  );
}

export default Search;