import './index.css'

const SuggestionItem = props => {
  const {obj, func} = props
  const {suggestion} = obj
  const arrowClick = () => {
    func(suggestion)
  }
  return (
    <li className="listCont">
      <p>{suggestion}</p>
      <img
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        onClick={arrowClick}
      />
    </li>
  )
}

export default SuggestionItem
