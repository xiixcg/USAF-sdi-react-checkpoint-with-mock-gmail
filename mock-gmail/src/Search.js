function Search({ emails, callback }) {
  return (
    <div className="search">
      <form>
        <input type="text" placeHolder="search" id="searchInput" ></input>
        <button type="submit" onClick={(event) => {
          event.preventDefault()
          callback(emails, document.getElementById("searchInput").value)
        }}> search</button>
      </form>
    </div>
  );
}

export default Search;