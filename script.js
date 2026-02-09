let expression = "";
let history = JSON.parse(localStorage.getItem("history")) || [];

updateHistory();

function add(value) {
    expression += value;
    document.getElementById("expression").innerText = expression;
}

function clearAll() {
    expression = "";
    document.getElementById("expression").innerText = "";
    document.getElementById("result").innerText = "0";
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("expression").innerText = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById("result").innerText = result;

        saveHistory(expression + " = " + result);
        expression = "";
    } catch {
        document.getElementById("result").innerText = "Erreur";
    }
}

function saveHistory(item) {
    history.unshift(item);
    history = history.slice(0, 3);
    localStorage.setItem("history", JSON.stringify(history));
    updateHistory();
}

function updateHistory() {
    const list = document.getElementById("historyList");
    list.innerHTML = "";

    history.forEach(h => {
        let li = document.createElement("li");
        li.innerText = h;
        list.appendChild(li);
    });
}
