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


const text = document.getElementById("text");
var currentIndex = Math.floor(Math.random() *  words.length);

document.getElementById("next")?.addEventListener("click", () => {
  if (text && currentIndex < words.length) {
    currentIndex++;
    text.textContent = words[currentIndex];
  }
});
