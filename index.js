function sayHello() {
    alert("Hello, everyone!");
}

function showInput() {
    const text = document.getElementById("userInput").value;
    document.getElementById("output").innerText = text;
}

const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", function () {
    hoverText.style.color = "#2563eb";
});

hoverText.addEventListener("mouseout", function () {
    hoverText.style.color = "#374151";
});
