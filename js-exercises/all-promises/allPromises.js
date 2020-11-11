const allPromises = args => {
  if (!Array.isArray(args)) {
    throw new Error(`Error: Expected array, got ${typeof (args)}`);
  }

  if (args.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const resolvedValues = [];
    let completed = 0;

    args.forEach((value) => {
      Promise.resolve(value).then(result => {
        resolvedValues.push(result);
        completed += 1;

        if (completed === args.length) {
          resolve(resolvedValues);
        }
      }).catch(err => reject(err));
    });
  });
};

export { allPromises };
