// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  //   state = {
  //     suggestionsList: suggestionsList,
  //   }
  //   onChangeSearchInput = event => {}

  render() {
    const {suggestionsList} = this.props
    const {id, suggestion} = suggestionsList
    return (
      <div className="main-bg">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
        />
        <input type="search" onChange={this.onChangeSearchInput} />
        <span>
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
        </span>
        <ul>
          {suggestionsList.map(eachSuggestion => (
            <SuggestionItem eachItem={eachSuggestion} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
