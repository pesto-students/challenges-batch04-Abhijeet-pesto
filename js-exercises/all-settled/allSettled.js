function allSettled(args) {
  if (!Array.isArray(args)) {
    throw new Error(`Error: Expected array, got ${typeof (args)}`);
  }

  if (args.length === 0) {
    return Promise.resolve([]);
  }

  const STATUS = {
    fullfilled: 'fulfilled',
    rejected: 'rejected',
  };

  return new Promise((resolve) => {
    const result = [];
    let completedPromises = 0;

    args.forEach(async (item, index) => {
      await Promise.resolve(item).then(
        (value) => {
          result[index] = {
            status: STATUS.fullfilled,
            value,
          };
        },
        error => {
          result[index] = {
            status: STATUS.rejected,
            reason: `${error.name}: ${error.message}`,
          };
        },
      );
      completedPromises += 1;
      if (completedPromises === args.length) {
        resolve(result);
      }
    });
  });
}

export { allSettled };
