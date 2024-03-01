window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormázása();
  esemenyKezeles();
  esemenyKezeles2();
  esemenyKezeles4();
});

function elemekElerese1() {
  /**Ide jön az első feladat */
  const feladat1_ELEM = document.querySelector("#f1");
  console.log(feladat1_ELEM);
}
function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  feladat2_ELEM = document.querySelectorAll("#ide")[0];
  feladat2_ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  /**Ide jön az 3. feladat */
  feladat3_ELEM = document.querySelectorAll(".ide")[0];
  feladat3_ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
  /**Ide jön az 4. feladat */
  const TOMB = [];
  const feladat4_ELEM = document.querySelector(".lista");
  for (let index = 0; index < 5; index++) {
    let szam = Math.floor(Math.random() * (31 - 10) + 10);
    TOMB[index] = szam;
  }
  console.log(TOMB);
  feladat4_ELEM.innerHTML = "<ul>";
  for (let index = 0; index < 5; index++) {
    feladat4_ELEM.innerHTML += `<li>${TOMB[index]}</li>`;
  }
  feladat4_ELEM.innerHTML += "</ul>";
}
function elemekFormázása() {
  const feladat4_ELEM = document.querySelector(".lista");
  feladat4_ELEM.classList.add("formazott");
}
function esemenyKezeles() {
  const feladat4_ELEM = document.querySelector(".lista");
  const kattintasutan_ELEM = document.querySelector(".kattintasutan");
  feladat4_ELEM.addEventListener("click", function () {
    kattintasutan_ELEM.innerHTML = feladat4_ELEM.innerHTML;
  });
}
function esemenyKezeles2() {
  const feladat6_ELEM = document.querySelectorAll(".feladat")[0];
  feladat6_ELEM.innerHTML = "<button>Nyomd meg</button>";
  const gomb_ELEM = document.querySelector(".feladat button");
  gomb_ELEM.addEventListener("click", function () {
    feladat6_ELEM.innerHTML += `<div><h1>KACHOW</h1><img id="kep" src="./kep.jpg" alt="bajnok"></div>`;
    const KEP = document.querySelector(".feladat #kep");
    console.log(KEP);
    KEP.addEventListener("mouseover", function () {
      KEP.classList.add("kisebb");
    });
  });
}
function esemenyKezeles4() {
  const tarolo_ELEM = document.querySelectorAll(".tarolo");
  const elemek_ELEM = document.querySelectorAll(".elem");
  const eredmeny_ELEM = document.querySelector(".megjelenito");
  for (let index = 0; index < elemek_ELEM.length; index++) {
    elemek_ELEM[index].addEventListener("click", function () {
      eredmeny_ELEM.innerHTML = elemek_ELEM[index].innerHTML;
    });
  }
}
