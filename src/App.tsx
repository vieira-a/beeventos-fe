import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { EventPage } from './features/Event/pages';
import { HomePage } from './features/Home/Pages';
import { Login } from './features/Login/pages';
import { RegisterPage } from './features/Register/Pages';
import { PrivateRoutes } from './routers/PrivateRoutes';

function App() {
  return (
    <main className="w-full h-full">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
          </Route>
          <Route element={<HomePage />} path='/' />
          <Route element={<EventPage />} path='/event/:id' />
          <Route element={<RegisterPage />} path='/register'/>
        </Routes>
        <Login />
      </Router>
      
    </main>
  );
}

export default App;
