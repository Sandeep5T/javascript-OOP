function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });

  this.start = function () {
    if (running) throw new Error("Stopwatch is already running");
    running = true;
    startTime = new Date();
    return startTime;
  };
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not running");
    running = false;
    endTime = new Date();
    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
  };
}

const sw = new Stopwatch();
