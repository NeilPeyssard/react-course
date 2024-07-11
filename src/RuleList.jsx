import { useContext } from 'react';
import { RoleContext } from './RoleContext';
import Rule from './Rule';
import PropTypes from 'prop-types';

const RuleList = ({ rules }) => {
    const { role } = useContext(RoleContext);

    return rules
        .filter((rule) => {
            if ('admin' === role) {
                return rule.status === "pending" || rule.status === "validated";
            }

            return rule.status === "validated";
        })
        .map((rule) => <Rule key={rule.id} {...rule} />);
};

RuleList.propTypes = {
    rules: PropTypes.array,
};

export default RuleList;
