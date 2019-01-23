window._chatlio = window._chatlio||[];
!function(){ var t=document.getElementById("chatlio-widget-embed");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");
   n.setAttribute('data-widget-id','1e23b046-525a-4ac1-519d-c06e0da2315e');
   c.parentNode.insertBefore(n,c);
}();

document.addEventListener('chatlio.ready', function (e) {
  _chatlio.identify('user1234', {
    name: 'Willie Wilson',
    email: 'ww@royals.com',
    plan: 'speed',
    favoriteColor: 'royal blue'
  });
  _chatlio.configure({
    "onlineTitle": "Question? Select here.",
    "autoResponseMessage": "Question for moi? Just type it below and we are online and ready to answer.",
    "onlineMessagePlaceholder": "Type here my friend..."
  });
}, false);