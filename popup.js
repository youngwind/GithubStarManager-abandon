// 点击icon的时候star rep
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  chrome.tabs.sendMessage(
    tabs[0].id,
    {from: 'popup', subject: 'star-this-repository'},
    StarThisRep);
});


function StarThisRep(res) {
  var starTip = $('#star_tip');
  var inputLabelContainer = $('#input-label-container');
  if (!res) {
    starTip.text('仓库不能重复star');
  } else {
    starTip.text(res + ' star成功！');
    inputLabelContainer.show();
    $('#input-label').focus();
  }
}

$(document).on('keydown', '#input-label', function (e) {
  if (e.which === 13) {
    $('#label-list').append('<li>' + e.target.value + '</li>');
    e.target.value = '';
  }
});

