let myLeads =[]
const tabs =[{url:"https://pradumnasatraf.co/"}]
const inputEl = document.getElementById("inpur-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}
function render(leads){
  let listItems =""
  for(let i=0; i<leads.length;i++){
    listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`
  }
  ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function(){ 
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  });
})
  
inputBtn.addEventListener("click", function(){
  // push the value in the value of the input text to the myLead array
  myLeads.push("https://"+inputEl.value)
  //Clear out the input field
  inputEl.value =""
  // Save the myLeads to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  // Render list iteaam
  render(myLeads)

})
deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear("myleads")
  myLeads =[]
  render(myLeads)
})

