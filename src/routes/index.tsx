import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const baseURL = '/meta';
  const isDashboard = pathname.includes(`${baseURL}/dashboard`);

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const baseURL = '/meta';
  return useRoutes([
    // Dashboard Routes
    {
      path: `${baseURL}/dashboard`,
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={`${baseURL}/dashboard/one`} replace /> },
        { path: `${baseURL}/one`, element: <PageOne /> },
        { path: `${baseURL}/two`, element: <PageTwo /> },
        { path: `${baseURL}/three`, element: <PageThree /> },
        {
          path: `${baseURL}/app`,
          children: [
            { element: <Navigate to={`${baseURL}/dashboard/app/four`} replace /> },
            { path: `${baseURL}/four`, element: <PageFour /> },
            { path: `${baseURL}/five`, element: <PageFive /> },
            { path: `${baseURL}/six`, element: <PageSix /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: `${baseURL}/404`, element: <NotFound /> },
        { path: '*', element: <Navigate to={`${baseURL}/404`} replace /> }
      ]
    },
    {
      path: `${baseURL ? baseURL + '/' : '/'}`,
      element: <MainLayout />,
      children: [{ element: <LandingPage /> }]
    },
    {
      path: `${baseURL}/lounge`,
      element: <MainLayout />,
      children: [{ element: <LoungePage /> }]
    },
    { path: '*', element: <Navigate to={`${baseURL}/404`} replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const LoungePage = Loadable(lazy(() => import('../pages/LoungePage')));
