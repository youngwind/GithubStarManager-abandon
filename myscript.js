$('button[aria-label="Star this repository"]').click(function () {
  console.log('点击了star');
  $(this).after('<button>fjdkjf</button>')
});

$('button[aria-label="Unstar this repository"]').click(function () {
  console.log('点击了取消star');
});