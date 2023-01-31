import configs from '~/configs';
import { NavList } from '~/interfaces';
import uuid from 'react-uuid';

export const navList: NavList[] = [
  {
    id: uuid(),
    name: 'Trang chủ',
    link: configs.routes.home,
  },
  {
    id: uuid(),
    name: 'Sản phẩm của mình',
    link: configs.routes.blog,
  },
  {
    id: uuid(),
    name: 'Tác giả',
    link: configs.routes.author,
  },
];
