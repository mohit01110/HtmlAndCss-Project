const inputValue = document.getElementById('userinput');

document.querySelectorAll('.operations').forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (e.target.innerText === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerText === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerText === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
        } else {
            let lastChar = inputValue.innerText.slice(-1);
            if (!isNaN(lastChar) || lastChar === ".") {
                inputValue.innerText += e.target.innerText;
            }
        }

        if (inputValue.innerText.length == 0) {
            inputValue.innerText = "0";
        }
    });
});

document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText.trim();
    });
});
