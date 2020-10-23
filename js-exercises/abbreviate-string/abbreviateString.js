// import { isString } from "util";

function abbreviateString(str) {
  return `${str.slice(0, str.indexOf(' '))} ${str.charAt(str.lastIndexOf(' ') + 1).toUpperCase()}.`;
}

export { abbreviateString };
