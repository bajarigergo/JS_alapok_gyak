window.addEventListener("load", function () {
  elemekElerese1_JQ();
  elemekElerese2_JQ();
  elemekElerese3_JQ();
  elemekElerese4_JQ();
  elemekFormázása_JQ();
  esemenyKezeles_JQ();
  esemenyKezeles2_JQ();
  esemenyKezeles4_JQ();
});

function elemekElerese1() {
  /**Ide jön az első feladat */
  const feladat1_ELEM = document.querySelector("#f1");
  console.log(feladat1_ELEM);
}
function elemekElerese1_JQ() {
  /**Ide jön az első feladat */
  const feladat1_ELEM = $("#f1");
  console.log(feladat1_ELEM.text());
}


function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  feladat2_ELEM = document.querySelectorAll("#ide")[0];
  feladat2_ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese2_JQ() {
  /**Ide jön az 2.  feladat */
  feladat2_ELEM = $("#ide").eq(0);
  feladat2_ELEM.html("<p>Jó reggelt!</p>") ;
}

function elemekElerese3() {
  /**Ide jön az 3. feladat */
  feladat3_ELEM = document.querySelectorAll(".ide")[0];
  feladat3_ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3_JQ() {
  /**Ide jön az 3. feladat */
  feladat3_ELEM = $(".ide").eq(0);
  feladat3_ELEM.html("<p>Jó reggelt!</p>")
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

function elemekElerese4_JQ() {
  /**Ide jön az 4. feladat */
  const TOMB = [];
  const feladat4_ELEM = $(".lista");
  for (let index = 0; index < 5; index++) {
    let szam = Math.floor(Math.random() * (31 - 10) + 10);
    TOMB[index] = szam;
  }
  console.log(TOMB);
  feladat4_ELEM.html("<ul>")
  for (let index = 0; index < 5; index++) {
    feladat4_ELEM.append(`<li>${TOMB[index]}</li>`)
  }
  feladat4_ELEM.append("</ul>")
}




function elemekFormázása() {
  const feladat4_ELEM = document.querySelector(".lista");
  feladat4_ELEM.classList.add("formazott");
}

function elemekFormázása_JQ() {
  const feladat4_ELEM = $(".lista");
  feladat4_ELEM.addClass("formazott");
}

function esemenyKezeles() {
  const feladat4_ELEM = document.querySelector(".lista");
  const kattintasutan_ELEM = document.querySelector(".kattintasutan");
  feladat4_ELEM.addEventListener("click", function () {
    kattintasutan_ELEM.innerHTML = feladat4_ELEM.innerHTML;
  });
}
function esemenyKezeles_JQ() {
  const feladat4_ELEM = $(".lista");
  const kattintasutan_ELEM = $(".kattintasutan");
  feladat4_ELEM.on("click", function () {
    kattintasutan_ELEM.html(feladat4_ELEM.html())
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
function esemenyKezeles2_JQ() {
  const feladat6_ELEM = $(".feladat").eq(0);
  feladat6_ELEM.html("<button>Nyomd meg</button>")
  const gomb_ELEM = $(".feladat button");
  gomb_ELEM.on("click", function () {
    feladat6_ELEM.append( `<div><h1>KACHOW</h1><img id="kep" src="./kep.jpg" alt="bajnok"></div>`)
    const KEP = $(".feladat #kep");
    console.log(KEP);
    KEP.on("mouseenter", function () {
      KEP.addClass("kisebb");
    });
  });
}
function esemenyKezeles4() {
  const elemek_ELEM = document.querySelectorAll(".elem");
  const eredmeny_ELEM = document.querySelector(".megjelenito");
  for (let index = 0; index < elemek_ELEM.length; index++) {
    elemek_ELEM[index].addEventListener("click", function () {
      eredmeny_ELEM.innerHTML = elemek_ELEM[index].innerHTML;
    });
  }
}
function esemenyKezeles4_JQ() {
  const elemek_ELEM = $(".elem");
  const eredmeny_ELEM = $(".megjelenito");

    elemek_ELEM.on("click", function (event) {
      eredmeny_ELEM.html($(event.target).html())
    });
  
}