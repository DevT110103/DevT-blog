import classNames from 'classnames/bind';
import CategoryItem from '../CategoryItem';
import PostCardCircle from '../PostCardCircle';
import TitleBar from '../TitleBar';

import styles from './SideBar.module.scss';
import { PostCardCircleList, TagList } from './store';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('blog-rating')}>
        <TitleBar>Latest Articles</TitleBar>
        {PostCardCircleList.map((card, index) => {
          return <PostCardCircle key={index} title={card.title} image={card.image} date={card.date}></PostCardCircle>;
        })}
      </div>
      <div className={cx('wrapper-category')}>
        <TitleBar>Categories</TitleBar>
        {TagList.map((tag, index) => {
          return (
            <CategoryItem
              key={index}
              tag={tag.tag}
              amount={tag.amount}
              gettingStarted={tag.gettingStarted}
              health={tag.health}
              lifeStyle={tag.lifeStyle}
              places={tag.places}
              technology={tag.technology}
            ></CategoryItem>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
