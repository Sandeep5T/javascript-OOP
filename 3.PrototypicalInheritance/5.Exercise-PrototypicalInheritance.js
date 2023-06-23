function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HTMLElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HTMLElement.prototype.focus = function () {
  console.log("focused");
};

HTMLElement.prototype.render = function () {
  return `<div>Hello</div>`;
};

function HTMLSelectElement(...items) {
  this.items = items;
  this.addItem = function (value) {
    this.items.push(value);
  };
  this.removeItem = function (value) {
    const index = this.items.indexOf(value);
    this.items.splice(index, 1);
  };
}

extend(HTMLSelectElement, HTMLElement);

HTMLSelectElement.prototype.render = function () {
  return `<select>${this.items.map((item) => `<item>${item}</item>`)}`;
};

function HTMLImgElement(src) {
  this.src = src;
}

extend(HTMLImgElement, HTMLElement);

HTMLImgElement.prototype.render = function () {
  return `<img src=${this.src}/>`;
};

const htmlElement = new HTMLElement();
console.log(htmlElement);

const select = new HTMLSelectElement(1, 2, 3);
select.addItem("4");
select.removeItem("3");
select.focus();
console.log(select);

console.log(select);

const elements = [
  new HTMLElement(),
  new HTMLSelectElement(1, 2, 3, 4),
  new HTMLImgElement("http://"),
];

for (let element of elements) console.log(element.render());
