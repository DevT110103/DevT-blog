import { Routes } from './interfaces';

import configs from '~/configs';
import Author from '../pages/Author';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Login from '~/pages/Login';
import LoginLayout from '~/layouts/LoginLayout';
import AdminLayout from '~/layouts/AdminLayout';
import Admin from '~/pages/Admin';
import ProductDetail from '~/pages/ProductDetail';
import AddProduct from '~/pages/AddProduct/AddProduct';
import AddLayout from '~/layouts/AddLayout';

const publicRoutes: Routes[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
  {
    path: configs.routes.blog,
    component: Blog,
  },
  {
    path: configs.routes.author,
    component: Author,
  },
  {
    path: configs.routes.login,
    component: Login,
    layout: LoginLayout,
  },
];

const privateRoutes: Routes[] = [
  {
    path: configs.routes.admin,
    component: Admin,
    layout: AdminLayout,
  },
  {
    path: configs.routes.productDetail,
    component: ProductDetail,
    layout: AdminLayout,
  },
  {
    path: configs.routes.addProduct,
    component: AddProduct,
    layout: AddLayout,
  },
];

export { publicRoutes, privateRoutes };
