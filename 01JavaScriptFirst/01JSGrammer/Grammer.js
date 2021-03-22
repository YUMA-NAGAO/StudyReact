// 変数
let hello='hello world';
// hello='aaahellooooo';

// 定数
const hell222='hello';

// 配列
let inoki =['いーち','ni-i','さん','ダー！！！！'];

// ループ文
// let index=0;
// while(index<inoki.length){
//     // 繰り返す命令
//     console.log(inoki[index]);
//     index++;

// }

// if/else
// if (inoki.length>5){
//     console.log('ボンばいえ');
// }
// else{
//     console.log('バーン')
// }


// 関数
const test =(arg) => {
    // ここに実行したい命令を書く
    if (inoki.length>arg){
        console.log('ボンばいえ');
    }
    else{
        console.log('バーン')
    }
};

// オブジェクト
const sss={
    color:'pink',
    size:'large',
    purfume:'mint',
    goToie:()=>{
        console.log('hello');
    }
};

// console.log(window.innerHeight);
// window.alert('aaa');
// console.log(document.getElementsByTagName('button'));

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    window.alert('hello');
})
