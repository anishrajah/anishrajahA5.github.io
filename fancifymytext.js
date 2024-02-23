// JavaScript source code

function showAlert() {
    alert("Hello, world!");
}

function textBigger() {
    document.getElementById("sampleTextArea").style.fontSize = "24px";
}

function moo() {
    var textArea = document.getElementById("sampleTextArea");
    var upperTextArea = textArea.value.toUpperCase();

    // split the textarea into multiple sentances

    var sentance = upperTextArea.split(/([!.?])/);

    for (var n = 0; n < sentance.length; n += 2) {
        var onesentance = sentance[n];

        if (/\s/.test(onesentance)) {

            var words = onesentance.split(/\s+/);

            words[words.length - 1] += "-Moo";
            sentance[n] = words.join(" ");
        }

    }
    upperTextArea = sentance.join("");
    textArea.value = upperTextArea;
}

const fancifyChoice = document.getElementById("FancyShmancyID");
const boringChoice = document.getElementById("BoringBettyID");

fancifyChoice.addEventListener("change", fancifySelection);
boringChoice.addEventListener("change", boringSelection);

function fancifySelection() {
    document.getElementById("sampleTextArea").style.color = "blue";
    document.getElementById("sampleTextArea").style.fontWeight = "bold";
    document.getElementById("sampleTextArea").style.textDecoration = "underline";

}


function boringSelection() {
    document.getElementById("sampleTextArea").style.color = "black";
    document.getElementById("sampleTextArea").style.fontWeight = "normal";
    document.getElementById("sampleTextArea").style.textDecoration = "none";

}

