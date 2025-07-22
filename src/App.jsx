import './index.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import JobEdit from './JobEdit';
import HireNowPage from './components/HireNowPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/job/edit/:id' element={<JobEdit />} />
      <Route path='/hire' element={<HireNowPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return (
    <div className='landing-page'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
