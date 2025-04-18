/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  let split = sentences.split(" ");
  let join = split.join("");
  let str = join.toLowerCase();
  let vowel = "aieuo";
  let count = 0;
  let same = false;
  if (str.length === 0) return str;
  for (let i = 0; i < vowel.length; i++) {
    if (
      (vowel[i].charCodeAt() == str[0].charCodeAt() &&
        str[0].charCodeAt() >= 97 &&
        str[0].charCodeAt() <= 122) ||
      (str[0].charCodeAt() >= 48 && str[0].charCodeAt() <= 57)
    ) {
      same = true;
      break;
    }
  }
  if (!same) {
    count++;
  }
  return count + Number(consonantCounterRecursive(str.slice(1)));
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
