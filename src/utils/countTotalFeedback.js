export const countTotalFeedback = statistics => {
  return Object.values(statistics).reduce((acc, item) => acc + item);
};
