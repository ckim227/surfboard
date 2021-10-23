
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
window.onload=function() {
changeColor.addEventListener("click", async () => {
    console.log("button pressed");
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: on,
    });
  });
 
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
}
  