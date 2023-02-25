

function perfectNumber(a) {
    let sum = 0;
    let half = a/2

    for(let i = 1; i <= half; i++) {
        if(a%i == 0){
            console.log(`So ${i} la uoc cua ${a}`);
            if(i != a){
                sum += i;
            }
        }
    }

    if(sum == a){
        console.log('So hoan hao');
    }else {
        console.log('So ko hoan hao');
    }
}

perfectNumber(12);