// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Countries',
    path: '/dashboard/countries',
    icon: icon('ic_world'),
  },
  {
    title: 'Categories',
    path: '/dashboard/categories',
    icon: icon('ic_user'),
  },
  {
    title: 'Contact',
    path: '/dashboard/contact',
    icon: icon('ic_user'),
  },
  {
    title: 'Package',
    path: '/dashboard/package',
    icon: icon('ic_user'),
  },
  {
    title: 'Subscriber',
    path: '/dashboard/subscriber',
    icon: icon('ic_user'),
  },
  {
    title: 'Tours',
    path: '/dashboard/tours',
    icon: icon('ic_user'),
  },
  {
    title: 'Visa Categories',
    path: '/dashboard/visacategories',
    icon: icon('ic_cart'),
  },
  {
    title: 'Visas',
    path: '/dashboard/visas',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
