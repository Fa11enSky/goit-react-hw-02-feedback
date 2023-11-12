const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(el => {
        return (
          <li key={el}>
            <button type="button" data-id={el} onClick={onLeaveFeedback}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;
