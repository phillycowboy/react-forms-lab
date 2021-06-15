import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: ""
    }
    // 



  }
  handleChange = (event) => {
    this.setState({
        counter: event.target.value
    })
  }

  render() {
    let twitterState = this.props.maxChars - this.state.counter.length
    return(
      <div>
        <strong>Your message:</strong>
        <input type="text" name="counter" id="message" onChange={this.handleChange} value={this.state.counter}/>
        <p>{twitterState}</p>
      </div>
    );
  }
}

export default TwitterMessage;
