import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(options);
  return (
    <ul>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
