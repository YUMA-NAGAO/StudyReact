const quiz=[
    {
        question:'ゲーム史上、最も売れたゲーム機は？',
        answers:[
            'スーパーファミコン',
            'ニンテンドーDS',
            'プレステーション3',
            'ニンテンドースイッチ'
        ],
        correct:'ニンテンドーDS'
    },{
        question:'井鳥重盛が企画した、任天堂の看板ゲームといえば？',
        answers:[
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct:'MOTHER2'
    },{
        question:'FFⅣの主人公の名前は？',
        answers:[
            'フリオニール',
            'クラウド',
            'ディーダ',
            'セシル'
        ],
        correct:'セシル'
    }
]

const quizLength=quiz.length;
let quizIndex=0;
let score=0;

const $button=document.getElementsByTagName('button')



// 定数の文字列をHTMLに反映させる
const setUpQuize = () =>{
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    for (i=0;i<quiz[quizIndex].answers.length;i++){
        $button[i].textContent=quiz[quizIndex].answers[i];
    }
}

setUpQuize();


const clickHandler= (e) =>{
    if (quiz[quizIndex].correct ===e.target.textContent){
        window.alert('正解！！');
        score++;
    }else{
        window.alert('不正解！！！');
    }
    quizIndex++;

    if(quizIndex<quizLength){
        setUpQuize();
    }else{
        window.alert('結果発表！！！\n'+score+'/'+quizLength+'です！！！');
    }




}

for(i=0;i<$button.length;i++){
    $button[i].addEventListener('click',(e)=>{
        clickHandler(e);
    });
}

