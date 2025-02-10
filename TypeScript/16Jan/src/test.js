// let arr = [1, 0, 2, 4, 0]
var arr = [
    { question: "q1", ans: "a1" },
    { question: "q2", ans: "a2" },
    { question: "q3", ans: "a3" },
    { question: "q4", ans: "a4" }
];
function quiz(arr) {
    var score = 0;
    var randomIndex = Math.floor(Math.random() * arr.length);
    for (var i = 0; i <= 10; i++) {
        var ans = prompt(arr[randomIndex].question);
        if (arr[randomIndex].ans == ans)
            score++;
    }
    console.log(score);
}
quiz(arr);
