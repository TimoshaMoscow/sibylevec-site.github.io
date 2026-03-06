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

// Функции для упражнений
function checkExercise1() {
    let answer = document.getElementById("ex1-answer").value.toLowerCase().trim();
    let correct = "я видет красивий машина";
    
    const result = document.getElementById("ex1-result");
    if (answer === correct) {
        result.innerHTML = "✅ Верно! Слова остаются в одной форме.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Попробуйте ещё: 'Я видеть красивий машина'";
        result.style.color = "var(--error)";
    }
}

function checkExercise2() {
    let answer = document.getElementById("ex2-answer").value.toLowerCase().trim();
    let correct = "интересний книга все";
    
    const result = document.getElementById("ex2-result");
    if (answer === correct) {
        result.innerHTML = "✅ Отлично! Частица 'все' после слова.";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Нужно добавить 'все': 'интересний книга все'";
        result.style.color = "var(--error)";
    }
}

function checkExercise3() {
    let answer = document.getElementById("ex3-answer").value;
    
    const result = document.getElementById("ex3-result");
    if (answer === "било гулйать") {
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
    let correct = "ми буду читат интересний книга все";
    
    const result = document.getElementById("ex4-result");
    if (answer === correct) {
        result.innerHTML = "✅ Правильно! Вы освоили все правила Сибилевца!";
        result.style.color = "var(--success)";
    } else if (answer === "") {
        result.innerHTML = "⚠️ Введите ответ";
        result.style.color = "var(--warning)";
    } else {
        result.innerHTML = "❌ Ответ: Ми буду читат интересний книга все";
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
