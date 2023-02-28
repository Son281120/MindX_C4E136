

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


const array = [1,2,4,6,8,9,10]
const array1 = [2,3,5,6,7,8];






const arrayResult = [];
const arrrayConcat = array.concat(array1);
for (let i = 0; i < arrrayConcat.length; i++) {
    if(!(array.includes(arrrayConcat[i]) && array1.includes(arrrayConcat[i] ))) {
        arrayResult.push(arrrayConcat[i])
    }
}

console.log(arrayResult);




function duyetMang (arr1, arr2) {
    const arrayResult = [];
    const arrrayConcat = arr1.concat(arr2);
    for (let i = 0; i < arrrayConcat.length; i++) {
        if(!(arr1.includes(arrrayConcat[i]) && arr2.includes(arrrayConcat[i] ))) {
            arrayResult.push(arrrayConcat[i])
        }
    }

    return arrayResult;
}


console.log(duyetMang(array,array1));