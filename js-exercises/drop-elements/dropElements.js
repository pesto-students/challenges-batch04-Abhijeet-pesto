function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    throw new Error(`Error: Expected array as 1st argument, got ${typeof (elements)}`);
  }
  if (typeof (predicate) !== 'function') {
    throw new Error(`Error: Expected function as 2nd argument, got ${typeof (predicate)}`);
  }
  return elements.filter(item => predicate(item));
}

export { dropElements };
