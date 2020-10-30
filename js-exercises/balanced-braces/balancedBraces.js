function balancedBraces(args) {
  const OPEN_TYPES = ['{', '(', '['];
  const CLOSED_TYPES = ['}', ')', ']'];
  if (typeof (args) !== 'string') {
    throw new Error(`Error: Expected string, got ${typeof (args)}!`);
  }
  const onlyNotations = args.replace(/[^(){}[\]]/g, '');
  const openNotations = [];
  let currentOpenNotation = '';
  for (const notation of onlyNotations) {
    if (OPEN_TYPES.includes(notation)) {
      openNotations.push(notation);
      currentOpenNotation = notation;
    } else if (currentOpenNotation === OPEN_TYPES[CLOSED_TYPES.indexOf(notation)]) {
      openNotations.pop();
      currentOpenNotation = openNotations.length > 0 ? openNotations[openNotations.length - 1] : '';
    } else {
      break;
    }
  }
  return openNotations.length === 0;
}

export {
  balancedBraces,
};
