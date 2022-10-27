import { Button, Controls } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map(item => (
        <li key={item}>
          <Button onClick={() => onLeaveFeedback(item)}>
            {item[0].toUpperCase() + item.slice(1)}
          </Button>
        </li>
      ))}
    </Controls>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
