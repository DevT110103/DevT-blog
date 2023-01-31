import classNames from 'classnames/bind';

import styles from './WrapperHashTags.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeWrapperHashTags {
  children: string;
}

function WrapperHashTags({ children }: PropsTypeWrapperHashTags) {
  const getJSX = () => {
    const parts = children.split(/((?:#|@)[a-zA-Z_-]+)/).filter((s) => s.length);
    console.log('parts ->', parts);

    return parts.map((part) => {
      if (part.startsWith('@')) {
        return <span style={{ color: 'red' }}>{part}</span>;
      } else if (part.startsWith('#')) {
        return <span style={{ color: 'green' }}>{part}</span>;
      } else if (part.split(/\r?\n/).length >= 2) {
        const partNewLines = part.split(/\r?\n/);
        const partNewLineRender = partNewLines.map((partNewLine) => {
          return <p>{partNewLine}</p>;
        });
        return partNewLineRender;
      } else {
        return part;
      }
    });
  };

  return <div className={cx('wrapper')}>{getJSX()}</div>;
}

export default WrapperHashTags;
