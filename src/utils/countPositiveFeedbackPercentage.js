import { countTotalFeedback } from './countTotalFeedback';

export const countPositiveFeedbackPercentage = statistics => {
  const total = countTotalFeedback(statistics);
  return Math.round(total && (statistics['good'] * 100) / total);
};
