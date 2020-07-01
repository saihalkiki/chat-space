$(function() {
  let chatMemberList = $("#UserSearchResult");
  function addUser(user) {
    let html = 
    `<div class="ChatMember clearfix">
      <p class="ChatMember__name">${user.name}</p>
      <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`;
  chatMemberList.append(html);
  }
  function addNoUser() {
    let html = 
    `<div class="ChatMember clearfix">
      <p class="ChatMember__name">ユーザーが見つかりません</p>
    </div>`;
    chatMemberList.append(html);
  }
  $('#UserSearch__field').on("keyup", function () {
    let input = $('#UserSearch__field').val();
    $.ajax({
      type: "GET",    //HTTPメソッド
      url: '/users',       //users_controllerの、indexアクションにリクエストの送信先を設定する
      data: { keyword: input },   //テキストフィールドに入力された文字を設定する
      dataType: 'json'
    })
    .done(function (users) {
      //emptyメソッドで一度検索結果を空にする
      chatMemberList.empty();
      //usersが空かどうかで条件分岐
      if (users.length !== 0) {
        //配列オブジェクト１つ１つに対する処理
        users.forEach(function (user) {
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function () {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  })
})