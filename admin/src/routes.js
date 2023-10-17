import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import CategoriesPage from './pages/CategoriesPage';
import VisaCategoriesPage from './pages/VisaCategoriesPage';
import VisaPage from './pages/VisaPage';
import ContactPage from './pages/ContactPage';
import PackagePage from './pages/PackagePage';
import ToursPage from './pages/ToursPage';
import SubscriberPage from './pages/SubscriberPage';
import CreatePackage from './pages/CreatePackage';
import CreateCategory from './pages/CreateCategory';
import CreateSubscriber from './pages/CreateSubscriber';
import CreateVisa from './pages/CreateVisa';
import CreateVisaCategory from './pages/CreateVisaCategory';
import CreateTour from './pages/CreateTour';
import CountriesPage from './pages/CountriesPage';
import CreateCountry from './pages/CreateCountry';
import EditCategory from './pages/EditCategory';
import EditVisaCategory from './pages/EditVisaCategory';
import EditVisa from './pages/EditVisa';
import EditTour from './pages/EditTour';
import EditPackage from './pages/EditPackage';
import EditCountry from './pages/EditCountry';

// ----------------------------------------------------------------------

export default function Router() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  const commonRoutes = [
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" /> },
  ];

  const authenticatedRoutes = [
    { element: <Navigate to="/admin/dashboard/app" />, index: true },
    { path: 'app', element: <DashboardAppPage /> },
    { path: 'user', element: <UserPage /> },
    { path: 'products', element: <ProductsPage /> },
    { path: 'blog', element: <BlogPage /> },
    { path: 'countries', element: <CountriesPage /> },
    { path: 'categories', element: <CategoriesPage /> },
    { path: 'contact', element: <ContactPage /> },
    { path: 'package', element: <PackagePage /> },
    { path: 'subscriber', element: <SubscriberPage /> },
    { path: 'tours', element: <ToursPage /> },
    { path: 'visacategories', element: <VisaCategoriesPage /> },
    { path: 'visas', element: <VisaPage /> },
    { path: 'createpackage', element: <CreatePackage /> },
    { path: 'createcategory', element: <CreateCategory /> },
    { path: 'createcountry', element: <CreateCountry /> },
    { path: 'createsubscriber', element: <CreateSubscriber /> },
    { path: 'createvisa', element: <CreateVisa /> },
    { path: 'createvisacategory', element: <CreateVisaCategory /> },
    { path: 'createtour', element: <CreateTour /> },
    { path: 'EditCategory', element: <EditCategory /> },
    { path: 'EditVisaCategory', element: <EditVisaCategory /> },
    { path: 'EditVisa', element: <EditVisa /> },
    { path: 'EditTour', element: <EditTour /> },
    { path: 'EditPackage', element: <EditPackage /> },
    { path: 'EditCountry', element: <EditCountry /> },
  ];

  const unauthenticatedRoutes = [{ path: 'admin/', element: <LoginPage /> }];

  const routes = useRoutes([
    {
      path: '/admin/dashboard',
      element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/admin" />,
      children: isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes,
    },
    { path: '/admin/', element: isAuthenticated ? <Navigate to="/admin/dashboard" /> : <LoginPage /> },
    ...commonRoutes,
  ]);
  return routes;
}
