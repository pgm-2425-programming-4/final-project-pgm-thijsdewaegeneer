function SearchWrapper() {
  
  return (
    <div className="search-wrapper">
      <form action="submit" method="post">
        <label htmlFor="category" className="visually-hidden">Category</label>
        <select name="category" id="category">
          <option value="backend">Back-end</option>
          <option value="frontend">Front-end</option>
        </select>
        <input type="text" name="query" placeholder="Search by description" />
      </form>

      <h2 className="search-wrapper__title">Active project: PGM3</h2>

      <div className="search-wrapper__buttons">
        <button
          className="search-wrapper__button search-wrapper__button--left"
          type="button"
        >
          Add new task
        </button>

        <button
          className="search-wrapper__button search-wrapper__button--right"
          type="button"
        >
          <a href="backlog.html" className="search-wrapper__button-link">
            View backlog
          </a>
        </button>
      </div>
    </div>
  );
}

export default SearchWrapper