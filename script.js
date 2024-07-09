
// THIS IS JUST A TUTORIAL PROJECT. NOT A FULL FLEDGED PORTFOLIO WEBSITE.

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

function sendDetails(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msg = document.getElementById("msg");
  
  const details = [];
  details = {name,email,message};

  msg.textContent = 'Message sent';
}