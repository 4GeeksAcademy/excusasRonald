/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["el Cachorro", "mi sobrino", "la iguana", "Noe"];
  let action = ["se comio", "quemo", "implosiono", "quebro"];
  let what = ["mi tarea", "las llaves", "el coche"];
  let when = [
    "despues de rankear",
    "que casualdiad",
    "cuando yo termine de estudiar",
    "cuando yo estoy comiendo",
    "mientras estaba rezando por pasar 4geeks"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "  " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
