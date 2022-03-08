import Item from './Statistics.styled';
import propTypes from 'prop-types';

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <Item> Good:{good}</Item>
    <Item>Neutral:{neutral}</Item>
    <Item> Bad: {bad}</Item>
    <Item> Total :{total} </Item>
    <Item>Positive feedback :{positivePercentage}</Item>
  </ul>
);

Statisctics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.string,
};

export default Statisctics;
