const sectiondawyeba = document.querySelector("#dawyeba");
const mcdelobebi = document.querySelector("#mcdelobebi");
const tamashisdawyeba = document.querySelector("#tamashisdawyeba");
const sectiontamashi = document.querySelector("#tamashi");
const ciprisarcheva = document.querySelector("#ciprisarcheva");
const dadastureba = document.querySelector("#dadastureba");
const mcdelobebisraodenoba = document.querySelector("#mcdelobebisraodenoba");
const ricxvi = document.querySelector("#mcdelobebisraodenoba");
const naklebia = document.querySelector("#naklebia");
const metia = document.querySelector("#metia");
const gamosacnobi = document.querySelector("#gamosacnobi");

function tamashisdawyebas() {
  mcdelobebisraodenoba.innerHTML = mcdelobebi.value;
  if (mcdelobebi.value <= 0) {
    mcdelobebisraodenoba.innerHTML = 10;
    mcdelobebi.value = 10;
  }

  number = Math.floor(Math.random() * 1000);
  gamosacnobi.value = number;
  gamosacnobi.innerHTML = number;
  gamosacnobi.style.color = "brown";
  sectiondawyeba.style.display = "none";
  sectiontamashi.style.display = "inline-block";
}

function ciprisgamcnoba() {
  if (ciprisarcheva.value == gamosacnobi.value) {
    displayAlert(`gilocavt`, "sucsuccess");
    axlidandawyeba();
  } else {
    if (mcdelobebi.value == 1) {
      displayAlert(
        `tqven damarcxdit gamosacnobi cipri iyo  : ${gamosacnobi.value}`
      );
      axlidandawyeba();
    }
    if (ciprisarcheva !== gamosacnobi.value && mcdelobebi.value != 0) {
      mcdelobebisraodenoba.innerHTML = mcdelobebi.value -= 1;
    }
  }
  if (ciprisarcheva.value > gamosacnobi.value) {
    metia.innerHTML = ciprisarcheva.value;
    ciprisarcheva.value = "";
  } else {
    if (ciprisarcheva.value < gamosacnobi.value) {
      naklebia.innerHTML = ciprisarcheva.value;
      ciprisarcheva.value = "";
    }
  }
}
function deletiner(values) {
  values.value = "";
}

mcdelobebi.addEventListener("keyup", function () {
  const numbers = Number(this.value.trim());
  if (isNaN(numbers)) {
    displayAlert("chaweret ricxvi", "error", "error");
    deletiner(this);
  }
  if (mcdelobebi.value > 20) {
    displayAlert(`maqsimaluri mcdelobebi  :20`);
    axlidandawyeba();
  }
});
ciprisarcheva.addEventListener("keyup", function () {
  const numbers = Number(this.value.trim());
  if (isNaN(numbers)) {
    displayAlert("error", "error", "error");
    deletiner(this);
  }
  if (this.value > 1000) {
    displayAlert("error", "error", "error");
    deletiner(this);
  }
});

function axlidandawyeba() {
  sectiondawyeba.style.display = "block";
  sectiontamashi.style.display = "none";
  ciprisarcheva.value = "";
  mcdelobebi.value = "";
  metia.innerHTML = "";
  naklebia.innerHTML = "";
}

function displayAlert(title, icon, text = "") {
  Swal.fire({ title, icon, text });
}
dadastureba.addEventListener("click", ciprisgamcnoba);
tamashisdawyeba.addEventListener("click", tamashisdawyebas);

// const yes = document.querySelector("div.randomnumber");
// const chosentake = document.querySelector("#numer");
// const chosen = document.querySelector("#numbers");
// const divdab = document.querySelector("#dabali");
// const divmag = document.querySelector("#magali");
// const button = document.querySelector("#buttona");
// const divmec = document.querySelector("#mcdelobebi");
// const butsel = document.querySelector("#secla");
// const section = document.querySelector(".pirveli");

// butsel.addEventListener("click", () => {
//   number = Math.floor(Math.random() * 1000);
//   section.innerHTML = `<h1 class="absolute">tqven gaqvt ${chosentake.value} mcdeloba</h1>`;
//   // divmec.innerHTML = `<h1>${chosentake.value}</h1>`;

//   if (chosentake.value == 0) {
//     section.innerHTML = `<h1 class="absolute">tqven gaqvt ${10} mcdeloba</h1>`;
//     chosentake.value = 10;
//   }
//   yes.innerHTML = `<h1>${number}</h1>`;
// });

// chosen.addEventListener("keyup", function () {
//   const numbers = Number(this.value.trim());
//   if (isNaN(numbers)) {
//     displayAlert("error", "error", "error");
//     deletiner(this);
//   }
//   if (this.value > 1000) {
//     displayAlert("error", "error", "error");
//     deletiner(this);
//   }
// });
// if (chosentake.value >= 0) {
//   button.addEventListener("click", () => {
//     if (chosen.value < number) {
//       divdab.innerHTML = `<h1>${chosen.value}</h1>`;
//     }
//     if (chosen.value > number) {
//       divmag.innerHTML = `<h1>${chosen.value}</h1>`;
//     }
//     if (chosentake.value > 0 && chosen.value > 0) {
//       section.innerHTML = `<h1 class="absolute">tqven gaqvt ${(chosentake.value -= 1)} mcdeloba</h1>`;
//       // divmec.innerHTML = `<h1>${(chosentake.value -= 1)}</h1>`;
//     }

//     if (chosen.value == number) {
//       section.innerHTML = chosentake.innerHTML;
//       yes.innerHTML = "";
//       divmag.innerHTML = "";
//       divdab.innerHTML = "";
//       // divmec.innerHTML = "";
//       chosentake.value = "";
//       chosen.value = "";
//       displayAlert("win", "win", "win");
//     } else {
//       if (chosentake.value < 1) {
//         section.innerHTML = "";
//         yes.innerHTML = "";
//         divmag.innerHTML = "";
//         divdab.innerHTML = "";
//         // divmec.innerHTML = "";
//         chosentake.value = "";
//         chosen.value = "";
//         displayAlert("error", "error", "error");
//       }
//     }

//     // chosen.value = "";
//   });
// }

// chosentake.addEventListener("keyup", function () {
//   const numbers = Number(this.value.trim());
//   if (isNaN(numbers)) {
//     displayAlert("chaweret  mxolod cipri", "error", "error");
//     deletiner(this);
//   }
//   if (this.value > 20) {
//     displayAlert("maxmimum 20 mcdeloba", "error", "error");
//     deletiner(this);
//   }
// });

// function displayAlert(title, icon, text = "") {
//   Swal.fire({ title, icon, text });
// }
// function deletiner(values) {
//   values.value = "";
// }
