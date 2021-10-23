
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {createDiv: true}, function(response) {
      console.log("message sent");
  });
});

//let startButton = document.getElementById("startButton");

  // startButton.addEventListener("click", async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   console.log('in popoup');
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     function: displayOverlay,
  //   });
  // });


  //   function displayOverlay() {
  //     let iframe = document.createElement('iframe'); 
  //     iframe.style.background = "green";
  //     iframe.style.height = "100%";
  //     iframe.style.width = "0px";
  //     iframe.style.position = "fixed";
  //     iframe.style.top = "0px";
  //     iframe.style.right = "0px";
  //     iframe.style.zIndex = "9000000000000000000";
  //     iframe.src = chrome.extension.getURL("popup.html");
  //     document.body.appendChild();
  //   };

// chrome.runtime.onMessage.addListener(function(msg, sender){
//     if(msg == "toggle"){
//         toggle();
//     }
// })

// var iframe = document.createElement('iframe'); 
// iframe.style.background = "green";
// iframe.style.height = "100%";
// iframe.style.width = "0px";
// iframe.style.position = "fixed";
// iframe.style.top = "0px";
// iframe.style.right = "0px";
// iframe.style.zIndex = "9000000000000000000";
// iframe.frameBorder = "none"; 
// iframe.src = chrome.extension.getURL("popup.html")

// document.body.appendChild(iframe);

// function toggle(){
//     if(iframe.style.width == "0px"){
//         iframe.style.width="400px";
//     }
//     else{
//         iframe.style.width="0px";
//     }
// }

  