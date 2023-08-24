const words = ["サル","キリン","ライオン","ゾウ","ウシ",
"ゴリラ","ウサギ","ラッコ","ワニ","パンダ",
"ネコ","カエル","イヌ","クマ","タヌキ",
"ブタ","ペンギン","バッタ","ヘビ","ウマ",
"キツネ","チョウ","ニワトリ","カタツムリ","アザラシ",
"カンガルー","イカ","カブトムシ","コアラ","タコ",
"クジラ","ネズミ","カマキリ","ザリガニ","サメ",
"カニ","クワガタ","ムササビ","クラゲ","カメ",
"ヤギ","シマウマ","カバ","ヒツジ","サイ",
"シカ","イノシシ","アライグマ","リス","ラクダ"];
var a = 0;
shuffleArray(words);

var text = document.getElementById("text");
var countdown = document.getElementById("countdown"); // カウントダウンの要素を追加
var passButton = document.getElementById("pass");
var correctButton = document.getElementById("correct");
var point = document.getElementById("point");

var p = 0;
var count = 60;
var interval;
var start_f = false;

document.getElementById("restart")?.addEventListener("click", () => {
  window.location.reload();
});

// カウントダウンの開始
function count_start(){
  if (start_f === false) {
    interval = setInterval(count_down, 1000);
    start_f = true;
  }
}

// カウントダウンの処理
function count_down(){
  if (count === 1){
    countdown.style.color = 'red';
    countdown.innerHTML = "TIME UP!";
    clearInterval(interval);
  } else {
    count--;
    var min = Math.floor(count / 60);
    var sec = count % 60;
    countdown.innerHTML = ("0" + min) + "：" + ("0" + sec).slice(-2);
  }
}

// ボタンのクリックイベント
passButton.addEventListener("click", () => {
  if (a < words.length) {
    text.textContent = words[a];
    count = 60; // カウントリセット
    countdown.innerHTML = "";
    count_start();
    a++;
  } else {
    text.textContent = "おしまい";
  }
});

correctButton.addEventListener("click", () => {
  point.textContent = ++p;
});

// 配列をシャッフルする関数
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
