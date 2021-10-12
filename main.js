console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded)

function modelLoaded(){
    console.log('Model Loaded')
}

function check(){
    img=document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
if (error){
    console.error(error)
}
if (result){
    console.log(result)
    document.getElementById("object_name").innerHTML = result[0].la
}
}
