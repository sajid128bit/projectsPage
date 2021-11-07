import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab} = props
  const {displayText, tabId} = tabDetails
  const callFunction = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={callFunction}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
