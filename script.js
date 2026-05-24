const audiences = [
  {
    key: "student",
    label: "Student",
    subtitle: "Subject-based quizzes for academic practice and exam preparation",
  },
  {
    key: "kid",
    label: "Kid",
    subtitle: "Simple, playful quizzes for school children and early learners",
  },
];

const subjects = [
  {
    key: "student-mixed",
    audience: "student",
    label: "Mixed Challenge",
    subtitle: "A blended round across all topics",
    mode: "mixed",
  },
  {
    key: "java",
    audience: "student",
    label: "Java",
    subtitle: "OOP, collections, and JVM basics",
  },
  {
    key: "c",
    audience: "student",
    label: "C",
    subtitle: "Pointers, headers, and language rules",
  },
  {
    key: "cpp",
    audience: "student",
    label: "C++",
    subtitle: "Inheritance, STL, and object behavior",
  },
  {
    key: "html",
    audience: "student",
    label: "HTML",
    subtitle: "Semantic markup and structure",
  },
  {
    key: "css",
    audience: "student",
    label: "CSS",
    subtitle: "Selectors, layout, and styling",
  },
  {
    key: "javascript",
    audience: "student",
    label: "JavaScript",
    subtitle: "Core syntax and browser behavior",
  },
  {
    key: "aptitude",
    audience: "student",
    label: "Aptitude",
    subtitle: "Speed math and reasoning practice",
  },
  {
    key: "kid-mixed",
    audience: "kid",
    label: "Fun Mix",
    subtitle: "A colorful round across all kid-friendly topics",
    mode: "mixed",
  },
  {
    key: "kid-math",
    audience: "kid",
    label: "Math Fun",
    subtitle: "Numbers, counting, and easy problem solving",
  },
  {
    key: "kid-science",
    audience: "kid",
    label: "Science Basics",
    subtitle: "Simple nature and world questions",
  },
  {
    key: "kid-english",
    audience: "kid",
    label: "English",
    subtitle: "Words, letters, and easy language practice",
  },
  {
    key: "kid-gk",
    audience: "kid",
    label: "General Knowledge",
    subtitle: "Everyday facts for curious young learners",
  },
];

