import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';

import PostCard from '~/components/PostCard';
import { PropsTypePostCard } from '~/components/PostCard/interfaces';
import styles from './SpacePost.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  listPost: PropsTypePostCard[];
  loading?: boolean;
}

function SpacePost({ listPost, loading }: PropsType) {
  if (loading) {
    return <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner}></FontAwesomeIcon>;
  }
  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        {listPost.map((card, index) => {
          return (
            <Col key={index} span={24} lg={{ span: 24 }}>
              <PostCard
                dateTime={card.dateTime}
                desc={card.desc}
                title={card.title}
                titleImg={card.titleImg}
                userName={card.userName}
                image={card.image}
                swap={card.swap}
              ></PostCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SpacePost;
