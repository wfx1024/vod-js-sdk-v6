function isFile(v: any): boolean {
  return Object.prototype.toString.call(v) == "[object File]";
}

function isFunction(v: any): boolean {
  return typeof v === "function";
}

function isString(v: any): boolean {
  return typeof v === "string";
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function noop() {}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export default {
  isFile,
  isFunction,
  isString,
  noop,
  delay
};
