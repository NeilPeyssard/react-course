import { useEffect, useState } from 'react';
import RuleList from './RuleList';
import Loader from './Loader';

const delay = (ms) => (data) => new Promise(
  (resolve) => setTimeout(() => resolve(data), ms),
);

const loadFile = (fileName, signal) => new Promise(
  (resolve) => {
    fetch(fileName, { signal: signal })
    .then((res) => res.json())
    .then(delay(3000))
    .then(resolve)
  }
);

function App() {
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

  return <RuleList rules={data} />;
}

export default App;