const questionBank = [
  {
    id: 1,
    subject: "java",
    prompt: "Which Java feature allows the same method name with different parameter lists?",
    options: ["Method overriding", "Method overloading", "Encapsulation", "Abstraction"],
    correctIndex: 1,
    explanation: "Method overloading uses the same method name with a different parameter list.",
  },
  {
    id: 2,
    subject: "java",
    prompt: "Which collection does not allow duplicate elements?",
    options: ["List", "Queue", "Set", "ArrayList"],
    correctIndex: 2,
    explanation: "A Set stores unique values and rejects duplicates.",
  },
  {
    id: 3,
    subject: "java",
    prompt: "What does JVM stand for?",
    options: ["Java Variable Machine", "Java Verified Module", "Java Virtual Machine", "Joint Virtual Model"],
    correctIndex: 2,
    explanation: "JVM stands for Java Virtual Machine, the runtime that executes Java bytecode.",
  },
  {
    id: 4,
    subject: "c",
    prompt: "Which symbol is used to dereference a pointer in C?",
    options: ["&", "*", "%", "#"],
    correctIndex: 1,
    explanation: "The * operator accesses the value stored at the address held by a pointer.",
  },
  {
    id: 5,
    subject: "c",
    prompt: "Which header file is used for printf and scanf?",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    correctIndex: 1,
    explanation: "stdio.h contains the standard input and output functions.",
  },
  {
    id: 6,
    subject: "c",
    prompt: "What is the standard return type of main in C?",
    options: ["void", "int", "char", "float"],
    correctIndex: 1,
    explanation: "In standard C, main returns int so the program can report its exit status.",
  },
  {
    id: 7,
    subject: "cpp",
    prompt: "Which C++ concept allows one class to derive from another?",
    options: ["Templates", "Inheritance", "Overloading", "Encapsulation"],
    correctIndex: 1,
    explanation: "Inheritance is the mechanism that lets a class reuse and extend another class.",
  },
  {
    id: 8,
    subject: "cpp",
    prompt: "What does STL stand for in C++?",
    options: ["Static Type Library", "System Template Logic", "Standard Template Library", "Structured Tool Library"],
    correctIndex: 2,
    explanation: "STL means Standard Template Library and includes containers, iterators, and algorithms.",
  },
  {
    id: 9,
    subject: "cpp",
    prompt: "Which keyword dynamically creates an object in C++?",
    options: ["make", "new", "create", "dynamic"],
    correctIndex: 1,
    explanation: "The new keyword allocates memory and constructs an object dynamically.",
  },
  {
    id: 10,
    subject: "html",
    prompt: "Which HTML tag is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctIndex: 2,
    explanation: "The h1 element is the top-level heading and is displayed largest by default.",
  },
  {
    id: 11,
    subject: "html",
    prompt: "Which element is semantically correct for site navigation links?",
    options: ["<div>", "<nav>", "<section>", "<aside>"],
    correctIndex: 1,
    explanation: "The nav element is intended for major navigation blocks.",
  },
  {
    id: 12,
    subject: "html",
    prompt: "Which attribute gives alternative text for an image?",
    options: ["src", "title", "alt", "caption"],
    correctIndex: 2,
    explanation: "The alt attribute provides a text alternative for screen readers and missing images.",
  },
  {
    id: 13,
    subject: "css",
    prompt: "Which CSS property changes text color?",
    options: ["foreground", "font-color", "text-style", "color"],
    correctIndex: 3,
    explanation: "The color property controls the foreground text color.",
  },
  {
    id: 14,
    subject: "css",
    prompt: "Which layout model is best for one-dimensional arrangement?",
    options: ["Grid", "Position", "Float", "Flexbox"],
    correctIndex: 3,
    explanation: "Flexbox is designed for aligning items in one dimension, either row or column.",
  },
  {
    id: 15,
    subject: "css",
    prompt: "Which selector targets an element with id='hero'?",
    options: [".hero", "hero.", "#hero", "*hero"],
    correctIndex: 2,
    explanation: "The # symbol targets an element by id.",
  },
  {
    id: 16,
    subject: "javascript",
    prompt: "Which declarations are block-scoped in JavaScript?",
    options: ["Only var", "Only let", "let and const", "var and let"],
    correctIndex: 2,
    explanation: "Both let and const are block-scoped. var is function-scoped.",
  },
  {
    id: 17,
    subject: "javascript",
    prompt: "Which array method returns a new array by transforming every element?",
    options: ["forEach()", "reduce()", "map()", "find()"],
    correctIndex: 2,
    explanation: "map() creates and returns a new transformed array.",
  },
  {
    id: 18,
    subject: "javascript",
    prompt: "What does typeof null return in JavaScript?",
    options: ["null", "object", "undefined", "boolean"],
    correctIndex: 1,
    explanation: "typeof null returns object because of a historical JavaScript quirk.",
  },
  {
    id: 19,
    subject: "aptitude",
    prompt: "If a train covers 240 km in 4 hours, what is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctIndex: 2,
    explanation: "Average speed equals distance divided by time, so 240 divided by 4 is 60 km/h.",
  },
  {
    id: 20,
    subject: "aptitude",
    prompt: "What is 25% of 320?",
    options: ["40", "60", "80", "100"],
    correctIndex: 2,
    explanation: "Twenty-five percent is one fourth, and one fourth of 320 is 80.",
  },
  {
    id: 21,
    subject: "aptitude",
    prompt: "A number increases from 50 to 65. What is the percentage increase?",
    options: ["15%", "25%", "30%", "35%"],
    correctIndex: 2,
    explanation: "The increase is 15, and 15 divided by 50 equals 30%.",
  },
  {
    id: 22,
    subject: "kid-math",
    prompt: "What is 2 + 3?",
    options: ["4", "5", "6", "7"],
    correctIndex: 1,
    explanation: "When you add 2 and 3 together, the answer is 5.",
  },
  {
    id: 23,
    subject: "kid-math",
    prompt: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "A triangle is a shape with 3 sides.",
  },
  {
    id: 24,
    subject: "kid-math",
    prompt: "What is half of 10?",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
    explanation: "Half means dividing into two equal parts, and half of 10 is 5.",
  },
  {
    id: 25,
    subject: "kid-science",
    prompt: "Which part of a plant is usually under the soil?",
    options: ["Flower", "Leaf", "Root", "Fruit"],
    correctIndex: 2,
    explanation: "Roots grow under the soil and help the plant take in water.",
  },
  {
    id: 26,
    subject: "kid-science",
    prompt: "Which planet do we live on?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correctIndex: 1,
    explanation: "We live on Earth.",
  },
  {
    id: 27,
    subject: "kid-science",
    prompt: "Which body part helps us hear?",
    options: ["Eyes", "Nose", "Hands", "Ears"],
    correctIndex: 3,
    explanation: "We use our ears to hear sounds.",
  },
  {
    id: 28,
    subject: "kid-english",
    prompt: "What is the opposite of 'big'?",
    options: ["Tall", "Small", "Fast", "Round"],
    correctIndex: 1,
    explanation: "The opposite of big is small.",
  },
  {
    id: 29,
    subject: "kid-english",
    prompt: "Which word is the correct plural form?",
    options: ["Books", "Bookes", "Bookis", "Bookz"],
    correctIndex: 0,
    explanation: "Books is the correct plural form of book.",
  },
  {
    id: 30,
    subject: "kid-english",
    prompt: "Which letter comes after M?",
    options: ["L", "N", "O", "P"],
    correctIndex: 1,
    explanation: "The letter N comes after M in the alphabet.",
  },
  {
    id: 31,
    subject: "kid-gk",
    prompt: "How many days are there in one week?",
    options: ["5", "6", "7", "8"],
    correctIndex: 2,
    explanation: "A week has 7 days.",
  },
  {
    id: 32,
    subject: "kid-gk",
    prompt: "Which animal is known as the king of the jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    correctIndex: 2,
    explanation: "The lion is commonly called the king of the jungle.",
  },
  {
    id: 33,
    subject: "kid-gk",
    prompt: "What gives us light during the day?",
    options: ["Moon", "Sun", "Starfish", "Cloud"],
    correctIndex: 1,
    explanation: "The Sun gives us light during the day.",
  },
];

