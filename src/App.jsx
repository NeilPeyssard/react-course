import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RuleList from './pages/RuleList.jsx';
import { RoleProvider } from './services/RoleContext.jsx';
import { LocaleProvider } from './services/LocaleContext.jsx';
import Layout from './components/Layout.jsx';
import RuleForm from './pages/RuleForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addRules, getRules } from './services/rules.store.js';
import Loader from './components/Loader.jsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const delay = (ms) => (data) => new Promise(
  (resolve) => setTimeout(() => resolve(data), ms),
);

function App() {
  const dispatch = useDispatch();
  const rules = useSelector(getRules);

  const { isLoading } = useQuery({
    queryKey: ['rules'],
    queryFn: () => axios.get('/data.json').then(delay(1990)).then((res) => {
      dispatch(addRules(res.data))

      return res.data;
    })
  });

  return (
    <RoleProvider>
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={isLoading ? <Loader /> : <RuleList rules={rules} />} />
              <Route path="/new" element={<RuleForm />} />
              <Route path="/edit/:id" element={isLoading ? <Loader /> : <RuleForm />} />
            </Route>
          </Routes>          
        </BrowserRouter>
      </LocaleProvider>
    </RoleProvider>
  );
}

export default App;
