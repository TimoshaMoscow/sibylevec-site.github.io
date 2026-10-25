document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".section-topline, .intro-grid, .benefit-card, .lesson-row, .exercise-card, .dictionary-card, .alphabet-layout, .qa-item",
  );
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      const delay = index % 4;
      if (delay) element.dataset.revealDelay = String(delay);
      revealObserver.observe(element);
    });
  }

  const alphabet = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "I",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Ъ",
    "Ь",
    "Э",
    "Я",
  ];
  const alphabetRoot = document.querySelector(".alphabet-container");
  const toast = document.querySelector(".pronunciation-toast");
  if (alphabetRoot) {
    alphabetRoot.innerHTML = alphabet
      .map(
        (letter) =>
          `<button type="button" class="letter${letter === "I" || letter === "И" ? " special" : ""}" aria-label="Буква ${letter}" data-letter="${letter}">${letter}</button>`,
      )
      .join("");
    alphabetRoot.addEventListener("click", (event) => {
      const button = event.target.closest("[data-letter]");
      if (!button || !toast) return;
      const letter = button.dataset.letter;
      const names = {
        I: "I — звук [и]",
        И: "И — звук [ы]",
        Й: "Й — звук [й]",
        Ъ: "Ъ — твёрдый знак",
        Ь: "Ь — мягкий знак",
        Ё: "Ё — звук [йо]",
        Е: "Е — звук [е]",
        Х: "Х — звук [х]",
        Ц: "Ц — звук [ц]",
        Ч: "Ч — звук [ч]",
        Ш: "Ш — звук [ш]",
        Ж: "Ж — звук [ж]",
      };
      const announcement = names[letter] || `${letter} — название буквы`;
      toast.textContent = announcement;
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          letter === "I" ? "и" : letter === "И" ? "ы" : letter,
        );
        utterance.lang = "ru-RU";
        window.speechSynthesis.speak(utterance);
      }
    });
  }

  const words = [
    { ru: "Привет", sv: "Здрава", type: "phrase" },
    { ru: "До свидания", sv: "До видения", type: "phrase" },
    { ru: "Можно", sv: "Можна", type: "word" },
    { ru: "Спасибо", sv: "Спасиба", type: "word" },
    { ru: "Извините", sv: "Извини", type: "word" },
    { ru: "Человек", sv: "Человек", type: "word" },
    { ru: "Дом", sv: "Дом", type: "word" },
    { ru: "Книга", sv: "Книга", type: "word" },
    { ru: "Машина", sv: "Машина", type: "word" },
    { ru: "Собака", sv: "Собака", type: "word" },
    { ru: "Кот", sv: "Кот", type: "word" },
    { ru: "Вода", sv: "Вода", type: "word" },
    { ru: "Хлеб", sv: "Хлеб", type: "word" },
    { ru: "Солнце", sv: "Сонце", type: "word" },
    { ru: "Хороший / хорошая / хорошее", sv: "Хороший", type: "word" },
    { ru: "Большой / большая / большое", sv: "Большой", type: "word" },
    { ru: "Маленький / маленькая / маленькое", sv: "Маленкий", type: "word" },
    { ru: "Я иду", sv: "Я идти", type: "phrase" },
    { ru: "Я читаю", sv: "Я читать", type: "phrase" },
    { ru: "Я пишу", sv: "Я писать", type: "phrase" },
    { ru: "Мир", sv: "МIр", type: "word" },
    { ru: "Мышь", sv: "мИшь", type: "word" },
    { ru: "Я не понимаю", sv: "Я не понимать", type: "phrase" },
    { ru: "Повторите, пожалуйста", sv: "Можна повтор?", type: "phrase" },
    {
      ru: "Я вижу красивую машину",
      sv: "Я видеть красивая машина",
      type: "phrase",
    },
    { ru: "Интересные книги", sv: "Интересный книга все", type: "phrase" },
    { ru: "Все книги на столе", sv: "Книга все на стол", type: "phrase" },
    { ru: "Я", sv: "Я", type: "word" },
    { ru: "Ты", sv: "Ти", type: "word" },
    { ru: "Мы", sv: "Ми", type: "word" },
    { ru: "Да", sv: "Да", type: "word" },
    { ru: "Нет", sv: "Нет", type: "word" },
    { ru: "Сегодня", sv: "Сегодня", type: "word" },
    { ru: "Вчера", sv: "Вчера", type: "word" },
    { ru: "Завтра", sv: "Завтра", type: "word" },
    { ru: "Говорить", sv: "Говорить", type: "word" },
    { ru: "Учиться", sv: "Учиться", type: "word" },
    { ru: "Понимать", sv: "Понимать", type: "word" },
    { ru: "Хотеть", sv: "Хотеть", type: "word" },
    { ru: "Знать", sv: "Знать", type: "word" },
    { ru: "Работать", sv: "Работать", type: "word" },
    { ru: "Жить", sv: "Жить", type: "word" },
    { ru: "Помогать", sv: "Помогать", type: "word" },
    { ru: "Друг", sv: "Друг", type: "word" },
    { ru: "Город", sv: "Город", type: "word" },
    { ru: "Еда", sv: "Еда", type: "word" },
    { ru: "Язык", sv: "Язык", type: "word" },
    { ru: "Слово", sv: "Слово", type: "word" },
    { ru: "Музыка", sv: "Музыка", type: "word" },
    { ru: "Новый / новая / новое", sv: "Новый", type: "word" },
    {
      ru: "Интересный / интересная / интересное",
      sv: "Интересный",
      type: "word",
    },
    { ru: "Простой / простая / простое", sv: "Простой", type: "word" },
    { ru: "Медленно", sv: "Медленно", type: "word" },
    { ru: "Вместе", sv: "Вместе", type: "word" },
    { ru: "Хорошо", sv: "Хорошо", type: "word" },
    {
      ru: "Ты учишься на Сибилевце?",
      sv: "Ти учиться Сибилевец?",
      type: "phrase",
    },
    { ru: "Мы говорим вместе", sv: "Ми говорить вместе", type: "phrase" },
    {
      ru: "Я учусь и говорю медленно",
      sv: "Я учиться и говорить медленно",
      type: "phrase",
    },
  ];
  const dictionaryList = document.getElementById("dictionary-list");
  const search = document.getElementById("dictionary-search");
  const count = document.getElementById("word-count");
  const empty = document.getElementById("dictionary-empty");
  let activeFilter = "all";
  const renderDictionary = () => {
    if (!dictionaryList) return;
    const query = (search?.value || "").toLocaleLowerCase("ru").trim();
    const filtered = words.filter(
      (item) =>
        (activeFilter === "all" || item.type === activeFilter) &&
        (!query ||
          `${item.ru} ${item.sv}`.toLocaleLowerCase("ru").includes(query)),
    );
    dictionaryList.innerHTML = filtered
      .map(
        (item, index) =>
          `<article class="dictionary-card"><div><span class="dictionary-original">${item.ru}</span><div class="dictionary-translation">${item.sv}</div><span class="dictionary-type">${item.type === "phrase" ? "Фраза" : "Слово"}</span></div><button class="copy-button" type="button" data-copy="${index}" aria-label="Скопировать ${item.sv}" title="Скопировать">⧉</button></article>`,
      )
      .join("");
    count.textContent = String(filtered.length);
    empty.hidden = filtered.length > 0;
    dictionaryList.querySelectorAll("[data-copy]").forEach((button) =>
      button.addEventListener("click", async () => {
        const value = filtered[Number(button.dataset.copy)].sv;
        try {
          await navigator.clipboard.writeText(value);
          button.textContent = "✓";
        } catch {
          button.textContent = value;
        }
        window.setTimeout(() => {
          button.textContent = "⧉";
        }, 1400);
      }),
    );
  };
  search?.addEventListener("input", renderDictionary);
  document.querySelectorAll(".filter-button").forEach((button) =>
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document
        .querySelectorAll(".filter-button")
        .forEach((item) => item.classList.toggle("active", item === button));
      renderDictionary();
    }),
  );
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search?.focus();
      document
        .getElementById("dictionary")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  });
  renderDictionary();
});

