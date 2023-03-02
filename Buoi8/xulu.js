

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

function sum (n) {
    if (n <= 1) {
        return 1;
    }else {
        return n + sum(n - 1);
    }
}

// =================================================================


const arraySanPham = [
    {
        aoNam : "Ao khoac",
        color:"mau do",
        gia : "50000",
        sl :1
    },
    {
        aoNam : "Ao da",
        color:"mau xanh",
        gia : "70000",
        sl :2
    },
    {
        aoNam : "Ao trang",
        color:"mau vang",
        gia : "56000",
        sl :4
    }
]

// còn duyệt for
function tongtien(data){
    let result = 0;
    for(let i =0 ; i <data.length ;i++){
        let giatien = Number(data[i].gia) * data[i].sl;
        result +=giatien ;; //result = result + giatien;
    }
    return result;

}


console.log(tongtien(arraySanPham));
// =================================================================


const array1 = [2,3,3,3,5];

const array2 = [1,2,3];





const arrayResult = [];
const arrrayConcat = array1.concat(array2);
for (let i = 0; i < arrrayConcat.length; i++) {
    if(!(array1.includes(arrrayConcat[i]) && array2.includes(arrrayConcat[i] ))) {
        arrayResult.push(arrrayConcat[i])
    }
}

console.log(arrayResult);




function duyetMang (arr1, arr2) {
    const arrayResult = [];
    const arrrayConcat = arr1.concat(arr2);
    for (let i = 0; i < arrrayConcat.length; i++) {
        if(!(arr1.includes(arrrayConcat[i]) && arr2.includes(arrrayConcat[i]) && arrayResult.includes(arrrayConcat[i]))) {
            arrayResult.push(arrrayConcat[i])
        }
    }

    return arrayResult;
}



console.log(duyetMang(array1,array2));


function findMax (arr1, arr2) {
    const arrayConcat = arr1.concat(arr2);
    let valueMax = 0;
    for (let i = 0; i < arrayConcat.length; i++) {
        if(valueMax < arrayConcat[i]){
            valueMax = arrayConcat[i]
        }        
    }

    return valueMax;
}

console.log(findMax(array1,array2));

function arrangeArr(arr1, arr2) {
    const arrayConcat = arr1.concat(arr2);
    for(let i = 0; i < arrayConcat.length; i++) {
        for(let j = i+1; i< arrayConcat.length; j++){
            if(arrayConcat[i]>arrayConcat[j]){
                let temp = arrayConcat[i];
                arrayConcat[i] = arrayConcat[j];
                arrayConcat[j] = temp;
            }
        }
    }
    return arrayConcat;
}

const arrayOK = arrangeArr(array1,array2)

console.log(arrayOK);