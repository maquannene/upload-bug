import * as React from 'react';
import { Upload } from 'antd';
import styles from './index.less';

export interface IUploadImageProps {
  value?: string;
  onChange?: (url?: string) => void;
}

const UploadImage: React.FC<IUploadImageProps> = (props: IUploadImageProps) => {
  const { value, onChange } = props;
  const [fileList, setFileList] = React.useState<any>([
    {
      url: value,
    },
  ]);
  React.useEffect(() => {
    if (value) {
      setFileList([{ url: value }]);
    } else {
      setFileList([]);
    }
  }, [value]);
  return (
    <Upload
      className={styles.UploadImage}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onChange={v => {
        setFileList(v.fileList);
        if (v.fileList.length === 0) {
          onChange?.(undefined);
        } else {
          const url = v.fileList[0]?.response?.url;
          if (url) {
            onChange?.(url);
          }
        }
      }}
    >
      {fileList.length > 0 ? null : (
        <div>
          <div style={{ marginTop: 8 }}>上传Icon</div>
        </div>
      )}
    </Upload>
  );
};

export default UploadImage;
