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
    if (question.includes("как сказать") || question.includes("как перевести")) {
    return "Используйте базовые слова и правила: существительные не меняются, глаголы в начальной форме. Например: 'Я идти магазин'";
    }

    if (question.includes("предлог") || question.includes("предлоги")) {
    return "Используйте простые предлоги: К (кому/чему), ОТ (кого/чего), С (кем/чем), О (ком/чём), В (кого/что)";
    }

    if (question.includes("род") || question.includes("мужск") || question.includes("женск")) {
    return "В Сибилёвском нет родов! Все слова используют одну форму: 'красивый дом', 'красивый книга', 'красивый солнце'";
    }

    if (question.includes("спряжен") || question.includes("окончание")) {
    return "Глаголы не спрягаются! Всегда используйте начальную форму: 'я говорить', 'ты говорить', 'он говорить'";
    }
    if (question.includes("произношен") || question.includes("как читать")) {
    return "Все буквы читаются чётко. Ы → И, Ъ/Ь → удаляются, Ё → ЙО, Ю → ЙУ, Я → ЙА";
    }

    if (question.includes("зачем убрал") || question.includes("почему нет")) {
    return "Я убрал самые сложные буквы русского языка чтобы сделать Сибилевец проще для изучения и использования";
    }

    if (question.includes("сколько букв") || question.includes("26")) {
    return "Да, в алфавите 26 букв! Это на 6 букв меньше чем в русском";
    }
    if (question.includes("фраза") || question.includes("предложен")) {
    return "Популярные фразы: 'Здрава' (Привет), 'Меня звать...' (Меня зовут...), 'Спасиба' (Спасибо)";
    }
    if (question.includes("сложно") || question.includes("трудно")) {
    return "Сибилевец специально создан чтобы быть простым! Главное запомнить 3 правила и можно сразу говорить";
    }
    if (question.includes("зачем") || question.includes("цель")) {
    return "Цель Сибилевца - показать что язык может быть логичным и простым, без исключений и сложных правил";
    }
    if (question.includes("добавить слово") || question.includes("предложить")) {
    return "Присылайте свои предложения по словам в Telegram-канал! Сообщество решит какие слова добавить";
    }

    if (question.includes("github") || question.includes("исходник")) {
    return "Исходный код открыт! Ссылка на GitHub есть в описании Telegram-канала";
    }

    if (question.includes("учить") || question.includes("изучать")) {
    return "Начните с 3 основных правил, затем пополняйте словарный запас. Смотрите примеры на YouTube-канале!";
    }
    if (question.includes("падеж") || question.includes("склонен")) {
        return "В Сибилёвском нет падежей! Слова не меняются. Используйте предлоги: 'к', 'от', 'с', 'о'.";
    }
    if (question.includes("юмор") || question.includes("шутка")) {
    return "Почему Сибилевец простой? Потому что в нём даже исключения делают исключения! 😄";
    }

    if (question.includes("планы") || question.includes("будущее")) {
    return "В планах - пополнение словаря, создание учебника и развитие сообщества. Присоединяйтесь!";
    }

    if (question.includes("почему сибилевец") || question.includes("название")) {
    return "Язык назван в честь создателя - Тимофея Сибилёва. Окончание '-евец' делает название стильным!";
    }
    if (question.includes("дурак") || question.includes("идиот") || 
    question.includes("тупой") || question.includes("дебил")) {
    return "Давайте общаться уважительно! Я здесь чтобы помочь вам с языком Сибилевец";
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
