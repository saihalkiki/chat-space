$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = 
        `<div class="Message-box" data-message-id=${message.id}>
          <div class="Message-info">
            <div class="Message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
        `<div class="Message-box" data-message-id=${message.id}>
          <div class="Message-info">
            <div class="Message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    }
  };
  $('.New-message').on('submit',function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight });
      $('.New-message__send-btn').prop('disabled', false);
    })
    .fail(function () {
      alert("メッセージ送信に失敗しました");
    });
  })

});