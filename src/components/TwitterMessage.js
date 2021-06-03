import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let leftover=this.props.maxChars-this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" maxlength={this.props.maxChars} value={this.state.message}/>
        {leftover}
      </div>
    );
  }
}

export default TwitterMessage;
