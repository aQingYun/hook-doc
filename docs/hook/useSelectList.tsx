import { useState } from 'react';

function useSelectList<T = any, K = any>(initVal: T[], key?: string) {
  const [list, setList] = useState<T[]>(initVal);

  const remove = (val: T | K) => {
    setList(l => {
      const temp = [...l];
      const index = (value: K | T) => {
        if (key) {
          // @ts-ignore
          return l.findIndex(v => v[key] === value);
        } else {
          return l.indexOf(value as T);
        }
      };
      temp.splice(index(val), 1);

      return temp;
    });
  };

  const add = (val: T) => setList(l => [...l, val]);

  const has = (val: T | K) => {
    if (key) {
      // @ts-ignore
      return list.findIndex(v => v[key] === val) !== -1;
    } else {
      return list.includes(val as T);
    }
  };

  const toggle = (val: T | K) => {
    has(val) ? remove(val) : add(val as T);
  };

  return {
    has,
    add,
    remove,
    list,
    setList,
    toggle,
  };
}

export default useSelectList;
