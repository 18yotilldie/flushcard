const words = ["サル","キリン","ライオン","ゾウ","ウシ",
"ゴリラ","ウサギ","ラッコ","ワニ","パンダ",
"ネコ","カエル","ツル","クマ","タヌキ",
"ブタ","ペンギン","バッタ","ヘビ","ウマ",
"キツネ","チョウ","ニワトリ","カタツムリ","アザラシ",
"カンガルー","イカ","ハムスター","コアラ","タコ",
"クジラ","ネズミ","カマキリ","ザリガニ","サメ",
"カニ","クワガタ","ムササビ","クラゲ","カメ",
"ヤギ","シマウマ","カバ","ヒツジ","サイ",
"シカ","イノシシ","アライグマ","リス","ラクダ",
];

var a = words.length;
while (a) {
  var j = Math.floor( Math.random() * a );
  var t = words[--a];
  words[a] = words[j];
  words[j] = t;
}
 
const text = document.getElementById("text");

document.getElementById("next")?.addEventListener("click", () => {
  text.textContent = words[a];
  a++;
  });

document.getElementById("next")?.addEventListener("click", () => {
  count_start();
});

//変数の定義---------------------------------------------------------------------
var count   = 60;     //カウントダウンの数字を格納する変数  1分なので60
var min     = 0;       //残り時間「分」を格納する変数
var sec     = 0;       //残り時間「秒」を格納する変数
var start_f = false; 
var interval; 

//004----------スタート開始------------------------------------------------------
function count_start(){
  if (start_f === false) {
    interval = setInterval(count_down,1000);
    start_f = true;
  }
}
  
//005------------カウントダウンの開始---------------------------------------------
function count_down(){
  //006--------------------------------------------------------------------------
  if(count === 1){
              var display = document.getElementById("default");
              display.style.color = 'red';
              display.innerHTML = "TIME UP!";
              clearInterval(interval);
  //007-------------------------------------------------------------------------
  } else {
  //008-------------------------------------------------------------------------
              count--;
  //009----------Math.floor関数を使って小数点になった分を整数に変換する。---------------
              min = Math.floor(count / 60);
  //010------------60秒で割ったあまりが秒となる-------------------------------------
              sec = count % 60;
              var count_down = document.getElementById("default");
              count_down.innerHTML = ("0"+min) +"：" + ("0"+sec).slice(-2);
  }
}
