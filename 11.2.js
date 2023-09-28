const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const str = 'hello my name is fathi, i am taking a bootcamp about programming';
function double_array(arr) {
    const double_arr = arr.map((ele) => {
        return ele * 2;
    });
    return double_arr;
}
function onlyEvenValues(arr) {
    const even_arr = arr.filter((ele) => {
        return (ele % 2 === 0);
    })
    return even_arr;
}
function showFirstAndLast(arr) {
    const first_last = arr.filter((item, i) => {
        return i === 0 || i === (arr.length - 1);
    })
    return first_last;
}
function vowelCount(str) {
    str.toLowerCase();
    let vowel = {};
    const vowels_arr = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels_arr.includes(char)) {
            if (vowel[char]) {
                vowel[char]++;
            } else {
                vowel[char] = 1;
            }

        }

    }
    return vowel;

}
function capitalize(str){
    const str2 = str.toUpperCase();
    return str2;
}
function swapCase(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i % 2 === 1) {
        words[i] = capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
  
console.log(double_array(arr));
console.log(onlyEvenValues(arr));
console.log(showFirstAndLast(arr));
console.log(vowelCount(str));
console.log(capitalize(str));
console.log(swapCase(str));

