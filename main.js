let span_heading = document.querySelector(".span_heading");

let words = " running shoes";
let index = 1;

function rep() {
  span_heading.textContent = words.slice(0, index);
  index++;
  if (index > words.length) {
    index = 1;
  }
}

setInterval(function () {
  rep();
}, 200);
