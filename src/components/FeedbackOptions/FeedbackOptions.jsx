
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions =({options, onLeaveFeedeback}) => {
  const feedbackOptions = [
    { value: 'good', label: 'Good' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'bad', label: 'Bad' },
  ];

  return (
    <div>
      {feedbackOptions.map((option) => (
        <Button type="button" key={option.value} onClick={() => onLeaveFeedeback(option.value)}>
          {option.label}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedeback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
