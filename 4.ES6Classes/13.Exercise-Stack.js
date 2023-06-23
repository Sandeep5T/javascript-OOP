const _array = new WeakMap();

class Stack {
  constructor() {
    _array.set(this, []);
  }

  get count() {
    return _array.get(this).length;
  }

  push(value) {
    const existingArray = _array.get(this);
    existingArray.unshift(value);
    _array.set(this, existingArray);
  }

  peek() {
    if (_array.get(this).len1gth === 0) throw new Error("Stack is empty");
    return _array.get(this)[0];
  }

  pop() {
    const existingArray = _array.get(this);
    if (existingArray.length === 0) throw new Error("Stack is empty");
    _array.set(this, existingArray.slice(1));
    return existingArray.splice(0, 1)[0];
  }
}

const s = new Stack();
