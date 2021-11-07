import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, activeTabId} = props
  const {displayText, tabId} = tabDetails
  const callFunction = () => {
    changeTab(tabId)
  }
  const name = activeTabId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${name}`}
        onClick={callFunction}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
