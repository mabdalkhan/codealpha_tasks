let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let delBtn = document.createElement("span");
  let donBtn = document.createElement("span");
  let div = document.createElement("div");

  delBtn.textContent = "❌";
  donBtn.textContent = "✔️";

  item.classList.add("li-con");

  div.classList.add("btn-con");

  donBtn.classList.add("done");
  donBtn.classList.add("btns");

  delBtn.classList.add("del");
  delBtn.classList.add("btns");

  item.textContent = input.value;

  ul.appendChild(item);

  item.appendChild(div);
  div.appendChild(donBtn);
  div.appendChild(delBtn);

  input.value = "";
});

ul.addEventListener("click", (event) => {
  let el = event.target;
  if (el.className === "del btns") {
    let elPa = el.parentElement;
    let par = elPa.parentElement;
    par.remove();
  }
  if (el.className === "done btns") {
    let elPa = el.parentElement;
    let par = elPa.parentElement;
    par.classList.add("green");
  }
});
