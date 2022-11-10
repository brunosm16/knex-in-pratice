const printArr = (arr) => arr.forEach((item) => console.log(item));
const asyncFn = async (fn, cb) => {
  try {
    const result = await fn;
    printArr(result);
  } catch (err) {
    console.error(err);
  } finally {
    cb();
  }
};

module.exports = asyncFn;
