function stepOne(callback) {
  setTimeout(() => callback(null, "Step One Completed"), 1000);
}

function stepTwo(callback) {
  setTimeout(() => callback(null, "Step Two Completed"), 1000);
}

function stepThree(callback) {
  setTimeout(() => callback(null, "Step Three Completed"), 1000);
}

stepOne((err, result) => {
  if (err) return console.error(err);
  console.log(result);

  stepTwo((err, result) => {
    if (err) return console.error(err);
    console.log(result);

    stepThree((err, result) => {
      if (err) return console.error(err);
      console.log(result);
    });
  });
});
