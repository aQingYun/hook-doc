import React, { useState } from 'react';
import useSelectList from './useSelectList';

export default function() {
  const { list, setList, has, add, remove, toggle } = useSelectList<number>([]);

  return (
    <>
      {list.join('、')}
      <button onClick={() => add(1)}>增加</button>
    </>
  );
}
