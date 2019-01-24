document.addEventListener('chatlio.ready', function (e) {
  _chatlio.configure({
    'onlineTitle': 'Question? Select here.',
    'onlineMessagePlaceholder': 'Type here my friend...',
    'autoResponseMessage': 'Question for moi? Just type it below and we are online and ready to answer.',
  });

}, false);