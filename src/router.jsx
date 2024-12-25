import { createBrowserRouter } from 'react-router-dom';
import { HomePage, AboutAppsPage, ProjectPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutAppsPage />,
  },
  {
    path: '/projects/:id',
    element: <ProjectPage />,
  },
]);

export default router;
