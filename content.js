// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});


chrome.runtime.onMessage.addListener(function (msg, sender, response) {

  if (msg.from === 'popup') {
    switch (msg.subject) {
      case 'star-this-repository':
        // 获取github标记rep是否star的标志位
        var form = $('.js-toggler-form.unstarred');
        var btn = form.find('button[aria-label="Star this repository"]');
        var formDisplay = form.css('display');
        if (formDisplay === 'none') {
          response(false)
        } else {
          btn.trigger('click');
          response(btn.attr('title').split(' ')[1].split('/')[1]);
        }
        break;
      default :
        return;
    }
  }

});