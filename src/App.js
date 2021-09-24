import React, {useState} from 'react';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }
 
  const countTotalFeedback = () => {
    const total = bad + neutral + good;
    return total;
  }
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positivePercentage = Math.round(good / totalFeedback * 100);
    return positivePercentage;
  }

   return (
      <Container>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() <= 0  ?
            <Notification message="No feedback given"/>
            :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()} />}
        </Section>

      </Container>
    );
}
