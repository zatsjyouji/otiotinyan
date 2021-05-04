let gazou=["sai1.jpg","sai6.jpg","sai6.jpg"];
let myurl="";   //★画像パス。文書とは別のフォルダーなどに入っている時は指定。全画像共通部分

// 画像サイズ 縦横
let gazouw=32;
let gazouh=32;

// 元のやつの全面か後ろか 1or-1
let Zx=-1;
// 画像いくつ落とすか
let num=24;
// 画像の流れる感覚 1000/
let time=50;

// リストオブジェクト構築
let imgArray=new Array(num);
let w=window.innerWidth+gazouw;
let h=window.innerHeight+gazouh;
let lt=window.pageXOffset-gazouw;
let tp=window.pageYOffset-gazouh;
let imglen=imgArray.length;
let len=gazou.length;

// 上の画像の数だけ繰り返しlengthで取得してるやつ
for(i=0; i<imglen; i++) {
// imgにクリエイトで入れて作る
let img=document.createElement("IMG");
// ソースは上で指定したやつ
img.src=myurl+gazou[i%len];  

// イメージのスタイルを設定
let nyan=img.style;

// fixedで固定
nyan.position="fixed";
// 左からどの位置か　ランダムで設定　ゆらゆらさせるため
nyan.left =lt+Math.floor(Math.random()*w)+"px";
nyan.top =tp+Math.floor(Math.random()*h)+"px";
nyan.zIndex=Zx;
// 親ノードの小ノードリストの末尾に追加
document.body.appendChild(img);
imgArray[i]=img;
}
function otiotinyan(){
for(i=0; i<imglen; i++){
let img=imgArray[i];
let x=parseInt(img.style.left);
let y=parseInt(img.style.top);
y+=2+Math.floor(Math.random()*2);
if(y >tp+h){y=tp; x=lt+Math.floor(Math.random()*w);}
else{ x +=Math.floor(Math.sin(y/40)*2); if(x<lt){x=lt;}else if(x>lt+w){x=lt+w;}}
img.style.left=x+"px"; img.style.top=y+"px";
}
setTimeout(otiotinyan,time); 
}
otiotinyan();

