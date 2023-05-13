import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(item => {
        return (
          <li key={item}>
            <button onClick={onLeaveFeedback} name={item}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// <ul>
//   <li>
//     <button onClick={onLeaveFeedback} name="good">
//       good
//     </button>
//   </li>
//   <li>
//     <button onClick={onLeaveFeedback} name="neutral">
//       neutral
//     </button>
//   </li>
//   <li>
//     <button onClick={onLeaveFeedback} name="bad">
//       bad
//     </button>
//   </li>
// </ul>
