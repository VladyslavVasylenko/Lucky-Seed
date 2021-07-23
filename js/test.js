// class Menu {
//   constructor(elem) {
//     this._elem = elem;
//     elem.onclick = this.onclick.bind(this);
//   }

//   save() {
//     alert('save');
//   }

//   load() {
//     alert('load');
//   }

//   search() {
//     alert('search');
//   }

//   onclick(event) {
//     let action = event.target.dataset.action;
//     if (action) {
//       this[action]();
//     }
//   }
// }

// new Menu(menu);

// document.addEventListener('click', function(event) {
//   let id = event.target.dataset.toggleId;
//   if (!id) return;

//   let elem = document.getElementById(id);

//   elem.hidden = !elem.hidden;
// });

// let bcol = document.getElementById("style-save").style.color = "white";

// bcol = document.getElementById("style-save").style.backgroundColor = "green"; 

// let bcol2 = document.getElementById("style-save2").style.color = "white";

// bcol2 = document.getElementById("style-save2").style.backgroundColor = "blue"; 

// let bcol3 = document.getElementById("style-save3").style.color = "white";

// bcol3 = document.getElementById("style-save3").style.backgroundColor = "black"; 

// let bcol4 = document.getElementById("subscribe-mail").style.color = "white";

// bcol3 = document.getElementById("subscribe-mail").style.backgroundColor = "red"; 

const mainInfor = [
  { img: 'url="./google.img"' },
  { text: 'some' },
  { title: "some wone" },
];

mainInfor.forEach(element => console.log(element));

// console.log(mainInfor[0].img);
// console.log(mainInfor[0]);
// console.log(mainInfor);

// Example work obj first
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// Example work obj second
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// console.log(menu);
