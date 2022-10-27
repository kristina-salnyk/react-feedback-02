import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, firstLevelTitle = false, children }) => {
  const titleProps = { as: firstLevelTitle ? 'h1' : 'h2' };
  return (
    <section>
      <Title {...titleProps}>{title}</Title>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
  firstLevelTitle: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
