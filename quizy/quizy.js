const quiz_contents=[
  ['たかなわ', 'たかわ', 'こうわ'],
  ['かめいど', 'かめど', 'かめと'],
  ['こうじまち', 'かゆまち', 'おかとまち'],
  ['おなりもん', 'ごせいもん', 'おかどもん'],
  ['とどろき', 'たたら', 'たたりき'],
  ['しゃくじい', 'せきこうい', 'いじい'],
  ['ぞうしき', 'ざっしき', 'ざっしょく'],
  ['おかちまち', 'みとちょう', 'ごしろちょう'],
  ['ししぼね', 'ろっこつ', 'しこね'],
  ['こぐれ', 'こばく', 'こしゃく'],
];
let answerCollections = ["たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ"]
let pics=[
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png'],
  ['https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png'],
];

let contents='';

for(let i=0; i<10; i++){
 contents+=`<h2 class="under">${i+1}. この地名はなんて読む？</h2>`
          
+`<img class="quiz-image" src="${pics[i]}" alt="問題の写真">`
+`<ul id="ql-0">`
+` <li class="button" id="${i}-0" input type="button" value="button" onclick="pushButton(${i},0)">${quiz_contents[i][0]}</li>`
+` <li class="button" id="${i}-1" input type="button" value="button" onclick="pushButton(${i},1)">${quiz_contents[i][1]}</li>`
+` <li class="button" id="${i}-2" input type="button" value="button" onclick="pushButton(${i},2)">${quiz_contents[i][2]}</li>`
+`<div class="correct" id="correctId-${i}">`
+`<li><span>正解！</span></li>`
+`<li>正解は${answerCollections[i]}です！</li>`
+`</div>`
+`<div class="wrong" id="wrongId-${i}">`
+`<li><span>不正解！</span></li>`
+`<li>正解は${answerCollections[i]}です！</li>`
+`</div>`
+`</ul>`
loop.innerHTML=contents;
};

function pushButton(quizNumber,choiceNumber){
  if(){}
  // 正解の選択肢を押した時の処理
  let clickedOption=document.getElementById(quizNumber+"-0")
  clickedOption.classList.add("correctButton");
  let displayOption=document.getElementById("correctId-"+quizNumber)
  displayOption.style.display="block";
  showOption.style.display="none";
  showOption2.style.display="none";


  //不正解の選択肢を押した時の処理
  let tappedOption=document.getElementById(quizNumber+"-1")
  tappedOption.classList.add("wrongButton");
  let showOption=document.getElementById("wrongId-"+quizNumber)
  showOption.style.display="block";
  showOption2.style.display="none";
  displayOption.style.display="none";

  let tappedOption2=document.getElementById(quizNumber+"-2")
  tappedOption2.classList.add("wrongButton");
  let showOption2=document.getElementById("wrongId-"+quizNumber)
  showOption2.style.display="block";
  showOption.style.display="none";
  displayOption.style.display="none";
}


