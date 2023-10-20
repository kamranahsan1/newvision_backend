// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/admin/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Countries',
    path: '/admin/dashboard/countries',
    icon: icon('ic_world'),
  },
  {
    title: 'Categories',
    path: '/admin/dashboard/categories',
    icon: icon('ic_category'),
  },
  {
    title: 'Contact',
    path: '/admin/dashboard/contact',
    icon: icon('ic_user'),
  },
  {
    title: 'Packages',
    path: '/admin/dashboard/package',
    icon: icon('ic_packages'),
  },
  {
    title: 'Subscriber',
    path: '/admin/dashboard/subscriber',
    icon: icon('ic_bell'),
  },
  {
    title: 'Tours',
    path: '/admin/dashboard/tours',
    icon: icon('ic_tour'),
  },
  {
    title: 'Visa Categories',
    path: '/admin/dashboard/visacategories',
    icon: icon('ic_cart'),
  },
  {
    title: 'Visas',
    path: '/admin/dashboard/visas',
    icon: icon('ic_visa'),
  },
];

export default navConfig;
