import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribeButton = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getText()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thanks you!Happy Learning</p>
        <button
          type="button"
          className="subscribeBtn"
          onClick={this.subscribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
