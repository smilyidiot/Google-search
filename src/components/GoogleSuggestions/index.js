// Write your code here
import {Component} from 'react'

import SearchItems from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchBar = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(searchInput)

    return (
      <div className="bg-cont">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleIcon"
          />
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.onSearch}
              value={searchInput}
            />
          </div>
          <ul className="searchList">
            {searchResults.map(eachSearch => (
              <SearchItems
                searchList={eachSearch}
                searchClick={this.searchBar}
                key={eachSearch.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
