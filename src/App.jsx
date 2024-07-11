import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RuleList from './pages/RuleList.jsx';
import { RoleProvider } from './services/RoleContext.jsx';
import { LocaleProvider } from './services/LocaleContext.jsx';
import Layout from './components/Layout.jsx';
import RuleForm from './pages/RuleForm.jsx';

function App() {
  return (
    <RoleProvider>
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<RuleList />} />
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
