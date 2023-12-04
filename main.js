function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/LGADb3kqd/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}