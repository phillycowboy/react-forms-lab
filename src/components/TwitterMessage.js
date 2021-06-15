import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280
    }
  }
  // handleChange = () => {
  //   this.setState( prevState => {
  //     return {
  //       ...prevState,
  //       maxChars: this.state.maxChars - 1
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.props.handleChange(event)} value={this.props.twitterData.message}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
