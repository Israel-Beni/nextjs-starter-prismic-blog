const logKeyAndType = <T>(object: T): void => {
  for (let key in object) {
    console.log(`${key}: ${typeof object[key]}`);
  }
};

const isObject = (object: unknown): boolean => {
  return typeof object === 'object' && object !== null && !Array.isArray(object) && object !== undefined;
}

export { logKeyAndType, isObject };
