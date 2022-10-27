import { Component } from 'react';
import { Box } from './Box';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../utils';
import noResultsImg from '../img/no-result.png';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  saveFeedback = grade => {
    this.setState(prevState => ({ [grade]: prevState[grade] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);
    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    return (
      <Box
        p="30px"
        bg="white"
        width="390px"
        m="10px auto"
        display="grid"
        gridGap="30px"
      >
        <Section title="Please leave feedback" firstLevelTitle={true}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.saveFeedback}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              statistics={this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" image={noResultsImg} />
        )}
      </Box>
    );
  }
}
