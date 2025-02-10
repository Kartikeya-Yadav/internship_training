const discount = (function(){
    let rate = 10;
    return{
        setRate( nawRate){
            rate = nawRate;
            
        },

        getRate(){
            console.log(rate);
        },
        
        newPrize(prize){
            let dis = prize*rate*0.01;
            prize -= dis;
            console.log(prize);
        }
    }
})();

discount.getRate();
discount.newPrize(100);

discount.setRate(20)
discount.getRate();
discount.newPrize(100);

// Arrow Functions
const home =(name) => console.log(`Hello World ${name}`);
home("Jay"); 

const cal = {
    add: (a, b) => console.log(a+b),
    sub: (a, b) => console.log(a-b),
    mul: (a, b) => console.log(a*c),
    div: (a, b) => console.log(a/b)
}

cal.add(20, 30);



