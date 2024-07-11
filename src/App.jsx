import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RuleList from './pages/RuleList.jsx';
import { RoleProvider } from './services/RoleContext.jsx';
import { LocaleProvider } from './services/LocaleContext.jsx';
import Layout from './components/Layout.jsx';
import RuleForm from './pages/RuleForm.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRules, getRules } from './services/rules.store.js';
import Loader from './components/Loader.jsx';

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

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector(getRules);

  useEffect(() => {
    const controller = new AbortController();

    Promise
        .all([
            loadFile('./data.json', controller.signal),
            loadFile('./data2.json', controller.signal),
        ])
        .then((res) => {
            dispatch(addRules([...res[0], ...res[1]]));
        })
        .finally(() => setLoading(false));

        return () => {
            // Commented because strict mode
            // controller.abort();
        };
  }, [dispatch]);

  return (
    <RoleProvider>
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={loading ? <Loader /> : <RuleList rules={data} />} />
              <Route path="/new" element={<RuleForm />} />
              <Route path="/edit/:id" element={<RuleForm />} />
            </Route>
          </Routes>          
        </BrowserRouter>
      </LocaleProvider>
    </RoleProvider>
  );
}

export default App;
