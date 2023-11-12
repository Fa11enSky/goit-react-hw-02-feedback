import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateState = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };
  handleClick = ev => {
    this.updateState(ev.target.dataset.id);
  };
  countTotalFeedback = obj => {
    return Object.values(obj).reduce((acc, el) => acc + el, 0);
  };
  positivePercentage = obj => {
    return (obj.good / this.countTotalFeedback(obj)) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.positivePercentage(this.state) || 0}
          />
        ) : (
          <Notification messoge={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
export default App;
