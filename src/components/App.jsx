
import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = (feedback) => {
    this.setState ((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] +1
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral +this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total === 0 ? 0: Math.roumd((positive / total) * 100);
    };

    render() {
      const feedbackOptions =[
        { value: "good", label: "Good"},
        { value: "neutral", label: "Neutral"},
        { value: "bad", label: "Bad"},
      ];

      return (
        <div>
          <Section titel = "Please leave feedeback"/>
          <FeedbackOptions options={feedbackOptions} onLeaveFeedeback={this.handleFeedback} />
          <Section title= "Statistics">
            {this.countTotalFeedback() === 0 ?(
              <Notification message="no feedback give" />
            ) : (
              <Statistics feedback={this.state} />
            )};
          </Section>
        </div>
      )
    }
}

export default App;
