// JavaScriptを実行するページを限定
if (document.URL.match( /new/ ) || document.URL.match( /edit/ )) {
  document.addEventListener('DOMContentLoaded', function() {
    const ImageList = document.getElementById('image-list');

    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element");
      let imageElementNum = document.querySelectorAll('.image-element').length;

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      // ファイル選択ボタンを生成
      //  <input id="message_image_[番号]" name="message[images][]" type="file"></input>を作る
      // 「何番目の画像か」の判別せずとも、複数枚投稿の実装は可能だが規模の大きいアプリの場合に必要
      const inputHTML = document.createElement('input');
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`);
      inputHTML.setAttribute('name', 'message[images][]');
      inputHTML.setAttribute('type', 'file');

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML);
      ImageList.appendChild(imageElement);

      inputHTML.addEventListener('change', (e) => {
      // 画像の情報を発火したEventハッシュに格納されているオブジェクトから取得
      file = e.target.files[0];
      blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  };
      document.getElementById('message_image').addEventListener('change', (e) => {
        let file = e.target.files[0];
        let blob = window.URL.createObjectURL(file);
  
        createImageHTML(blob);

    });
  });
}