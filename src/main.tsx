// 1-masala
// const multiplyValues = (obj: Record<string, number>, n: number): Record<string, number> => {
//   const res: Record<string, number> = {};
//   for (const key in obj) {
//     res[key] = obj[key] * n;
//   }
//   return res;
// };
// const obj = { a: 2, b: 3, c: 4 };
// const n = 3;
// console.log(multiplyValues(obj, n));


// 2-masala
// const countWordsWithA = (str: string): number => {
//   return str.split(' ').filter(word => word.includes('a')).length;
// };
// console.log(countWordsWithA("JavaScript is amazing and adaptable"));


// 3-masala
// const checkBooks = (books: { title: string; author: string; read: boolean }[]): void => {
//   books.forEach(book => {
//     const status = book.read ? 'o\'qilgan' : 'o\'qilmagan';
//     console.log(`${book.author} ning ${book.title} kitobi ${status}`);
//   });
// };

// const books = [
//   { title: "Halqa", author: "Akrom Malik", read: false },
//   { title: "Dunyoning ishlari", author: "O’tkir Hoshimov", read: true },
//   { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true },
// ];
// checkBooks(books);


// 4-masala
// const stringLengths = (arr: string[]): Record<string, number> => {
//   return arr.reduce((acc, item) => ({ ...acc, [item]: item.length }), {});
// };

// console.log(stringLengths(["text", "world", "laptop"])); // { text: 4, world: 4, laptop: 6 }



// 5-masala
//   const countWords = (arr: string[]): Record<string, number> => {
//     return arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {} as Record<string, number>);
// };

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// console.log(countWords(animals));


// 6-masala
// const ageDifference = (arr: { name: string; age: number }[]): number => {
//   const ages = arr.map(person => person.age).sort((a, b) => a - b);
//   return ages[ages.length - 1] - ages[0];
// };

// const people = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 },
// ];
// console.log(ageDifference(people)); // 54


// 7-masala
//   const getTruthyFalsy = (arr: any[]): { truthy: any[]; falsy: any[] } => {
//     return {
//         truthy: arr.filter(Boolean),
//         falsy: arr.filter(el => !el),
//     };
// };

// console.log(getTruthyFalsy([false, 1, 10, "", null, "sultonqul", 1.13, 0]));


// 8-masala
// const minMaxWord = (str: string): { minWord: string; maxWord: string } => {
//   const words = str.split(' ');
//   const sortedWords = words.sort((a, b) => a.length - b.length);
//   return { minWord: sortedWords[0], maxWord: sortedWords[sortedWords.length - 1] };
// };

// console.log(minMaxWord("Men dasturlash kursida o’qiyman"));


// 9-masala
// const formatString = (str: string): string => {
//   return str.replace(/[^a-zA-Z'\s]/g, '').replace(/NAJOT/, 'Najot ta\'lim is');
// };

// const inputString = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// console.log(formatString(inputString)); // "Najot ta'lim is the best"


// 10-masala
// const searchMatrix = (matrix: number[][], target: number): boolean => {
//   return matrix.some(row => row.includes(target));
// };

// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));


// 11-masala
// const rotateMatrix = (matrix: number[][]): number[][] => {
//   return matrix[0].map((_, index) => matrix.map(row => row[index]).reverse());
// };
// console.log(rotateMatrix([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
// console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// 12-masala
//   const lastWordLength = (str: string): number => {
//     const words = str.trim().split(' ');
//     return words[words.length - 1].length;
// };

// console.log(lastWordLength("Men dasturlash kursida o’qiyman")); 


// 13-masala
// const objectToStringArray = (obj: Record<string, number>): string[] => {
//   return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// };

// console.log(objectToStringArray({ a: 2, b: 5, c: 7 }));


// 14-masala
//   const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
//     const merged = [...nums1, ...nums2].sort((a, b) => a - b);
//     const mid = Math.floor(merged.length / 2);
//     return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
// };

// console.log(findMedianSortedArrays([1, 2], [3, 4]));


// 15-masala
const findDuplicates = (arr: any[]): any[] => {
  const counts: Record<any, number> = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counts).filter(key => counts[key] > 1).map(key => isNaN(+key) ? key : +key);
};

console.log(findDuplicates(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));
