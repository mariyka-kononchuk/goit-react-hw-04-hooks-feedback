import React, {Component} from 'react';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {

  static defaultProps = {
    initialValue: 0,
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue, 
  };
    
  leaveFeedback = (option) => {
    this.setState(prevState => ({
      [option] : prevState[option] + 1,
      }));
  }
  
  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  }
  
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback()
    const positivePercentage = Math.round(this.state.good/totalFeedback*100);
    return positivePercentage;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback <= 0  ?
            <Notification message="No feedback given"/>
            :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />}
        </Section>

      </Container>
    );
  }
}

export default App;


// goodFeedbackIncrement = () => {
    //   console.log("кликнули на Good");
    //   this.setState(prevState => ({
    //     good: prevState.good + 1,
    //     }));
    // }
    // neutralFeedbackIncrement = () => {
    //   console.log("кликнули на Neutral");
    //   this.setState(prevState => ({
    //     neutral: prevState.neutral + 1,
    //     }));
    // }
    // badFeedbackIncrement = () => {
    //   console.log("кликнули на Bad");
    //   this.setState(prevState => ({
    //     bad: prevState.bad + 1,
    //     }));
    // }