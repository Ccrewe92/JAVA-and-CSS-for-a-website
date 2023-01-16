var modelName = "XYZ";
var duration = 0;



function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let cost;
    if (modelName === "XYZ") {
        cost = (parseInt(duration) * 100).toFixed(2);
    } else if (modelName === "CPRG") {
        cost = (parseInt(duration) * 213).toFixed(2);
    }
    costLabel.innerHTML = isNaN(cost) ? "0.00" : cost;
}


modelButton = document.getElementById("model-button");


function changeModel() {
    let modelTextSpan = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelTextSpan.innerHTML = "Model CPRG";
        modelName = "CPRG";
    } else if (modelName === "CPRG") {
        modelTextSpan.innerHTML = "Model XYZ";
        modelName = "XYZ";
    }
    recalculate();
}
modelButton.addEventListener("click", changeModel);



durationButton = document.getElementById("duration-button");
function changeDuration() {
    let durationTextSpan = document.getElementById("duration-text");
    duration = parseFloat(prompt("Enter the new Duration"));
    duration = isNaN(duration) || !duration ? 0 : duration;
    durationTextSpan.innerHTML = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
