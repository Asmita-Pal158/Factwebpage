console.log("Hello World");
const btn = document.querySelector(".btn-g");

const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");

    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent("Share a fact");
  }
});

let votesInteresting = 23;
let votesMindlowing = 5;

const text = "Lisbon is the capitalofPortugal";
