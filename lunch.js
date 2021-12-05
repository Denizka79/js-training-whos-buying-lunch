function whosPaying() {
    var lunchNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var randomNumber = Math.floor(Math.random() * lunchNames.length);
    var payName = lunchNames[randomNumber];
    alert(payName + " is paying for the Lunch today");
}

whosPaying();
