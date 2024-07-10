import Rule from './Rule';
import PropTypes from 'prop-types';

const RuleList = ({ rules }) => {
    return rules.map((rule) => <Rule key={rule.id} {...rule} />);
};

RuleList.propTypes = {
    rules: PropTypes.array,
};

export default RuleList;
