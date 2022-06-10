import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// 2022/06/03

// 分割代入

// デフォルト値
const hello = (name = "Guest") => {
  console.log(`Hello ${name}.`);
}
hello();
hello('adam');

// ？ オブジェクトの分割代入のデフォルト値

// スプレッド構文
const array1 = [1, 2];
console.log(array1);
console.log(...array1);

/**
 * map
 *
 */
const nameArr = ["tanaka", "suzuki", "sato"];
const nameArr2 = nameArr.map((name) => {
  return name;
});

nameArr.map((name) => console.log(name));

/**
 * filter
 * 配列の中から特定の条件に一致するものを取り出して処理したいとき
 */
const numArr = [1, 2, 3, 4, 5, 6, 7];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// index
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

nameArr.map((name, index) => console.log(`map: ${index + 1}番目は${name}です`));

/**
 * 三項演算子
 * ある条件 ? 条件が true の時の処理 : 条件が false の時の処理
 * type of ~ は変数の型を判定してくれる
 */

const val = 1 > 0 ? "true です" : 'false です';
console.log(val);

const printFormattedNum = (num: number) => {
  const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
  console.log(formattedNum);
}

printFormattedNum(19999);

/**
 * DOM の作成
 */

const divEl = document.createElement('div');
console.log(divEl);

const pEl = document.createElement('p');

divEl.appendChild(pEl);
console.log(divEl);

// 先頭に追加したい場合は prepend
const h2El = document.createElement('h2');
divEl.prepend(h2El);
console.log(divEl);
