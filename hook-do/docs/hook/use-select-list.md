---
title: useSelectList
nav:
  title: hooks
  order: 2
---

# useSelectList

便于对数据进行操作，可对数组进行增加、删除以及判断元素是否存在。

## 基础用法

```tsx
import React, { useState } from 'react';
import useSelectList from './useSelectList';

export default function() {
  const { list, setList, has, add, remove } = useSelectList<number>([]);

  return (
    <>
      {list.join('、')}
      <button onClick={() => add(1)}>增加</button>
    </>
  );
}
```

## 存储对象

在数组中存储对象的情况下，需要给数组增加一个唯一的key用来比标识数组。

```tsx
import React, { useState } from 'react';
import useSelectList from './useSelectList';

export default function() {
  const { list, setList, has, add, remove, toggle } = useSelectList<number>([], {
    key: 'id'
  });

  return (
    <>
      {list.join('、')}
      <button onClick={() => add({ id: 1 })}>增加</button>
    </>
  );
}
```
