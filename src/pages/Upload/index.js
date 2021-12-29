import React, { useState } from 'react';
import Loading from '../../component/Loading';
import { useVideo } from '../../hooks/hooks';
import styles from './index.less';
export default () => {
  const { upload, uploadLoading } = useVideo();
  const [file, setFile] = useState(null);
  const [uploadedList, setUploadedList] = useState([]);
  const onchange = event => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <div className={styles.upload}>
      <input type="file" onChange={onchange} />
      <button
        onClick={async () => {
          const data = await upload(file);
          if (data) {
            setUploadedList([...uploadedList, data]);
          }
        }}
        disabled={!file}
      >
        Upload
      </button>

      <div className={styles.uploadList}>
        {uploadedList.map((_, index) => {
          return (
            <div key={index} className={styles.uploadItem}>
              <div>key: {_.key}</div>
              <div>Bucket: {_.Bucket}</div>
            </div>
          );
        })}
      </div>
      <Loading loading={uploadLoading} />
    </div>
  );
};
