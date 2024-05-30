import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './features/Home/Pages';
import { Login } from './features/Login/pages';
import { RegisterPage } from './features/Register/Pages';
import { PrivateRoutes } from './routers/PrivateRoutes';

function App() {
  return (
    <main className="w-full h-full p-8">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
          </Route>
          <Route element={<HomePage />} path='/' />
          <Route element={<RegisterPage />} path='/register'/>
          <Route element={<Login />} path='/login' />
        </Routes>
      </Router>
      
    </main>
  );
}

export default App;
