import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { HomePage, AboutAppsPage, ProjectPage } from './pages';

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
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
    ],
  },
]);

export default router;
