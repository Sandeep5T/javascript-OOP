function Stopwatch() {
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  let startTime,
    endTime,
    duration,
    running = 0;

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  console.log(this);
  if (this.running) throw new Error("Stopwatch is already running");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not running");
  this.running = false;
  this.endTime = new Date();
  const seconds = (this.endTime - this.startTime) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.duration = 0;
  this.running = 0;
  this.startTime = 0;
  this.endTime = 0;
};

const sw = new Stopwatch();

console.log(firstName);

var firstName = "Sandeep";
// console.log(global.name); //undefined in node but will show sandeep in browser if modules are not used to write code
