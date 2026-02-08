const quiz = [
  {
    q: "When is our love anniversary?",
    options: ["April 30", "Sep 15", "June 21"],
    answer: 2
  },
  {
    q: "Do you remember the exact place where we met for the first time?",
    options: ["Marina Beach", "Forum Mall", "Phoenix Mall"],
    answer: 1
  },
  {
    q: "Which movie we went together after marriage?",
    options: ["Karnan", "Sultan", "Doctor"],
    answer: 1
  },
  {
    q: "What gift I gave you first time?",
    options: ["Bracelet", "Purse", "Shirt"],
    answer: 2
  },
  {
    q: "Who is the most important person in my life?",
    options: ["You", "Me", "Jashu"],
    answer: 0
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const popup = document.getElementById("popup");
const imageEl = document.getElementById("qImage");

function loadQuestion() {
  popup.innerHTML = "";
  imageEl.style.display = "none"; // hide image for all normal questions

  questionEl.innerHTML = quiz[current].q;
  optionsEl.innerHTML = "";

  quiz[current].options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === quiz[current].answer) {
    score++;
    popup.innerHTML = "❤️";
  } else {
    popup.innerHTML = "👊😵‍💫";
  }

  setTimeout(() => {
    current++;
    if (current < quiz.length) {
      loadQuestion();
    } else {
      finalQuestion();
    }
  }, 1000);
}

function finalQuestion() {
  questionEl.innerHTML = "Will you be my Valentine? 💍❤️";

  // SHOW IMAGE ONLY HERE
  imageEl.src = "love.jpg";
  imageEl.style.display = "block";

  optionsEl.innerHTML = "";

  const yesBtn = document.createElement("button");
  yesBtn.innerText = "YES 💖";
  yesBtn.className = "correct";
  yesBtn.onclick = showResult;

  const noBtn = document.createElement("button");
  noBtn.innerText = "NO 😏";
  noBtn.className = "wrong";
  noBtn.onmouseover = () => {
    alert("Invalid 😈 Valiaye kuthuven 😜 Adichiruven 😏");
  };

  optionsEl.appendChild(yesBtn);
  optionsEl.appendChild(noBtn);
}

function showResult() {
  imageEl.style.display = "none";
  questionEl.innerHTML = `
    💕 My Love 💕<br><br>
    You scored ${score} / ${quiz.length} 💯<br><br>
    From the first moment till now,  
    you are my happiest place,  
    my safe home,  
    my forever Valentine ❤️<br><br>
    I love you endlessly 😘💖
  `;
  optionsEl.innerHTML = "";
  popup.innerHTML = "💘💘💘";
}

loadQuestion();
