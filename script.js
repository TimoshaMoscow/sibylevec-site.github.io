document.addEventListener('DOMContentLoaded', function() {
    const firstInput = document.querySelector('input');
    if (firstInput) firstInput.focus();
});

if (window.location.hash) {
    setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
} else {
    window.scrollTo(0, 0);
}

// Помощник по языку Сибилевец
function handleQuestion() {
    let question = document.getElementById("questionInput").value.toLowerCase();
    let answer = getAnswer(question);
    document.getElementById("helperResult").innerHTML = answer;
}

function getAnswer(question) {
    if (!question || question.length < 2) {
        return "Задайте вопрос о языке Сибилевец...";
    }
    
    if (question.includes("сос") || question.includes("ху") || 
        question.includes("бля") || question.includes("пизд")) {
        return "Пожалуйста, задайте вежливый вопрос о языке Сибилевец.";
    }

    if (question.includes("привет") || question.includes("здрава")) {
        return "На Сибилевском приветствие будет: 'Здрава'";
    }
    if (question.includes("падеж") || question.includes("склонен")) {
        return "В Сибилевском нет падежей! Слова не меняются. Используйте предлоги: 'к', 'от', 'с', 'о'.";
    }
    if (question.includes("множественное") || question.includes("число")) {
        return "Множественное число образуется добавлением слова 'все' после существительного. Пример: 'книга все' = книги";
    }
    if (question.includes("время") || question.includes("глагол")) {
        return "Времена глагола: 'было' (прошедшее), ничего (настоящее), 'буду' (будущее). Пример: 'Я было идти', 'Я идти', 'Я буду идти'";
    }
    if (question.includes("алфавит") || question.includes("букв")) {
        return "Алфавит состоит из 26 букв. Убраны Ё, Ъ, Ы, Ь, Ю, Я. Буква Ы заменена на И, твёрдый и мягкий знаки убраны.";
    }
    if (question.includes("создатель") || question.includes("тимофей")) {
        return "Язык создан Тимофеем Сибилевым (род. 14.02.2010)";
    }
    if (question.includes("пример") || question.includes("перевод")) {
        return "Пример перевода: 'Я даю книгу другу' → 'Я давать книга к друг'";
    }
    if (question.includes("правило") || question.includes("основн")) {
        return "3 главных правила: 1) Слова не меняются 2) Множественное число = 'все' 3) Время = 'было'/ничего/'буду'";
    }
    
    if (question.length > 3) {
        return "Задайте вопрос о грамматике, алфавите или правилах языка Сибилевец. Например: 'Как образуется множественное число?'";
    }
    
    return "здесь появится ответ";
}

// Функции для упражнений
function checkExercise1() {
    let answer = document.getElementById("ex1-answer").value.toLowerCase();
    let correct = "я видеть красивый машина";
    
    if (answer === correct) {
        document.getElementById("ex1-result").innerHTML = "✅ Верно! Слова остаются в одной форме.";
        document.getElementById("ex1-result").style.color = "green";
    } else {
        document.getElementById("ex1-result").innerHTML = "❌ Попробуйте ещё: 'Я видеть красивый машина'";
        document.getElementById("ex1-result").style.color = "red";
    }
}

function checkExercise2() {
    let answer = document.getElementById("ex2-answer").value.toLowerCase();
    let correct = "интересный книга все";
    
    if (answer === correct) {
        document.getElementById("ex2-result").innerHTML = "✅ Отлично! Частица 'все' после слова.";
        document.getElementById("ex2-result").style.color = "green";
    } else {
        document.getElementById("ex2-result").innerHTML = "❌ Нужно добавить 'все': 'интересный книга все'";
        document.getElementById("ex2-result").style.color = "red";
    }
}

function checkExercise3() {
    let answer = document.getElementById("ex3-answer").value;
    
    if (answer === "было гулять") {
        document.getElementById("ex3-result").innerHTML = "✅ Правильно! 'Было' для прошедшего времени.";
        document.getElementById("ex3-result").style.color = "green";
    } else if (answer === "") {
        document.getElementById("ex3-result").innerHTML = "⚠️ Выберите вариант";
        document.getElementById("ex3-result").style.color = "orange";
    } else {
        document.getElementById("ex3-result").innerHTML = "❌ Вчера = прошедшее время → 'было гулять'";
        document.getElementById("ex3-result").style.color = "red";
    }
}

function checkExercise4() {
    let answer = document.getElementById("ex4-answer").value.toLowerCase();
    let correct = "мы буду читать интересный книга все";
    
    if (answer === correct) {
        document.getElementById("ex4-result").innerHTML = "🎉 Браво! Вы освоили все правила Сибилевца!";
        document.getElementById("ex4-result").style.color = "green";
    } else {
        document.getElementById("ex4-result").innerHTML = "📝 Разбор: 'Мы буду читать интересный книга все'";
        document.getElementById("ex4-result").style.color = "red";
    }
}