const app = document.getElementById("app");
const overlay = document.getElementById("overlay");

function createBoostState() {
  return {
    explanation: false,
    skip: false,
    pause: false,
    score: false,
    previous: false,
  };
}

const state = {
  screen: "login",
  user: null,
  audience: null,
  subject: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  usedBoosts: createBoostState(),
  explanationQuestionIds: new Set(),
  scorePeekShown: false,
};

function shuffle(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function getSubjectMeta(key) {
  return subjects.find((subject) => subject.key === key) || subjects[0];
}

function buildQuestions(subjectKey) {
  const subjectMeta = getSubjectMeta(subjectKey);

  if (subjectMeta.mode === "mixed") {
    const audienceQuestions = questionBank.filter(
      (question) => getSubjectMeta(question.subject).audience === subjectMeta.audience,
    );
    const count = subjectMeta.audience === "kid" ? 8 : 10;
    return shuffle(audienceQuestions).slice(0, count);
  }

  return shuffle(questionBank.filter((question) => question.subject === subjectKey));
}

function resetQuizState() {
  state.subject = null;
  state.questions = [];
  state.currentIndex = 0;
  state.answers = {};
  state.usedBoosts = createBoostState();
  state.explanationQuestionIds = new Set();
  state.scorePeekShown = false;
}

function resetState() {
  state.screen = "login";
  state.user = null;
  state.audience = null;
  resetQuizState();
}

function goHome() {
  resetQuizState();
  state.screen = state.user ? "home" : "login";
}

function selectAudience(audienceKey) {
  state.audience = audienceKey;
  render();
}

function handleLogin(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const audience = form.elements.audience.value;
  const errorBox = document.getElementById("login-error");

  if (!name || !email || !password || !audience) {
    errorBox.textContent = "Please fill in all fields and choose a learner type.";
    errorBox.classList.remove("hidden");
    return;
  }

  if (!email.includes("@")) {
    errorBox.textContent = "Please enter a valid email address.";
    errorBox.classList.remove("hidden");
    return;
  }

  if (password.length < 4) {
    errorBox.textContent = "Password must be at least 4 characters long.";
    errorBox.classList.remove("hidden");
    return;
  }

  state.user = { name, email };
  state.audience = audience;
  resetQuizState();
  state.screen = "home";
  render();
}

function startQuiz(subjectKey) {
  const subjectMeta = getSubjectMeta(subjectKey);
  state.subject = subjectKey;
  state.audience = subjectMeta.audience;
  state.questions = buildQuestions(subjectKey);
  state.currentIndex = 0;
  state.answers = {};
  state.usedBoosts = createBoostState();
  state.explanationQuestionIds = new Set();
  state.scorePeekShown = false;

  state.questions.forEach((question) => {
    state.answers[question.id] = {
      selectedIndex: null,
      submitted: false,
      skipped: false,
    };
  });

  state.screen = "quiz";
  render();
}

function getCurrentQuestion() {
  return state.questions[state.currentIndex];
}

function getCurrentAnswer() {
  const question = getCurrentQuestion();
  return question ? state.answers[question.id] : null;
}

function getCorrectCount() {
  return state.questions.filter((question) => {
    const answer = state.answers[question.id];
    return answer && answer.submitted && !answer.skipped && answer.selectedIndex === question.correctIndex;
  }).length;
}

function getAnsweredCount() {
  return Object.values(state.answers).filter((answer) => answer.submitted).length;
}

function getAttemptedCount() {
  return Object.values(state.answers).filter((answer) => answer.submitted && !answer.skipped).length;
}

function getSkippedCount() {
  return Object.values(state.answers).filter((answer) => answer.skipped).length;
}

function selectOption(index) {
  const answer = getCurrentAnswer();
  if (!answer || answer.submitted) {
    return;
  }
  answer.selectedIndex = index;
  render();
}

function submitCurrentAnswer() {
  const answer = getCurrentAnswer();
  if (!answer || answer.selectedIndex === null || answer.submitted) {
    return;
  }
  answer.submitted = true;
  render();
}

function nextQuestion() {
  if (state.currentIndex >= state.questions.length - 1) {
    state.screen = "result";
  } else {
    state.currentIndex += 1;
  }
  render();
}

function showOverlay(title, message, actions) {
  overlay.innerHTML = "";
  overlay.classList.remove("hidden");

  const card = document.createElement("div");
  card.className = "overlay-card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const text = document.createElement("p");
  text.textContent = message;

  const actionRow = document.createElement("div");
  actionRow.className = "overlay-actions";

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = action.variant === "ghost" ? "ghost-btn" : "primary-btn";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      hideOverlay();
      action.onClick();
    });
    actionRow.appendChild(button);
  });

  card.append(heading, text, actionRow);
  overlay.appendChild(card);
}

