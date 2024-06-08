var debug = false;

var whatsAppUrl = "https://web.whatsapp.com/";
var newTabUrl = "chrome://newtab/";
var sourceChatFragment = "#watSrcChatTitle=";



         
 chrome.browserAction.onClicked.addListener(extensionIconClickListener);

 const extensionIconClickListener = () => {
    chrome.tabs.create({ url:'https://web.whatsapp.com/' });
 };