// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Гарантированно скроллим наверх
    window.scrollTo(0, 0);
    
    // Инициализация помощника
    const questionInput = document.getElementById('questionInput');
    if (questionInput) {
        questionInput.addEventListener('input', handleQuestion);
    }
    
    // Инициализация Q&A аккордеона
    const qaItems = document.querySelectorAll('.qa-item');
    
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        const answer = item.querySelector('.qa-answer');
        const toggle = item.querySelector('.qa-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', function() {
                const isActive = answer.classList.contains('active');
                
                // Закрываем все открытые ответы
                document.querySelectorAll('.qa-answer.active').forEach(activeAnswer => {
                    if (activeAnswer !== answer) {
                        activeAnswer.classList.remove('active');
                        const activeToggle = activeAnswer.parentElement.querySelector('.qa-toggle');
                        if (activeToggle) activeToggle.textContent = '+';
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
        }
    });
    
    // Инициализация произношения букв
    initAlphabetPronunciation();
});

// Функция для произношения букв
function initAlphabetPronunciation() {
    // Словарь произношений для букв Сибилевца (31 буква)
    const pronunciations = {
        'А': '[А]',
        'Б': '[Бэ]',
        'В': '[Вэ]',
        'Г': '[Гэ]',
        'Д': '[Дэ]',
        'Е': '[Е]',
        'Ё': '[Йо]',
        'Ж': '[Жэ]',
        'З': '[Зэ]',
        'I': '[И]',
        'И': '[Ы]',
        'Й': '[]',
        'К': '[Кэ]',
        'Л': '[Эл]',
        'М': '[Эм]',
        'Н': '[Эн]',
        'О': '[О]',
        'П': '[Пэ]',
        'Р': '[Рэ]',
        'С': '[Сэ]',
        'Т': '[Тэ]',
        'У': '[У]',
        'Ф': '[Фэ]',
        'Х': '[Ха',
        'Ц': '[Цэ]',
        'Ч': '[Че]',
        'Ш': '[Ша]',
        'Ъ': '[]',
        'Ь': '[]',
        'Э': '[Э]',
        'Я': '[Я]'
    };
    
    // Находим все буквы в алфавите
    const letters = document.querySelectorAll('.letter');
    
    if (letters.length === 0) return;
    
    // Создаём элемент для всплывающей подсказки
    let toast = document.querySelector('.pronunciation-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'pronunciation-toast';
        document.body.appendChild(toast);
    }
    
    let timeoutId;
    
    // Добавляем обработчик клика на каждую букву
    letters.forEach(letter => {
        letter.addEventListener('click', function(e) {
            e.stopPropagation();
            const char = this.textContent.trim();
            const message = pronunciations[char] || `Буква ${char}`;
            
            // Показываем подсказку
            toast.textContent = message;
            toast.style.opacity = '1';
            
            // Скрываем через 2 секунды
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                toast.style.opacity = '0';
            }, 2000);
        });
    });
}

// Функции для упражнений
function checkExercise1() {
    let answer = document.getElementById("ex1-answer").value.toLowerCase().trim();
    let correct = "я вiдеть красивий машiна";
    
    const result = document.getElementById("ex1-result");
    if (answer === correct) {
        result.innerHTML = "✅ Верно! Слова остаются в одной форме.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Попробуйте ещё: 'Я вiдеть красивий машiна'";
        result.style.color = "var(--error)";
    }
}

function checkExercise2() {
    let answer = document.getElementById("ex2-answer").value.toLowerCase().trim();
    let correct = "интересний кнiга все";
    
    const result = document.getElementById("ex2-result");
    if (answer === correct) {
        result.innerHTML = "✅ Отлично! Частица 'все' после слова.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Нужно добавить 'все': 'интересний кнiга все'";
        result.style.color = "var(--error)";
    }
}

function checkExercise3() {
    let answer = document.getElementById("ex3-answer").value;
    
    const result = document.getElementById("ex3-result");
    if (answer === "било гулять") {
        result.innerHTML = "✅ Правильно! 'Било' для прошедшего времени.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Выберите вариант";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Вчера = прошедшее время → 'било гулять'";
        result.style.color = "var(--error)";
    }
}

function checkExercise4() {
    let answer = document.getElementById("ex4-answer").value.toLowerCase().trim();
    let correct = "ми буду чiтать iнтересний кнiга все";
    
    const result = document.getElementById("ex4-result");
    if (answer === correct) {
        result.innerHTML = "✅ Правильно! Вы освоили все правила Сибилевца!";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Ответ: Ми буду чiтать iнтересний кнiга все";
        result.style.color = "var(--error)";
    }
}

// Функция для помощника (если нужна)
function handleQuestion(e) {
    // Заглушка для будущего функционала
    console.log("Вопрос:", e.target.value);
}
