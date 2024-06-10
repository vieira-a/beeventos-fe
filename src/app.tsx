import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AtendeesRegisterPage } from './modules/atendees/pages';
import { AtendeeEventsPage } from './modules/evaluations/pages/atendee-events';
import { EventEvaluation } from './modules/evaluations/pages/event-evaluation';
import { EventPage } from './modules/events/pages';
import { Home } from './modules/home/pages';
import { Authentication } from './modules/users/auth/pages';
import { PrivateRoutes } from './shared/routers/private-routes';

function App() {
  return (
    <main className="w-full h-full">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<AtendeeEventsPage />} path='/my-events'/>
            <Route element={<EventEvaluation />} path='/evaluations/:id'/>
          </Route>
          <Route element={<AtendeesRegisterPage />} path='/register'/>
          <Route element={<Authentication />} path='/login'/>
          <Route element={<EventPage />} path='/event/:id' />
          <Route element={<Home />} path='/' />
        </Routes>
      </Router>
      <Toaster />
    </main>
  );
}

export default App;
