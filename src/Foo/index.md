## Foo

Demo:

```tsx
import React from 'react';
import { Upload } from 'antd';
import { Foo } from 'upload-bug';

export default () => {
  return (
    <div>
      <Foo />
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
      >
        <div>
          <div style={{ marginTop: 8 }}>上传Icon</div>
        </div>
      </Upload>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
