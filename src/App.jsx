import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RuleList from './pages/RuleList.jsx';
import { RoleProvider } from './services/RoleContext.jsx';
import { LocaleProvider } from './services/LocaleContext.jsx';
import Layout from './components/Layout.jsx';
import RuleForm from './pages/RuleForm.jsx';
import Loader from './components/Loader.jsx';
import useFetchRules from './hooks/useFetchRules.js';
import { useEffect } from 'react';

function App() {
  const { loading, request } = useFetchRules();

  useEffect(() => {
    request();
  }, []);

  return (
    <RoleProvider>
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={loading ? <Loader /> : <RuleList />} />
              <Route path="/new" element={<RuleForm />} />
              <Route path="/edit/:id" element={loading ? <Loader /> : <RuleForm />} />
            </Route>
          </Routes>          
        </BrowserRouter>
      </LocaleProvider>
    </RoleProvider>
  );
}

export default App;
