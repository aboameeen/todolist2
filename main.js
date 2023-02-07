let add = document.querySelector(".add");
let text = document.querySelector(".input");
let tasks = document.querySelector(".tasks");
let a = 0;

add.addEventListener("click", function () {
  if (text.value !== "") {
    // console.log("");

    window.localStorage.setItem(text.value, text.value);
    let divat = document.createElement("div");
    //   divat.className = `ameeen${a}`;
    // >>>>>>span1

    let span1 = document.createElement("span");
    let span1txt = document.createTextNode(`${text.value}`);
    span1.appendChild(span1txt);
    divat.appendChild(span1);
    //   >>>>span2
    let span2 = document.createElement("span");
    let span2txt = document.createTextNode("Delete");

    let spanimg = document.createElement("img");
    spanimg.setAttribute("src", "22.png");
    span2.appendChild(spanimg);

    span2.appendChild(span2txt);

    divat.appendChild(span1);
    divat.appendChild(span2);
    span2.addEventListener("click", abc);
    tasks.appendChild(divat);
    text.value = "";
    text.focus();
  }
});

if (window.localStorage.length > 0) {
  //   console.log("aaa");
  for (let i = 0; i < localStorage.length; i++) {
    let divat = document.createElement("div");
    //   divat.className = `ameeen${a}`;
    // >>>>>>span1
    window.localStorage.getItem(text.value, text.value);
    let span1 = document.createElement("span");
    let span1txt = document.createTextNode(`${window.localStorage.key(i)}`);
    span1.appendChild(span1txt);
    divat.appendChild(span1);
    //   >>>>span2
    let span2 = document.createElement("span");
    let span2txt = document.createTextNode("Delete");
    let spanimg = document.createElement("img");
    spanimg.setAttribute("src", "22.png");
    span2.appendChild(spanimg);
    span2.appendChild(span2txt);
    divat.appendChild(span1);
    divat.appendChild(span2);
    span2.addEventListener("click", abc);
    tasks.appendChild(divat);
  }
}
// window.localStorage.clear();
function abc() {
  //   console.log(this.parentElement.firstChild.textContent);
  this.parentElement.remove();
  window.localStorage.removeItem(
    `${this.parentElement.firstChild.textContent}`
  );
  //   e.parentElement.span1.innerHtml;
}
