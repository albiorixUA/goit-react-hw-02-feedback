import Item from './Statistics.styled';

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <Item> Good:{good}</Item>
    <Item>Neutral:{neutral}</Item>
    <Item> Bad: {bad}</Item>
    <Item> Total :{total} </Item>
    <Item>Positive feedback :{positivePercentage}</Item>
  </ul>
);

export default Statisctics;
