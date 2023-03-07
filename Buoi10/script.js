let input1 = 0;
let input2 =0;
let phepTinh = '+';
let result = 0;

function onChangeValueInput1() {
    input1 = Number(document.getElementById('so1').value);
    console.log(input1);
}


function onChangeValueInput2() {
    input2 = Number(document.getElementById('so1').value);
}

function clickGetValue(data) {
    if (data === '+') {
        result = input1 + input2;
    }else if (data === '-') {
        result = input1 - input2;
    }else if (data === '*') {
        result = input1 * input2;
    }else if (data === '/') {
        result = input1 / input2;
    }
    console.log(result);

}

function viewResult() {
    document.getElementById('kq')[0].in;
}