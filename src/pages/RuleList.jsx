import { useContext, useEffect, useState } from 'react';
import { RoleContext } from '../services/RoleContext';
import Rule from '../components/Rule';
import Loader from '../components/Loader';

const delay = (ms) => (data) => new Promise(
    (resolve) => setTimeout(() => resolve(data), ms),
  );
  
  const loadFile = (fileName, signal) => new Promise(
    (resolve) => {
      fetch(fileName, { signal: signal })
      .then((res) => res.json())
      .then(delay(1000))
      .then(resolve)
    }
  );

const RuleList = () => {
    const { role } = useContext(RoleContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        Promise
        .all([
            loadFile('./data.json', controller.signal),
            loadFile('./data2.json', controller.signal),
        ])
        .then((res) => {
            setData([...res[0], ...res[1]]);
        })
        .finally(() => setLoading(false));

        return () => {
            // Commented because strict mode
            // controller.abort();
            setData([]);
        };
    }, []);

    if (loading) {
        return <Loader />;
    }

    return data
        .filter((rule) => {
            if ('admin' === role) {
                return rule.status === "pending" || rule.status === "validated";
            }

            return rule.status === "validated";
        })
        .map((rule) => <Rule key={rule.id} {...rule} />);
};

export default RuleList;
