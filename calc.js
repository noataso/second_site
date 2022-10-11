quiz=[{
    question:"今日食べたものは？",
    answers:["とまと","りんご","レタス","キャベツ"],
    correct:"とまと"
},{
    question:"昨日食べたものは？",
    answers:["とまと","りんご","レタス","キャベツ"],
    correct:"キャベツ"
},{
    question:"明日食べるものは？",
    answers:["とまと","りんご","レタス","キャベツ"],
    correct:"りんご"
}]

let quizIndex=0;
const quizLength=quiz.length;
let score=0;


const $button=document.getElementsByTagName('button')

setupQuiz=()=>{
    document.getElementById('js-question').textContent=quiz[quizIndex].question

    let buttonIndex=0;
    const buttonLength=$button.length;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
    }
}
setupQuiz();



const clickHandler=(e)=>{
    if(quiz[quizIndex].correct==e.target.textContent){
        window.alert('正解！')
        score++
    }else{
        window.alert('不正解！')
    }
    quizIndex++
    if(quizIndex<quizLength){
        setupQuiz()
    }else{
        window.alert('終了！あなたのスコアは'+score+"/"+quizLength+"です！")
    }
}


let buttonIndex=0;
const buttonLength=$button.length;
while(buttonIndex<buttonLength){
    $button[buttonIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    })
    buttonIndex++;
}




