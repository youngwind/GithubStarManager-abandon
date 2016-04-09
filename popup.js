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
  document.getElementById('rep_name').textContent = '成功';
}


