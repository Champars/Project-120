a = document.getElementById("a");
b = document.getElementById("b");
c = document.getElementById("c");
d = document.getElementById("d");
e = document.getElementById("e");
f = document.getElementById("f");
g = document.getElementById("g");
h = document.getElementById("h");
ts = "";

var a, b, c, d, e, f, g, h = "";

function preload() {
    a = loadImage("a.jpg");
    b = loadImage("b.jpg");
    c = loadImage("c.jpg");
    d = loadImage("d.jpg");
    e = loadImage("e.jpg");
    f = loadImage("f.jpg");
    g = loadImage("g.jpg");
    h = loadImage("h.jpg");
}

function setup() {
    mobilenet = ml5.imageClassifier('MobileNet', modelloaded);
}

function modelloaded() {
    console.log("mobilenet is active");
}

function draw() {
    console.log("Hi");
    mobilenet.classify(a, gr1);
    mobilenet.classify(b, gr2);
    mobilenet.classify(c, gr3);
    mobilenet.classify(d, gr4);
    mobilenet.classify(e, gr5);
    mobilenet.classify(f, gr6);
    mobilenet.classify(g, gr7);
    mobilenet.classify(h, gr8);
}

function gr1(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn1").innerHTML = results[0].label;
    }
}

function gr2(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn2").innerHTML = results[0].label;
    }
}

function gr3(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn3").innerHTML = results[0].label;
    }
}

function gr4(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn4").innerHTML = results[0].label;
    }
}

function gr5(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn5").innerHTML = results[0].label;
    }
}

function gr6(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn6").innerHTML = results[0].label;
    }
}

function gr7(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn7").innerHTML = results[0].label;
    }
}

function gr8(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mn8").innerHTML = results[0].label;
    }
}

function check() {
    if (document.getElementById("mn1") == "Nut case" || document.getElementById("mn1") == "A box of nuts" || document.getElementById("mn1") == "a box of nuts" || document.getElementById("mn1") == "nut case") {
        ts = ts + 1;
    }

    if (document.getElementById("mn2") == "Spectacle case" || document.getElementById("mn2") == "spectacle case") {
        ts = ts + 1
    }
    if (document.getElementById("mn3") == "Nut case" || document.getElementById("mn3") == "A box of nuts" || document.getElementById("mn3") == "a box of nuts" || document.getElementById("mn3") == "nut case") {
        ts = ts + 1;
    }

    if (document.getElementById("mn4") == "sanitizer" || document.getElementById("mn4") == "Sanitizer") {
        ts = ts + 1;
    }
    if (document.getElementById("mn5") == "Tiffin box" || document.getElementById("mn5") == "tiffin box") {
        ts = ts + 1;
    }
    if (document.getElementById("mn6") == "Nailcutter" || document.getElementById("mn6") == "nailcutter") {
        ts = ts + 1;
    }
    if (document.getElementById("mn7") == "Bluetooth keyboard" || document.getElementById("mn7") == "Keyboard" || document.getElementById("mn7") == "bluetooth keyboard" || document.getElementById("mn7") == "keyboard") {
        ts = ts + 1;
    }
    if (document.getElementById("mn8") == "Rubik's cube" || document.getElementById("mn8") == "rubik's cube") {
        ts = ts + 1;
    }

    document.getElementById("resultgr").innerHTML = "Total Score For Google Lens: 6/8";

    if (ts >= 1) {
        document.getElementById("resultmn").innerHTML = "Total Score For MobileNet: " + ts + "/8";
    } else {
        document.getElementById("resultmn").innerHTML = "Total Score For MobileNet: 0/8";
    }
}