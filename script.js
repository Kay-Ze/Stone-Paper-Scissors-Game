let reset = document.querySelector("#reset");
let True_ans = document.querySelector(".True_ans");

let rock_ch = document.querySelector("#btn_1");
let paper_ch = document.querySelector("#btn_2");
let scisors_ch = document.querySelector("#btn_3");

let p_rock = document.querySelector("#p_rock");
let p_paper = document.querySelector("#p_paper");
let p_scisors = document.querySelector("#p_scisor");

let com_rock = document.querySelector("#com_rock");
let com_paper = document.querySelector("#com_paper");
let com_scisors = document.querySelector("#com_scisor");

let p_score = document.querySelector("#you");
let com_score = document.querySelector("#com");
let count_p = 0;
let count_c = 0;

const choices = ["rock", "paper", "scisors"];

const win = [
  ["rock", "scisors"],
  ["paper", "rock"],
  ["scisors", "paper"],
];

const loose = [
  ["scisors", "rock"],
  ["rock", "paper"],
  ["paper", "scisors"],
];

const clear = () => {
  // Hide all images before each round
  document.querySelectorAll(".images").forEach((el) => console.log(el + " 1 "));
  document
    .querySelectorAll(".images")
    .forEach((el) => el.classList.add("hide"));
};

const genComChoice = () => {
  let ch = Math.floor(Math.random() * 3);
  // console.log(choices[ch] + " 2 ");
  return choices[ch];
};

const checkWin = (player, computer) => {
  if (win.some((pair) => pair[0] === player && pair[1] === computer)) {
    count_p++;
    p_score.innerText = count_p;
    True_ans.innerText = "You Win!";
  } else if (loose.some((pair) => pair[0] === player && pair[1] === computer)) {
    count_c++;
    com_score.innerText = count_c;
    True_ans.innerText = "You Loose!";
  } else {
    True_ans.innerText = "Draw!";
  } // else: draw, do nothing or keep scores same
};

const show_com_choice = (computer) => {
  switch (computer) {
    case "rock":
      // console.log("rock" + " 3 ");
      com_rock.classList.remove("hide");
      break;
    case "paper":
      // console.log("paper" + " 4 ");
      com_paper.classList.remove("hide");
      break;
    case "scisors":
      // console.log("scisors" + " 5 ");
      com_scisors.classList.remove("hide");
      break;
  }
};

// Event listeners
rock_ch.addEventListener("click", () => {
  clear();
  p_rock.classList.remove("hide");
  let player = "rock";
  let computer = genComChoice();
  show_com_choice(computer);
  checkWin(player, computer);
});

paper_ch.addEventListener("click", () => {
  clear();
  p_paper.classList.remove("hide");
  let player = "paper";
  let computer = genComChoice();
  show_com_choice(computer);
  checkWin(player, computer);
});

scisors_ch.addEventListener("click", () => {
  clear();
  p_scisors.classList.remove("hide");
  let player = "scisors";
  let computer = genComChoice();
  show_com_choice(computer);
  checkWin(player, computer);
});

reset.addEventListener("click", () => {
  // location.reload();
  count_p = 0;
  count_c = 0;
  p_score.innerText = count_p;
  com_score.innerText = count_c;
  clear();
  True_ans.innerText = " --Result--";
});
