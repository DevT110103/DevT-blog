import configs from '~/configs';
import { NavList } from '~/interfaces';

export const navList: NavList[] = [
  {
    id: 1,
    name: 'Home',
    link: configs.routes.home,
  },
  {
    id: 2,
    name: 'Blog',
    link: configs.routes.blog,
  },
  {
    id: 3,
    name: 'Author',
    link: configs.routes.author,
  },
];
