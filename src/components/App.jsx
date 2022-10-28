import { useState } from 'react';
import { Box } from './Box';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../utils';
import noResultsImg from '../img/no-result.png';

export const App = () => {
  const [grades, setGrades] = useState({ good: 0, neutral: 0, bad: 0 });

  const saveFeedback = grade => {
    setGrades(prevState => ({ ...prevState, [grade]: prevState[grade] + 1 }));
  };

  const options = Object.keys(grades);
  const total = countTotalFeedback(grades);
  const positivePercentage = countPositiveFeedbackPercentage(grades);

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
        <FeedbackOptions options={options} onLeaveFeedback={saveFeedback} />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            statistics={grades}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" image={noResultsImg} />
      )}
    </Box>
  );
};
