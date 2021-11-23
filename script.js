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