const normalizeAnswer = (value) =>
  value
    .toLocaleLowerCase("ru")
    .replace(/[.,!?"«»]/g, "")
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
function checkAnswer(inputId, resultId, expected, explanation, step = 0) {
  const field = document.getElementById(inputId);
  const result = document.getElementById(resultId);
  const answer = normalizeAnswer(field?.value || "");
  const accepted = expected.map(normalizeAnswer);
  if (!answer) {
    result.textContent = "Введите ваш вариант — можно попробовать ещё раз.";
    result.dataset.state = "error";
    return;
  }
  if (accepted.includes(answer)) {
    result.textContent = `Верно! ${explanation}`;
    result.dataset.state = "success";
    if (step) {
      const next = document.querySelector(`[data-step="${step + 1}"]`);
      if (next && next.hidden) {
        next.hidden = false;
        next.classList.add("is-visible");
        next.scrollIntoView({ behavior: "smooth", block: "center" });
        next.querySelector("input")?.focus({ preventScroll: true });
      }
    }
  } else {
    result.textContent = `Пока не совпало. Например: «${expected[0]}». ${explanation}`;
    result.dataset.state = "error";
  }
}
function checkExercise1() {
  checkAnswer(
    "ex1-answer",
    "ex1-result",
    ["ти читать интересный книга"],
    "Слова сохраняют одну форму.",
    1,
  );
}
function checkExercise2() {
  checkAnswer(
    "ex2-answer",
    "ex2-result",
    ["интересный книга все", "книга интересный все"],
    "Маркер «все» показывает множество.",
    2,
  );
}
function checkExercise3() {
  checkAnswer(
    "ex3-answer",
    "ex3-result",
    ["я гулять завтра", "завтра я гулять"],
    "Время задаёт слово «завтра», глагол не меняется.",
    3,
  );
}
