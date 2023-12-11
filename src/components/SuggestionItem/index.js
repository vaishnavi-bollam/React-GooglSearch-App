// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem} = props
  const {suggestion} = eachItem
  return (
    <li>
      <div>
        <p>{suggestion}</p>
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        />
      </div>
    </li>
  )
}

export default SuggestionItem
