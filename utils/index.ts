const logKeyAndType = <T>(object: T): void => {
  for (let key in object) {
    console.log(`${key}: ${typeof object[key]}`);
  }
};

export { logKeyAndType };
