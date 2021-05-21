import './SearchBar.css';
function SearchBar() {
    return(
        <div class="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;