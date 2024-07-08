const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabID){
  // remove all display
  for(const tabLink of tabLinks){
    tabLink.classList.remove("active-link");
  }
  for(const tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }

  // display selected
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabID).classList.add("active-tab");
}