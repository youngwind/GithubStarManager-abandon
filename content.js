// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});


chrome.runtime.onMessage.addListener(function (msg, sender, response) {

  if ((msg.from === 'popup') && (msg.subject === 'star-this-repository')) {
    $('button[aria-label="Star this repository"]').trigger('click');
    console.log('lalalal');
    response(true);
  }

});