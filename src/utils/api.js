import axios from "axios";
const BASEURL = "https://api.api-ninjas.com/v1/exercises";
const APIKEY = "JcQRG/SPOs2dnACkTAR+sA==WVKgjBnAYa8ojQd3";

const getExercises = ({ name = "", type = "", muscle = "", difficulty = "" }) => {
  console.log("api launched!");
  return axios({
    method: "GET",
    url: BASEURL + "?type=" + type + "&muscle=" + muscle + "&difficulty=" + difficulty,
    headers: { "X-Api-Key": APIKEY },
    contentType: "application/json",
  }).then((response) => {
    console.log("response recieved!");
    return response.data;
  });
};

export default {
  getExercises,
};

// Example Request:
// "https://api.api-ninjas.com/v1/exercises?type=cardio&muscle=quadriceps&difficulty";

// Exampe Response (an individual exercise object):
// {
//   difficulty: "intermediate",
//   equipment: "body_only",
//   instructions:
//     "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation. Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",
//   muscle: "quadriceps",
//   name: "Jumping rope",
//   type: "cardio",
// };

// Request paramter options:
// =========================
// =========================

// "type"
// =======
// cardio
// strength
// stretching
// plyometrics
// powerlifting
// strongman
// olympic_weightlifting

// "muscle"
// =======
// abdominals
// abductors
// adductors
// biceps
// calves
// chest
// forearms
// glutes
// hamstrings
// lats
// lower_back
// middle_back
// neck
// quadriceps
// traps
// triceps

// "difficulty"
// =======
// beginner
// intermediate
// expert
