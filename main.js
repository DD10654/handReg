Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 80
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snapresult' src='" + data_uri + "'>";
    });
}

console.log("ML5 Version = " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y5G0ZjSLz/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded");
}

function inden_snap() {
    img = document.getElementById('snapresult');
    classifier.classify(img, gotresult);
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        fam_member = result[0].label;
        document.getElementById("output_sucess").innerHTML = fam_member;
    }
    }