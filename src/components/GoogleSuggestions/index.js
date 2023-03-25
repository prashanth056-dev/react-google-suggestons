import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  btnClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.includes(searchInput),
    )
    return (
      <div className="mainBg">
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="googleImg"
        />
        <div className="card">
          <div className="inputCont">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>

          <ul>
            {filteredList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                obj={eachItem}
                func={this.btnClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
