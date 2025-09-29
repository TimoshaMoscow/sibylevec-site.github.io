// Помощник по языку Сибилевец
function handleQuestion() {
    let question = document.getElementById("questionInput").value.toLowerCase();
    let answer = getAnswer(question);
    document.getElementById("helperResult").innerText = answer;
}

function getAnswer(question) {
    // Триггерные слова и ответы
    if (question.includes("привет") || question.includes("здрава")) {
        return "На Сибилёвском приветствие будет: 'Здрава'";
    }
    if (question.includes("сос") || question.includes("ху") || 
        question.includes("бля") || question.includes("пизд")) {
        return "Пожалуйста, задайте вежливый вопрос о языке Сибилевец.";
    }
    if (question.includes("падеж") || question.includes("склонен")) {
        return "В Сибилёвском нет падежей! Слова не меняются. Используйте предлоги: 'к', 'от', 'с', 'о'.";
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
        return "Язык создан Тимофеем Сибилёвым (род. 14.02.2010)";
    }
    if (question.includes("пример") || question.includes("перевод")) {
        return "Пример перевода: 'Я даю книгу другу' → 'Я давать книга к друг'";
    }
    if (question.includes("правило") || question.includes("основн")) {
        return "3 главных правила: 1) Слова не меняются 2) Множественное число = 'все' 3) Время = 'было'/ничего/'буду'";
    }
    
    // Общий ответ если не найдено триггерных слов
    if (question.length > 3) {
        return "Задайте вопрос о грамматике, алфавите или правилах языка Сибилевец. Например: 'Как образуется множественное число?'";
    }
    
    return "здесь появится ответ";
}
