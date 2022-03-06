import Button from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <Button type="button" onClick={onLeaveFeedback[0]}>
      {options[0]}
    </Button>
    <Button type="button" onClick={onLeaveFeedback[1]}>
      {options[1]}
    </Button>
    <Button type="button" onClick={onLeaveFeedback[2]}>
      {options[2]}
    </Button>
  </>
);

export default FeedbackOptions;
