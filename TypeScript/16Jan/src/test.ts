//17 Jan tests****


// let arr = [1, 0, 2, 4, 0]

// function myFun (arr:number[]):number[]{
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]==0){
//                 arr[j] = arr[j+1];
//                 arr[j+1]= 0;
//             }
//         }
//     }
//     return arr;
// }

// console.log(arr);
// console.log(myFun(arr));

interface Que{
    question:string;
    ans:string;
}

let arr:Que[] = [
    {question:"q1", ans:"a1"},
    {question:"q2", ans:"a2"},
    {question:"q3", ans:"a3"},
    {question:"q4", ans:"a4"}
]

function quiz(arr:Que[]){
    let score = 0;
    let randomIndex = Math.floor(Math.random() * arr.length);
    for(let i=0; i<=10; i++){
        let ans= prompt(arr[randomIndex].question);
        if(arr[randomIndex].ans ==ans)
            score++;
    }
    console.log(score);
}

quiz(arr);