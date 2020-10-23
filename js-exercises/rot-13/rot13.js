function rot13(...args) {
  const cipherText = args[0];
  return cipherText.replace(/[A-Z]/g, (char) => String.fromCharCode(char.charCodeAt(0) + (char < 'N' ? 13 : -13)));
}

export {
  rot13,
};
