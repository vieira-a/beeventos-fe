import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Toaster } from './components/ui/toaster';
import { AtendeeEventsPage } from './modules/evaluations/pages/atendee-events';
import { EventEvaluation } from './modules/evaluations/pages/event-evaluation';
import { EventPage } from './modules/events/pages';
import { CreateEvent } from './modules/events/pages/create-event';
import { Home } from './modules/home/pages';
import { Admin } from './modules/users/admin/pages/admin';
import { EventEvaluationsReport } from './modules/users/admin/pages/event-evaluations-report';
import { Authentication } from './modules/users/auth/pages';
import { SignUp } from './modules/users/signup/pages';
import { AdminRoutes } from './shared/routers/admin-routes';
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
          <Route element={<AdminRoutes />}>
            <Route element={<EventEvaluationsReport />} path='/event/:id/evaluations'/>
            <Route element={<Admin />} path='/admin' />
          </Route>
          <Route element={<EventPage />} path='/event/:id' />
          <Route element={<Home />} path='/' />
        </Routes>
        <Authentication />
        <SignUp/>
        <CreateEvent />
      </Router>
      <Toaster />
    </main>
  );
}

export default App;
