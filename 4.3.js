let team_john = [89, 120, 103];
let team_mike = [116, 94, 123];
let team_marry = [97,134,105];
let team_john_avg = (team_john[0] + team_john[1] + team_john[2]) / 3;
let team_mike_avg = (team_mike[0] + team_mike[1] + team_mike[2]) / 3;
let team_marry_avg = (team_marry[0] + team_marry[1] + team_marry[2])/3;

if (team_john_avg > team_mike_avg && team_john_avg > team_marry_avg) {
    console.log(`John wins! with an avg of ${team_john_avg}`);
} else if (team_mike_avg > team_john_avg && team_mike_avg > team_marry_avg) {
    console.log(`Mike wins! with an avg of ${team_mike_avg}`);
} else if (team_marry_avg > team_john_avg && team_marry_avg > team_mike_avg) {
    console.log(`Mary wins! with an avg of ${team_marry_avg}`);
} else {
    console.log("Draw");
}
// if (team_john_avg > team_mike_avg) {
//     console.log(`John wins! with an avg of ${team_john_avg}`);
// } else if (team_john_avg == team_mike_avg) {
//     console.log("Draw");
// } else {
//     console.log(`Mike Wins! with an avg of ${team_mike_avg}`)
// }



