document.addEventListener('chatlio.ready', function (e) {
  // _chatlio.identify('user1234', {
  //   name: 'Willie Wilson',
  //   email: 'ww@royals.com',
  //   plan: 'speed',
  //   favoriteColor: 'royal blue'
  // });
  _chatlio.configure({
    "onlineTitle": "Question? Select here.",
    "autoResponseMessage": "Question for moi? Just type it below and we are online and ready to answer.",
    "onlineMessagePlaceholder": "Type here my friend..."
  });
}, false);