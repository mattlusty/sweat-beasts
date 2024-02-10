import axios from "axios";
const BASEURL = "https://api.api-ninjas.com/v1/exercises";
const APIKEY = "JcQRG/SPOs2dnACkTAR+sA==WVKgjBnAYa8ojQd3";

export default function muscleApi() {
  var muscle = "biceps";
  axios({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
    headers: { "X-Api-Key": APIKEY },
    contentType: "application/json",
  }).then(function (response) {
    console.log(response);
  });
}
