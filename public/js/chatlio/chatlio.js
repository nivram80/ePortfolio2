document.addEventListener('chatlio.ready', function (e) {
  var message = 'Hello! 👋\n\nHere are your instructor Kim and the pelvina team.\n\nYou can reach us Mon-Fri: 9: 00-22: 00 here in the chat and by phone on 📞 089 215 544 970, also anytime and on weekends also by e-mail to support@pelvina.de.\n\n** Important: ** If you have acute health problems,, please contact a doctor immediately. Please note that as part of our course we do not offer medical advice or advice on the detection or treatment of disease.\n\nBut now to you ... 🤗\n\nHow can we help you?'
  
  _chatlio.configure({
    'onlineTitle': 'Question? Select here.',
    'onlineMessagePlaceholder': 'Type here my friend...',
    'autoResponseMessage': message
  });
}, false);