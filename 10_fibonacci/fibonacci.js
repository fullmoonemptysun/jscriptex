const fibonacci = function(num) {
    
    num = (Number)(num);
    if(num < 0){
        return 'OOPS';
    }

    if(num === 0){
        return 0;
    }



    let prev1step = 1;
    let prev2step = 0;
    let currentValue = 0;
    for(let i = 2 ; i <= num; i++){
        currentValue = prev1step + prev2step;
        prev2step = prev1step;
        prev1step = currentValue;
    };

    return prev1step;
};

// Do not edit below this line
module.exports = fibonacci;