function hideOverlay() {
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

function useBoost(boostKey) {
  const question = getCurrentQuestion();
  const answer = getCurrentAnswer();

  if (!question || !answer || state.usedBoosts[boostKey]) {
    return;
  }

  if (boostKey === "explanation") {
    state.usedBoosts.explanation = true;
    state.explanationQuestionIds.add(question.id);
    render();
    return;
  }

  if (boostKey === "skip") {
    if (answer.submitted) {
      return;
    }
    state.usedBoosts.skip = true;
    answer.submitted = true;
    answer.skipped = true;
    answer.selectedIndex = null;
    nextQuestion();
    return;
  }

  if (boostKey === "pause") {
    state.usedBoosts.pause = true;
    showOverlay(
      "Paused",
      "Take a short reset, then come back with a clear head. Your progress is still here.",
      [
        {
          label: "Resume quiz",
          onClick: () => render(),
        },
      ],
    );
    return;
  }

  if (boostKey === "score") {
    state.usedBoosts.score = true;
    showOverlay(
      "Score peek",
      `You currently have ${getCorrectCount()} correct out of ${getAnsweredCount()} submitted questions.`,
      [
        {
          label: "Continue",
          onClick: () => render(),
        },
      ],
    );
    return;
  }

  if (boostKey === "previous") {
    if (state.currentIndex === 0) {
      return;
    }
    state.usedBoosts.previous = true;
    state.currentIndex -= 1;
    render();
  }
}

function renderLogin() {
  const template = document.getElementById("login-template");
  app.innerHTML = "";
  app.appendChild(template.content.cloneNode(true));

  const form = document.getElementById("login-form");
  const audienceInput = document.getElementById("login-audience");
  form.addEventListener("submit", handleLogin);

  if (state.audience) {
    audienceInput.value = state.audience;
  }
}

function renderHome() {
  const template = document.getElementById("home-template");
  app.innerHTML = "";
  app.appendChild(template.content.cloneNode(true));

  const selectedAudience = audiences.find((audience) => audience.key === state.audience);
  const welcomeTitle = document.getElementById("welcome-title");
  const welcomeText = document.getElementById("welcome-text");
  const logoutButton = document.getElementById("logout-btn");

  welcomeTitle.textContent = state.user ? `Hello, ${state.user.name}` : "Hello";
  welcomeText.textContent = selectedAudience
    ? `You are signed in for the ${selectedAudience.label.toLowerCase()} track. Choose a quiz below to begin.`
    : "Choose your learner type and start an assessment.";
  logoutButton.addEventListener("click", () => {
    resetState();
    render();
  });

  const audienceGrid = document.getElementById("audience-grid");
  audiences.forEach((audience) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "subject-card audience-card";
    if (state.audience === audience.key) {
      card.classList.add("is-active");
    }
    card.innerHTML = `
      <span class="subject-badge">${audience.label.slice(0, 1)}</span>
      <h3>${audience.label}</h3>
      <p>${audience.subtitle}</p>
      <span class="subject-cta">Open ${audience.label} quizzes</span>
    `;
    card.addEventListener("click", () => selectAudience(audience.key));
    audienceGrid.appendChild(card);
  });

  const grid = document.getElementById("subject-grid");
  const subjectTitle = document.getElementById("subject-title-home");
  const subjectNote = document.getElementById("subject-note-home");
  const selectionNote = document.getElementById("subject-selection-note");

  if (selectedAudience) {
    subjectTitle.textContent = `${selectedAudience.label} quizzes`;
    subjectNote.textContent = `Separate ${selectedAudience.label.toLowerCase()} assessments are shown below. Each quiz includes one-time actions for Explanation, Skip, Pause, Score, and Previous.`;
    selectionNote.classList.add("hidden");
  } else {
    subjectTitle.textContent = "Choose a learner track";
    subjectNote.textContent = "Select Student or Kid first to open a separate set of matching quizzes.";
    selectionNote.classList.remove("hidden");
  }

  subjects
    .filter((subject) => selectedAudience && subject.audience === selectedAudience.key)
    .forEach((subject) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "subject-card";
    card.innerHTML = `
      <span class="subject-badge">${subject.label.slice(0, 1)}</span>
      <h3>${subject.label}</h3>
      <p>${subject.subtitle}</p>
      <span class="subject-cta">Start assessment</span>
    `;
    card.addEventListener("click", () => startQuiz(subject.key));
    grid.appendChild(card);
  });
}

