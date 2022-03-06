import Title from './Section.styled';

const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);
export default Section;
