import { List, Item, Totals } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <>
      <List>
        {Object.keys(statistics).map(item => (
          <Item key={item}>
            <span>{`${item[0].toUpperCase() + item.slice(1)}: ${
              statistics[item]
            }`}</span>
          </Item>
        ))}
      </List>
      <Totals>Total: {total}</Totals>
      <Totals>Positive feedback: {positivePercentage}%</Totals>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  statistics: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};
