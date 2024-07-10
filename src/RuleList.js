import Rule from './Rule';

const RuleList = ({ rules }) => {
    return rules.map((rule) => <Rule key={rule.id} {...rule} />);
};

export default RuleList;