function renderQuiz() {
  const template = document.getElementById("quiz-template");
  const subjectMeta = getSubjectMeta(state.subject);
  const question = getCurrentQuestion();
  const answer = getCurrentAnswer();
  const explanationVisible = answer.submitted || state.explanationQuestionIds.has(question.id);
  const isLastQuestion = state.currentIndex === state.questions.length - 1;

  app.innerHTML = "";
  app.appendChild(template.content.cloneNode(true));

  document.getElementById("subject-title").textContent = subjectMeta.label;
  document.getElementById("subject-subtitle").textContent = subjectMeta.subtitle;
  document.getElementById("progress-label").textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  document.getElementById("score-label").textContent = `Score ${getCorrectCount()}`;
  document.getElementById("progress-bar").style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
  document.getElementById("question-tag").textContent = getSubjectMeta(question.subject).label;
  document.getElementById("question-counter").textContent = `Completed ${getAnsweredCount()}/${state.questions.length}`;
  document.getElementById("question-text").textContent = question.prompt;

  const boosts = [
    { key: "explanation", label: "Explanation" },
    { key: "skip", label: "Skip" },
    { key: "pause", label: "Pause" },
    { key: "score", label: "Score" },
    { key: "previous", label: "Previous" },
  ];

  const boostGrid = document.getElementById("boost-grid");
  boosts.forEach((boost) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "boost-btn";
    button.textContent = state.usedBoosts[boost.key] ? `${boost.label} used` : boost.label;

    const disabled =
      state.usedBoosts[boost.key] ||
      (boost.key === "skip" && answer.submitted) ||
      (boost.key === "previous" && state.currentIndex === 0);

    button.disabled = disabled;
    button.addEventListener("click", () => useBoost(boost.key));
    boostGrid.appendChild(button);
  });

  document.getElementById("exit-btn").addEventListener("click", () => {
    showOverlay(
      "Leave this quiz?",
      "You can exit now and choose another subject. Your current quiz progress will be cleared.",
      [
        { label: "Stay", variant: "ghost", onClick: () => render() },
        { label: "Exit", onClick: () => { goHome(); render(); } },
      ],
    );
  });

  const optionsList = document.getElementById("options-list");
  question.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-btn";
    optionButton.textContent = option;

    if (answer.selectedIndex === index) {
      optionButton.classList.add("selected");
    }

    if (answer.submitted) {
      if (index === question.correctIndex) {
        optionButton.classList.add("correct");
      } else if (answer.selectedIndex === index) {
        optionButton.classList.add("wrong");
      }
      optionButton.disabled = true;
    }

    optionButton.addEventListener("click", () => selectOption(index));
    optionsList.appendChild(optionButton);
  });

  const feedbackBox = document.getElementById("feedback-box");
  if (answer.submitted) {
    feedbackBox.classList.remove("hidden");
    if (answer.skipped) {
      feedbackBox.classList.add("success");
      feedbackBox.textContent = "This question was skipped with your one-time skip action.";
    } else if (answer.selectedIndex === question.correctIndex) {
      feedbackBox.classList.add("success");
      feedbackBox.textContent = "Correct answer. Nice work.";
    } else {
      feedbackBox.classList.add("error");
      feedbackBox.textContent = "Not quite. Check the explanation and keep your momentum.";
    }
  }

  const explanationBox = document.getElementById("explanation-box");
  if (explanationVisible) {
    explanationBox.classList.remove("hidden");
    explanationBox.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
  }

  const primaryButton = document.getElementById("primary-btn");
  if (!answer.submitted && !answer.skipped) {
    primaryButton.textContent = "Check answer";
    primaryButton.disabled = answer.selectedIndex === null;
    primaryButton.addEventListener("click", submitCurrentAnswer);
  } else {
    primaryButton.textContent = isLastQuestion ? "See results" : "Next question";
    primaryButton.addEventListener("click", nextQuestion);
  }
}

