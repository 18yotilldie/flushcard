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
var next = document.getElementsByClassName("next");
var nexts = Array.from(next);

var p = 0;
var point = document.getElementById("point");

document.getElementById("restart")?.addEventListener("click", () => {
  window.location.reload();
});

// カウントダウン関連
var count = 60;
var interval;

function count_start(){
  if (start_f === false) {
    interval = setInterval(count_down, 1000);
    start_f = true;
  }
}

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

// 各ボタンのクリックイベント
nexts.forEach(function(change){
  change.addEventListener("click", () => {
    if (a < words.length) {
      text.textContent = words[a];
      count_start();
      a++;
    } else {
      text.textContent = "おしまい";
    }
  })  
});

document.getElementById("correct")?.addEventListener("click", () => {
  point.textContent = ++p;
});

// 配列をシャッフルする関数------------------------------------------------
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// リスタートボタンがクリックされたときの処理-----------------------------------
document.getElementById("restart")?.addEventListener("click", () => {
  window.location.reload(); // ページをリロードしてリスタート
});
