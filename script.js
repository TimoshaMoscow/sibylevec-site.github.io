// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Гарантированно скроллим наверх
    window.scrollTo(0, 0);
    
    // Инициализация помощника
    const questionInput = document.getElementById('questionInput');
    if (questionInput) {
        questionInput.addEventListener('input', handleQuestion);
    }
});

// Помощник по языку
function handleQuestion() {
    let question = document.getElementById('questionInput').value.toLowerCase();
    let answer = getAnswer(question);
    
    const helperResult = document.getElementById('helperResult');
    if (question.length > 2) {
        helperResult.innerHTML = `<div class="helper-answer">${answer}</div>`;
    } else {
        helperResult.innerHTML = '<div class="helper-placeholder">Здесь появится ответ на ваш вопрос...</div>';
    }
}

function getAnswer(question) {
    if (!question || question.length < 2) {
        return "Задайте вопрос о языке Сибилевец...";
    }
    
    // Фильтр некорректных вопросов
    const badWords = ["сос", "ху", "бля", "пизд", "еба"];
    if (badWords.some(word => question.includes(word))) {
        return "Пожалуйста, задайте вежливый вопрос о языке Сибилевец.";
    }

    // Ответы на вопросы
    if (question.includes("привет") || question.includes("здрава")) {
        return "На Сибилевском приветствие будет: <strong>'Здрава'</strong>";
    }
    if (question.includes("падеж") || question.includes("склонен")) {
        return "В Сибилевском <strong>нет падежей!</strong> Слова не меняются. Используйте предлоги: 'к', 'от', 'с', 'о'.";
    }
    if (question.includes("множественное") || question.includes("число")) {
        return "Множественное число образуется добавлением слова <strong>'все'</strong> после существительного. Пример: 'книга все' = книги";
    }
    if (question.includes("время") || question.includes("глагол")) {
        return "Времена глагола: <strong>'было'</strong> (прошедшее), <strong>ничего</strong> (настоящее), <strong>'буду'</strong> (будущее). Пример: 'Я было идти', 'Я идти', 'Я буду идти'";
    }
    if (question.includes("алфавит") || question.includes("букв")) {
        return "Алфавит состоит из <strong>26 букв</strong>. Убраны Ё, Ъ, Ы, Ь, Ю, Я. Буква Ы заменена на И, твёрдый и мягкий знаки убраны.";
    }
    if (question.includes("создатель") || question.includes("тимофей")) {
        return "Язык создан <strong>Тимофеем Сибилевым</strong> (род. 14.02.2010)";
    }
    if (question.includes("пример") || question.includes("перевод")) {
        return "Пример перевода: 'Я даю книгу другу' → <strong>'Я давать книга к друг'</strong>";
    }
    if (question.includes("правило") || question.includes("основн")) {
        return "3 главных правила: <strong>1) Слова не меняются 2) Множественное число = 'все' 3) Время = 'было'/ничего/'буду'</strong>";
    }
    
    if (question.length > 3) {
        return "Задайте вопрос о грамматике, алфавите или правилах языка Сибилевец. Например: 'Как образуется множественное число?'";
    }
    
    return "Задайте вопрос о языке Сибилевец...";
}

// Функции для упражнений
function checkExercise1() {
    let answer = document.getElementById("ex1-answer").value.toLowerCase().trim();
    let correct = "я видеть красивый машина";
    
    const result = document.getElementById("ex1-result");
    if (answer === correct) {
        result.innerHTML = "✅ Верно! Слова остаются в одной форме.";
        result.style.color = "var(--success)";
    } else {
        result.innerHTML = "❌ Попробуйте ещё: 'Я видеть красивый машина'";
        result.style.color = "var(--error)";
    }
}

function checkExercise2() {
    let answer = document.getElementById("ex2-answer").value.toLowerCase().trim();
    let correct = "интересный книга все";
    
    const result = document.getElementById("ex2-result");
    if (answer === correct) {
        result.innerHTML = "✅ Отлично! Частица 'все' после слова.";
        result.style.color = "var(--success)";
    } else {
        result.innerHTML = "❌ Нужно добавить 'все': 'интересный книга все'";
        result.style.color = "var(--error)";
    }
}

function checkExercise3() {
    let answer = document.getElementById("ex3-answer").value;
    
    const result = document.getElementById("ex3-result");
    if (answer === "было гулять") {
        result.innerHTML = "✅ Правильно! 'Было' для прошедшего времени.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Выберите вариант";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Вчера = прошедшее время → 'было гулять'";
        result.style.color = "var(--error)";
    }
}

function checkExercise4() {
    let answer = document.getElementById("ex4-answer").value.toLowerCase().trim();
    let correct = "мы буду читать интересный книга все";
    
    const result = document.getElementById("ex4-result");
    if (answer === correct) {
        result.innerHTML = "🎉 Браво! Вы освоили все правила Сибилевца!";
        result.style.color = "var(--success)";
    } else {
        result.innerHTML = "📝 Разбор: 'Мы буду читать интересный книга все'";
        result.style.color = "var(--error)";
    }
}

// Q&A аккордеон
document.addEventListener('DOMContentLoaded', function() {
    const qaItems = document.querySelectorAll('.qa-item');
    
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        const answer = item.querySelector('.qa-answer');
        const toggle = item.querySelector('.qa-toggle');
        
        question.addEventListener('click', function() {
            const isActive = answer.classList.contains('active');
            
            // Закрываем все открытые ответы
            document.querySelectorAll('.qa-answer.active').forEach(activeAnswer => {
                if (activeAnswer !== answer) {
                    activeAnswer.classList.remove('active');
                    activeAnswer.parentElement.querySelector('.qa-toggle').textContent = '+';
                }
            });
            
            // Переключаем текущий ответ
            if (isActive) {
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                answer.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
});
