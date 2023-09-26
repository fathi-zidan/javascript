function isString(str, callback) {
    if (typeof str === 'string') {
        callback(str);
    } else {
        console.log('Not a string');
    }
}
function print(str2) {
    console.log(`The string is: ${str2}`);
}
isString('hello', print);
isString(12, print);
//..................................................
function firstWordUpperCase(str, callback2) {
    const words = str.split(' ');
    let s = '';
    // words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    words[0] = words[0].toUpperCase();
    s = words.join(' ');
    return callback2(s);
}
function dash(str) {
    const word = str.split(' ');
    // for(let j=0 ;j <word.length-1;j++) {
    //     console.log(`${word[j]}-${word[j+1]}` );
    // }
    console.log(word.join('-'));
}
firstWordUpperCase("hello world of js", dash);