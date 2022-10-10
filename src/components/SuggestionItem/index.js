// Write your code here
import './index.css'

const SearchItems = props => {
  const {searchList, searchClick} = props
  const {suggestion} = searchList

  const onSearch = () => {
    searchClick(suggestion)
  }

  return (
    <li>
      <div className="suggestion-bar">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onSearch}
        />
      </div>
    </li>
  )
}

export default SearchItems
