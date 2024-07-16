/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
    let nilaimax = 0;
    let subarray = [];
    for (let i = 0; i < arr.length; i++) {
        let nilaisum = 0;
        for (let j = i; j < arr.length; j++) {
            nilaisum += arr[j];
            if (nilaisum > nilaimax) {
                nilaimax = nilaisum;
                subarray = arr.slice(i, j + 1);
            }
        }
    }
    return [subarray, nilaimax];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
