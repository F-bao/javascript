const p = new Promise((resolve, reject) => {
  // resolve(22);
  // reject(11);
});

function promiseTask() {
  return new Promise((resolve, reject) => {
    const isSuccess = false;
    if (isSuccess) {
      resolve("task2 success");
    } else {
      reject("task2 fail");
    }
  });
}

async function main() {
  console.log("task 1 ");
  try {
    const res = await promiseTask();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  console.log("task 3");
}

main();
