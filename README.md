# README

# アプリ名
mini_image_app

<!-- # URL -->
<!-- Herokuによるデプロイ -->


# 説明

画像投稿する際に、プレビューしてからの添付、画像の複数枚投稿ができます。

https://gyazo.com/25a6dd49b41c491a72be399e8f2facd4


# ER図

[erd.pdf](https://github.com/erika618/mini_image_app/files/5760154/erd.pdf)



# テーブル設計

## messages テーブル

| Column   | Type    | Options     |
| :------- | :-----  | :---------- |
| content  | string  | null: false |

- has_many_attached :images
- 画像アップロードに、active_storageを使用。

<br>
<br>

# 使用しているバージョン等

- ruby 2.6.5
- Rails 6.0.3.4
- MySQL

<br>
<br>

# その他使用しているgem・使うコマンド
```
<!-- brakeman（脆弱性に繋がるコードがないか確認するため ※全てのファイル・全ての警告オプション） -->
% bundle exec brakeman -A -w1

<!-- rails_best_practices（読みやすいコードか確認するため） -->
% rails_best_practices .

<!-- rubocop（インデントを整えるため） -->
% bundle exec rubocop -a

```