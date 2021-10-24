
//let startButton = document.getElementById("startButton");
let iframe = document.createElement('iframe');
  iframe.style.height = "100%";
  iframe.style.width = "100%";
  iframe.style.position = "fixed";
  iframe.style.top = "0px";
  iframe.style.right = "0px";
  //iframe.style.zIndex = "9000000000000000000";
  iframe.src = chrome.extension.getURL("toolbar.html");
  document.body.appendChild(iframe);

let uframe = document.createElement('iframe');
  uframe.style.height = "100%";
  uframe.style.width = "100%";
  uframe.style.position = "fixed";
  uframe.style.top = "100px";
  uframe.style.right = "100px";
  //iframe.style.zIndex = "9000000000000000000";
  //uframe.src = chrome.extension.getURL("borad.png");
  //document.body.appendChild(uframe);
// startButton.addEventListener("click", async () => {
//     chrome.tabs.create({
//       url: chrome.extension.getURL('toolbar.html'),
//       active: true
//     }, function(tab) {
//       // After the tab has been created, open a window to inject the tab
//       chrome.windows.create({
//           tabId: tab.id,
//           type: 'normal',
//           focused: true
//           // incognito, top, left, ...
//       });
//   });
// });




  