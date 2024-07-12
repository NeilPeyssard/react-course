import { useContext } from 'react';
import { RoleContext } from '../services/RoleContext';
import Rule from '../components/Rule';
import { getRules } from '../services/rules.store';
import { useSelector } from 'react-redux';

const RuleList = () => {
    const rules = useSelector(getRules);
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

export default RuleList;
