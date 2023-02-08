/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './AddProduct.module.scss';
import { Col, Row } from 'antd';
import CardAdmin from '~/components/CardAdmin';
import Input from '~/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import * as request from '~/utils/request';
import { useNavigate } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

interface PropsTypeAddProduct {}

function AddProduct({}: PropsTypeAddProduct) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [file, setFile] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const navigate = useNavigate();

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddTile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    request
      .post('categories/create', {
        nameCategory: title,
        thumbnail: selectedFile,
      })
      .then(() => {
        navigate(configs.routes.admin);
      })
      .catch((e) => {
        console.log('e  ->', e);
      });
  };
  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 8 }}>
          <div className={cx('wrapper-control')}>
            <Input
              id="hehe"
              title="Nhập tên"
              label
              placeholder="Nhập tên danh mục..."
              type="text"
              required
              onChange={handleAddTile}
              value={title}
            ></Input>
            <label className={cx('btn-upload')} htmlFor="uploadFileImage">
              <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
              <span>Upload File</span>
            </label>
            <input type="file" id="uploadFileImage" accept="image/*" hidden onChange={handleAddImage} />

            <Button solid onClick={handleSubmit}>
              Tạo category
            </Button>
          </div>
        </Col>
        <Col span={24} lg={{ span: 16 }}>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 16 }}>
              <div className={cx('preview')}>
                <h3 className="gradient-effect">
                  <a className={cx('title')}>{title}</a>
                </h3>
                {file && <img className={cx('img-preview')} src={file} alt="" />}
              </div>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <div className={cx('hehe')}>
                <CardAdmin img={file || '/images/admin/4884785.jpg'} title={title}></CardAdmin>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddProduct;
