import { useContext } from 'react';
import { RoleContext } from '../services/RoleContext';
import Rule from '../components/Rule';

const RuleList = ({rules}) => {
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
