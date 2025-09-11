// Функция для поиска в словаре
function searchWords() {
    let input = document.getElementById("wordSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("dictionaryTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) { // Начинаем с 1, пропускаем заголовок
        let tdSib = tr[i].getElementsByTagName("td")[0];
        let tdRus = tr[i].getElementsByTagName("td")[1];
        if (tdSib || tdRus) {
            let txtValueSib = tdSib.textContent || tdSib.innerText;
            let txtValueRus = tdRus.textContent || tdRus.innerText;
            if (txtValueSib.toUpperCase().indexOf(filter) > -1 || txtValueRus.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Простой переводчик (базовые правила)
function translateThis() {
    let inputText = document.getElementById("russianInput").value;
    if (inputText === "") {
        document.getElementById("translationResult").innerHTML = "<em>здесь появится перевод</em>";
        return;
    }

    // Простейший алгоритм замены по ключевым словам
    let translation = inputText;

    // 1. Замена окончаний на неизменяемую форму (очень упрощённо)
    translation = translation.replace(/ить\b/gi, 'ить'); // делать -> делать
    translation = translation.replace(/ать\b/gi, 'ать'); // читать -> читать
    translation = translation.replace(/ю\b/gi, 'йу'); // юлу -> йула (очень примерное)
    translation = translation.replace(/я\b/gi, 'йа'); //

    // 2. Можно добавить замену отдельных слов из словаря
    let wordMap = {
        "привет": "здрава",
        "меня зовут": "меня звать",
        "друзья": "друг все",
        "книги": "книга все",
        // Добавь сюда свои слова из словаря!
    };

    for (let [russian, sibilevec] of Object.entries(wordMap)) {
        let regex = new RegExp(russian, "gi");
        translation = translation.replace(regex, sibilevec);
    }

    // Показываем результат
    document.getElementById("translationResult").innerText = translation;
}
