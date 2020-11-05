function updateInventory(...args) {
  const currInv = args[0];
  const newInv = args[1];
  newInv.forEach(([stock, itemName]) => {
    const existingItem = currInv.find(([, currItem]) => currItem === itemName);
    if (existingItem) {
      existingItem[0] += stock;
    } else {
      currInv.push([stock, itemName]);
    }
  });
  return currInv.sort(([, item1], [, item2]) => {
    const x = item1.toLowerCase();
    const y = item2.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
}

export {
  updateInventory,
};
