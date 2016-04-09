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
  var starTip = document.querySelector('#star_tip');
  var inputLabelContainer = document.querySelector('#input-label-container');
  if (!res) {
    starTip.textContent = '仓库不能重复star';
  } else {
    starTip.textContent = res + ' star成功！';
    inputLabelContainer.style.display = 'block';
  }
}