function buildResultMessage(accuracy) {
  if (accuracy >= 0.8) {
    return {
      title: "Excellent rhythm",
      body: "You are showing strong recall and steady accuracy. Keep pressure on weaker subjects to stay sharp.",
    };
  }

  if (accuracy >= 0.6) {
    return {
      title: "Good momentum",
      body: "You have a solid base. Another sprint focused on missed concepts could lift your score quickly.",
    };
  }

  return {
    title: "Useful gaps found",
    body: "This is still productive practice. The explanations and breakdown now tell you exactly what deserves another pass.",
  };
}

function renderResult() {
  const template = document.getElementById("result-template");
  const subjectMeta = getSubjectMeta(state.subject);
  const correct = getCorrectCount();
  const attempted = getAttemptedCount();
  const skipped = getSkippedCount();
  const total = state.questions.length;
  const accuracy = total === 0 ? 0 : correct / total;
  const message = buildResultMessage(accuracy);

  app.innerHTML = "";
  app.appendChild(template.content.cloneNode(true));

  document.getElementById("result-title").textContent = `${subjectMeta.label} results`;
  document.getElementById("result-summary").textContent = `You scored ${correct} out of ${total} with ${Math.round(accuracy * 100)}% accuracy. Review the subject breakdown below to spot strengths and weaker areas.`;
  document.getElementById("correct-stat").textContent = correct;
  document.getElementById("attempted-stat").textContent = attempted;
  document.getElementById("skipped-stat").textContent = skipped;
  document.getElementById("result-message-title").textContent = message.title;
  document.getElementById("result-message-body").textContent = message.body;

  const breakdown = document.getElementById("result-breakdown");
  const grouped = {};
  state.questions.forEach((question) => {
    if (!grouped[question.subject]) {
      grouped[question.subject] = { total: 0, correct: 0 };
    }
    grouped[question.subject].total += 1;
    const answer = state.answers[question.id];
    if (answer.submitted && !answer.skipped && answer.selectedIndex === question.correctIndex) {
      grouped[question.subject].correct += 1;
    }
  });

  Object.entries(grouped).forEach(([subjectKey, result]) => {
    const row = document.createElement("div");
    row.className = "breakdown-row";
    const accuracyPercent = result.total === 0 ? 0 : (result.correct / result.total) * 100;
    row.innerHTML = `
      <span>${getSubjectMeta(subjectKey).label}</span>
      <div class="breakdown-track">
        <div class="breakdown-fill" style="width: ${accuracyPercent}%"></div>
      </div>
      <span>${result.correct}/${result.total}</span>
    `;
    breakdown.appendChild(row);
  });

  document.getElementById("retry-btn").addEventListener("click", () => startQuiz(state.subject));
  document.getElementById("home-btn").addEventListener("click", () => {
    goHome();
    render();
  });
}

function render() {
  hideOverlay();

  if (state.screen === "login") {
    renderLogin();
    return;
  }

  if (state.screen === "home") {
    renderHome();
    return;
  }

  if (state.screen === "quiz") {
    renderQuiz();
    return;
  }

  renderResult();
}

resetState();
render();
