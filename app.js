var express = require("express");
var app = express();
var port = 3579;
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://qubisa:root@qubisa.pvp0d.mongodb.net/test?retryWrites=true&w=majority",
  // mongoose.connect("mongodb+srv://root:root@cluster0.prm7t.mongodb.net/postdata?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var nameSchema = new mongoose.Schema({
  posting: String,
});
var Data = mongoose.model("Data", nameSchema);

var resultCaptureSchema = new mongoose.Schema({
  capture: Array,
  datetime: { type: Date, default: new Date() },
});

// var Data2 = mongoose.model("resultCapture", resultCaptureSchema);
var Data2 = mongoose.model("expressionsCapture", resultCaptureSchema);

Data.find().exec(function (err, results) {
  var count_index = results.length;
  console.log(count_index);
});

var emotion_labels = [
  "angry",
  "disgust",
  "fear",
  "happy",
  "sad",
  "surprise",
  "neutral",
];
for (i = 0; i < emotion_labels.length; i++) {
  //console.log(emotion_labels[i]);
  Data.find({ posting: emotion_labels[i] }).exec(function (err, results) {
    count_sad = results.length;
    //globalCountSad = count_sad;
  });
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.jsonp();
});
app.use(cors());
app.post("/multiresult", (req, res) => {
  let dt_txt = req.body;
  const dataMulti = new Data2({
    capture: req.body.capture,
  });

  console.log(req);
  // res.status(201).json({
  //   message: "Done Test Koneksi API POST!",
  //   request: dt_txt,
  // });
  dataMulti
    .save()
    .then((item) => {
      console.log(res);
      res.status(201).json({
        message: "Data successfully save to database",
        body: req.body,
      });
    })
    .catch((err) => {
      res.status(500).send("Unable to save to database");
    });
});

app.post("/adddata", (req, res) => {
  var myData = new Data(req.body);
  myData
    .save()
    .then((item) => {
      res.send("Name saved to database");
      console.log(res);
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.get("/chart", function (req, res) {
  res.sendFile(__dirname + "/layout.html");
});

//   app.post("/chartdata", (req, res) => {
//     var myData = new Data(req.body);
//     myData.save()
//         .then(item => {
//             res.send("Name saved to database");
//             console.log(res);
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to database");
//         });
// });

// Data.find({"posting":"angry"},function (err, results){
//     if (err) res.send(err)

//     res.send(JSON.parse(JSON.stringify(results)))
//   });

// Data.find().lean().exec(function (err, doc) {
//     res.json(doc);
// })
//var $_GET = {};
// var globalCountSad;
// function countSAD(){

//   //alert(" : " + globalCountSad);
//}

//console.log(globalCountSad)
//countSAD();
// console.log(countSAD());

// console.log(countSAD().globalCountSad);
// countSAD(globalCountSad){
//     const countsads = globalCountSad;
//     console.log(countsads);
// }

// Data.find({"posting" : 'sad'}).exec(function (err, results) {
//     var count_sad = results.length
//     console.log("Sad : " + count_sad);
//   });
//   Data.find({"posting" : 'neutral'}).exec(function (err, results) {
//     var count_neutral = results.length
//     console.log("Neutral : " + count_neutral);
//   });
//   Data.find({"posting" : 'happy'}).exec(function (err, results) {
//     var count_happy = results.length
//     console.log("happy : " + count_happy);
//   });
//   Data.find({"posting" : 'disgust'}).exec(function (err, results) {
//     var count_disgust = results.length
//     console.log("disgust : " + count_disgust);
//   });
//   Data.find({"posting" : 'fear'}).exec(function (err, results) {
//     var count_fear = results.length
//     console.log("fear : " + count_fear);
//   });
//   Data.find({"posting" : 'angry'}).exec(function (err, results) {
//     var count_angry = results.length
//     console.log("angry : " + count_angry);
//   });
//   Data.find({"posting" : 'surprise'}).exec(function (err, results) {
//     var count_surprise = results.length
//     console.log("surprise : " + count_surprise);
//   });
