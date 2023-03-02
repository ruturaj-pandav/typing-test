
import React, { Component } from "react";
import InputAndText from "./InputAndText";
import Results from "./Results";
import Timer from "./Timer";

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      show: "timer",
      maxwords: 30,
      seconds: 0,
      typingResults: [],
      currentword: 0,
    };
  }
  onSpaceBar = (user, word) => {
    
    user = user.trim();
    word = word.trim();
    let typingresults = this.state.typingResults;
    let thisobj = {
      user,

      word,
    };
    typingresults.push(thisobj);
    this.setState({ currentword: this.state.currentword + 1 });
    if (this.state.currentword > 10 && this.state.currentword % 27 === 0) {
      this.setState({maxwords :this.state.maxwords + 25})
    }
    this.setState({ typingResults: typingresults });
    
  };

  restart = () => {
    window.location.reload();
  };

  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
    setTimeout(() => {
      this.setState({ show: "test" });
    }, 6000);
    setTimeout(() => {
      this.setState({ show: "results" });
    }, 66000);
  }
  render() {
    return (
      <div className="bg-cyan-900 h-fit flex items-center justify-center">
        {this.state.show === "timer" && <Timer seconds = {this.state.seconds}/>}
        {this.state.show === "test" && (
          <InputAndText
            onSpaceBar={this.onSpaceBar}
            maxwords={this.state.maxwords}
            typingResults = {this.state.typingResults}
            currentword={this.state.currentword}
          />
        )}
        {this.state.show === "results" && (
          <Results typingResults={this.state.typingResults} restart ={this.restart} />
        )}
      </div>
    );
  }
}
