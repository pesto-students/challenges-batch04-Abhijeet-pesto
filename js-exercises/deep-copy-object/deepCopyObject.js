const deepCopyObject = (objToCopy, copyDescriptors = false) => {
  let outObject;

  // Handle Primitives
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }

  // Handle Date
  if (objToCopy instanceof Date) {
    outObject = new Date();
    outObject.setTime(objToCopy.getTime());
    return outObject;
  }

  // Handle Array
  if (objToCopy instanceof Array) {
    outObject = [];
    for (let i = 0; i < objToCopy.length; i += 1) {
      outObject[i] = deepCopyObject(objToCopy[i]);
    }
    return outObject;
  }

  // Handle Object
  if (objToCopy instanceof Object) {
    outObject = {};
    for (const key in objToCopy) {
      if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
        outObject[key] = deepCopyObject(objToCopy[key]);
        if (copyDescriptors) {
          const propDescriptor = Object.getOwnPropertyDescriptor(objToCopy, key);
          Object.defineProperty(outObject, key, propDescriptor);
        }
      }
    }
  }

  return outObject;
};

export { deepCopyObject };
