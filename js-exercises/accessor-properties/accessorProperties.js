function accessorProperties() {
  return {
    num: null,
    get number() {
      return this.num.toString(2);
    },
    set number(value) {
      if (typeof (value) !== 'number') {
        throw new Error(`Error: Cannot assign ${typeof (value)} to property of type number`);
      }
      this.num = value;
    },
  };
}

export {
  accessorProperties,
};
