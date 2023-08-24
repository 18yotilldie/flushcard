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

var a = 0; // 単語のインデックスを示す変数
shuffleArray(words); // 単語をシャッフル

var text = document.getElementById("text");
var next = document.getElementsByClassName("next");
var nexts = Array.from(next);

// 各ボタンのクリックイベントを設定
nexts.forEach(function(change){
  change.addEventListener("click",() => {
    if (a < words.length) {
      text.textContent = words[a];
      count_start();
      a++;
    } else {
      text.textContent = "おしまい"; // すべての単語を表示した場合のメッセージ
    }
  })  
});

var p = 0; // ポイントの変数
var point = document.getElementById("point"); // ポイント表示の要素

document.getElementById("correct")?.addEventListener("click", () => {
  point.textContent = ++p; // ポイントをインクリメントして表示
});

// 変数の定義と初期化-----------------------------------------------------
var count = 60; // カウントダウンの数字を格納する変数 1分なので60
var min = 0; // 残り時間「分」を格納する変数
var sec = 0; // 残り時間「秒」を格納する変数
var start_f = false;
var interval;

// スタート開始-------------------------------------------------------------
function count_start(){
  if (start_f === false) {
    interval = setInterval(count_down, 1000);
    start_f = true;
  }
}

// カウントダウンの開始-----------------------------------------------------
function count_down(){
  if(count === 1){
    var display = document.getElementById("default");
    display.style.color = 'red';
    display.innerHTML = "TIME UP!";
    clearInterval(interval);
  } else {
    count--;
    min = Math.floor(count / 60);
    sec = count % 60;
    var count_down = document.getElementById("default");
    count_down.innerHTML = ("0" + min) + "：" + ("0" + sec).slice(-2);
  }
}

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
