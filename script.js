
// Product key: tes862440

// Added the KRNL core 

// KRNL can get rid of viruses or something 

// Auto resolve mad fine

// Working on the CPU shell

// Made it so theres extra non js commands in cmd:

// sysrun("function()") - Close the CMD tab and open the new tab

// sysfix - Fixes the system via restart from boot 

// restart - Restarts the system to Passlock ( DO NOT RUN IT )

try{
// Hide stuff or something 
$("#cmdbar").toggle()
$(".pushnoti").toggle()
$(".start").toggle()
$(".notifications").toggle()
experiment=0

// Variables 
rantime=0

// Define an interval in milliseconds (e.g., every 1000ms or 1 second)
var interval = 100;

// Set up the interval to check for the "content" element
var contentCheck = setInterval(function () {
  // Get the element with the id "content"
  var contentDiv = document.getElementById("content");

  // Check if the element with the id "content" exists
  if (contentDiv) {
    // Rename the id attribute
    contentDiv.id = "newContent";
    // Stop the interval (if you only want to do this once)

  }
  // If you want to keep checking, you can remove the clearInterval line.
}, interval);




setInterval(function () {
  try {
    const time = new Date();
    document.getElementById("clock").innerHTML = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h24",
    });
  } catch {}
}, 500); // 1000 milliseconds (1 second) interval
function productcheck(str) {
  alpha = str[+0];
  alpha = alpha + str[+1];
  alpha = alpha + str[+2];
  beta = str.replace(alpha, "");
  function isEven(number) {
    return number % 2 === 0;
  }

  result = isEven(beta);
  if (result == true) {
    return true;
  } else {
    return false;
  }
}

// Setup Essentials

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "b") {
    alert("System Utilitys opening");
    try {
      closeWindow();
    } finally {
      cmd1();
    }
  }
});

function boot() {

create("style","body",""," body { display: flex; align-items: center; justify-content: center; height: 100vh; background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3tHYZPdkovYKeXksUPv9tktWR0gOQxAx6cTB9I3P3Zci4xLkVD9kP90XyL-4KLDlnKk:https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1146708.jpg%26fm%3Djpg&usqp=CAU); background-repeat: no-repeat; background-size: cover; user-select: none; } .start{ background-color: white; width: 150px; height: 200px; } .pushnoti{ background-color: black; opacity: 80%; height: 200px; width:200px; position: fixed; right: 25px; bottom: 50px; } .notifications{ background-color: black; opacity: 80%; height: 300px; width: 200px; overflow: auto; position: fixed; right: 25px; bottom: 50px; } #notbox{ overflow: auto; } .seperator{ height: 40px; background-color: white; } .notification{ opacity: 100; border-radius: 5px; color: white; overflow: auto; } #cmdbar{ top: 0; position: fixed; width: 100%; background-color: white; } body { font-family: Arial, sans-serif; } #fullscreen{ width: 20px; position: absolute; top: 5px; right: 20px; } #ifme{ height: 80%; width: 100%; } .chat-window { width: 400px; height: 600px; border: 1px solid #ccc; margin: 50px auto; padding: 20px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); } h2 { text-align: center; } .exit_button{ background-color: lightcoral; color: white; width: 10px; } #computer-message { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 20px; } #user-input { width: 75%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; } #send-btn { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; } #send-btn:hover { background-color: #3e8e41; } #ifme{ width: 100%; height: 90%; resize: both; min-height: 200px; max-height: 800px; } .window { position: absolute; background-color: #c2c2c2; width: 400px; min-height: 200px; max-height: 800px; border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); resize: both; overflow: auto; z-index: 1; } .top{ z-index: 9919; } textarea{ width: 100%; height: 80%; } .window-title{ z-index: 999; } .window-main{ overflow: auto; z-index: 1; } .context-menu{ background-color: azure; } .spinner { width: 40px; height: 40px; border-radius: 50%; border: 4px solid #333; border-top-color: #999; animation: spin 1s infinite linear; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .contaner{ overflow: scroll; } .window-title { padding: 8px; color: #fff; cursor: move; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .item1{ width: 40px; } .window-content { padding: 8px; min-height: 150px; } .taskbar { position: fixed; bottom: 0; z-index: 99; left: 0; width: 100%; height: 40px; background-color: #1c1c1c; color: white; display: flex; align-items: center; justify-content: flex-start; padding-left: 10px; } .start-button { width: 40px; height: 40px; background-color: #1c1c1c; color: white; border: none; outline: none; cursor: pointer; display: flex; align-items: center; justify-content: center; } .start-button:hover { background-color: #555; } .start-button img { width: 20px; height: 20px; } .start-menu { position: absolute; top: 40px; left: 0; width: 200px; background-color: #1c1c1c; color: white; border: 1px solid #555; padding: 10px; display: none; } .start-menu.active { display: block; } #cmd{ color: white; } #cmdline{ color: white; background-color: black; border-color: black; } #iframe{ overflow: auto; width: 50px; } #clock{ right: 0px; position: fixed; width: 100px; z-index: 9999; } .context-menu { display: none; position: absolute; background-color: #f9f9f9; border: 1px solid #ccc; padding: 5px; }")


  document.body.style.backgroundColor = "#000000";
  // CSS styles for the centered div
  windowsicon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8LFsejSKHAUqlLdTJ9wzRqn9GhRqMyhmpw&usqp=CAU";
  // Create the loading screen element
  var loadingScreen = document.createElement("div");
  loadingScreen.id = "loading-screen";
  loadingScreen.style.width = "100%";
  loadingScreen.style.height = "100%";
  loadingScreen.style.backgroundColor = "#f3f3f3";
  loadingScreen.style.display = "flex";
  loadingScreen.style.justifyContent = "center";
  loadingScreen.style.alignItems = "center";
  loadingScreen.style.position = "fixed";
  loadingScreen.style.top = "0";
  loadingScreen.style.left = "0";
  loadingScreen.style.zIndex = "9999";

  var spinner = document.createElement("div");
  spinner.classList.add("spinner");

  var loadingText = document.createElement("div");
  loadingText.id = "loading-text";
  loadingText.style.fontSize = "24px";
  loadingText.style.color = "#333";
  loadingText.textContent = " \n \n ​       ​ Loading Windows Infinite";

  loadingScreen.appendChild(spinner);
  loadingScreen.appendChild(loadingText);
  document.body.appendChild(loadingScreen);

  // here we do stuff

  hostname = window.location.hostname;

  if (hostname == "solocode.azurewebsites.net ") {
    const platforrm = "Sololearn";
  } else {
    const hostname = "Host Undetectable";
  }

  // Simulate some asynchronous task
  function simulateTask() {
    return new Promise(function (resolve) {
      setTimeout(resolve, 3000); // Simulating a 3-second task
    });
  }

  // Call the simulateTask function
  simulateTask().then(function () {
    // Hide the loading screen
    loadingScreen.style.display = "none";
  });

  checkFirstRun();

  try{
    code=localStorage.getItem("startup")
    eval(code)
  }
  finally{

  }

}

function sysrun(str) {
  closeWindow();
  eval(str);
}

function checkFirstRun() {
  // Check if the program has been run before
  if (localStorage.getItem("firstRun") === null) {
    // First run: execute firstRunFunction
    firstRunFunction();

    // Set a flag indicating that the program has been run before
    localStorage.setItem("firstRun", "true");
  } else {
    // Not the first run: execute otherFunction
    otherFunction();
  }
}

function firstRunFunction() {
  firsttime();
  // Do something specific for the first run
}

function otherFunction() {
  startup();
  //Do something specific for subsequent runs
}

// Leave this:

boot();

function experiment1(){
    $("#cmdbar").toggle()
    notification("Experimental mode on")
    notification("Changing sys")

    experiment=(1)

    
}

function gettasks() {
  // Create an empty array to store the variables
  var variables = [];

  // Track the number of variables found
  var variableCount = 0;

  // Loop through the properties of the global object
  for (var variableName in window) {
    // Check if the property is a variable and not a built-in object or function
    if (
      window.hasOwnProperty(variableName) &&
      typeof window[variableName] !== "function"
    ) {
      // Increment the variable count
      variableCount++;

      // Check if the variable count is greater than or equal to 176
      if (variableCount >= 176) {
        // Add the variable name to the array
        variables.push(variableName);
      }
    }
  }

  // Print the list of variables
  return variables;
}

function opennotifications(){
    $(".notifications").toggle()
}

function openchrome() {
  create_window("Chrome", true);
  create("div", "content", "tabbar", "");
  create("br", "content");
  create("input", "content", "searchbar", "Input URL");
  create("button", "content", "", "Search", "search()");
  e = 1;
  create(
    "iframe",
    "content",
    "ifme",
    "",
    "",
    "https://storage2.w3spaces.com/google.html",
  );
  check1 = 1;
}

check1 = 0;
function search(str) {


  search1 = document.getElementById("searchbar").value;


  document.getElementById("ifme").setAttribute("src", search1);
  ifme = document.getElementById("ifme");
ifme.style.height = "100%";
}

function cmd1() {
  create_window("CMD", true);
  var contentDiv = document.getElementById("content");
  contentDiv.style.backgroundColor = "black";
  create("div", "content", "cmdline1");
  create("h6", "cmdline1", "cmd", "Command Prompt | Administrator");
  create("input", "content", "cmdline");
  cmdline.setAttribute("onkeypress", "handleKeyPress(event)");
}

// system
startupon = 0;

window.oncontextmenu = function () {};

function taskmgr() {
  create_window("Task Manager", true);
  create("center", "content", "center", "");
  create("h2", "center", "", "Task Manager");
  tasks = [gettasks()];
  create("br", "content");
  create("div", "content", "", "", "", "", "container");
  for (item in tasks) {
    create("h4", "center", "", tasks[item]);
    create("hr", "content");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    runcmd();
  }
}

function handleKeyPress2(event) {
  if (event.key === "Enter") {
    krnl()
  }
}

function krnl(){
    var query = document.getElementById("cmdline").value;
  create("h6", "cmdline1", "cmd", query);
  if (query == "cmdbar"){
      $("cmdbar").toggle()
  }
  if (query == "flush"){
      create("h6", "cmdline1", "cmd", " [ KRNL ] Saving user data");
      back=document.body.style.backgroundImage;
      localStorage.clear()
      create("h6", "cmdline1", "cmd", " [ KRNL ] Flushed localStorage");
      submitimg2(back)
  }
  if (query == "flash"){
      console.log(document.body.outerHTML);
      create("h6", "cmdline1", "cmd", " [ KRNL ] Flashed page");
  }
  if (query == "onlyshell"){
      create("h6", "cmdline1", "cmd", " [ KRNL ] Clearing page");
     // Remove all elements from the page
document.body.innerHTML = '';
document.body.style.backgroundImage = "none";
create_window("Kernal Shell")
      var contentDiv = document.getElementById("content");
  contentDiv.style.backgroundColor = "black";
  create("div", "content", "cmdline1");
  create("h6", "cmdline1", "cmd", " KERNAL SHELL | Administrator");
  create("input", "content", "cmdline");
  cmdline.setAttribute("onkeypress", "handleKeyPress2(event)");
  create("h6", "cmdline1", "cmd", " [ KRNL ] Page cleared");
  
  }
  if (query == "cmd"){
      closeWindow()
      cmd1()
  }

}
// Chat time

function runcmd() {
  var query = document.getElementById("cmdline").value;
  create("h6", "cmdline1", "cmd", query);
  if (query == "cmdbar"){
      $("cmdbar").toggle()
  }
  if (query == "krnl"){
      closeWindow()
      create_window("Kernal Shell", true)
      var contentDiv = document.getElementById("content");
  contentDiv.style.backgroundColor = "black";
  create("div", "content", "cmdline1");
  create("h6", "cmdline1", "cmd", " KERNAL SHELL | Administrator");
  create("input", "content", "cmdline");
  cmdline.setAttribute("onkeypress", "handleKeyPress2(event)");
  }
  if (query == "cloak") {
      closeWindow()
    code = document.documentElement.outerHTML;
	   var win = window.open();
	   win.document.write(code);
  }
  if (query == "sysfix") {
    // Get all div elements in the document
    var divs = document.querySelectorAll("div");

    // Loop through each div element and remove it
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      div.parentNode.removeChild(div);
    }

    document.write('<div id="screen"></div>');
    document.write(
      "<style> body { display: flex; align-items: center; justify-content: center; height: 100vh; background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3tHYZPdkovYKeXksUPv9tktWR0gOQxAx6cTB9I3P3Zci4xLkVD9kP90XyL-4KLDlnKk:https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1146708.jpg%26fm%3Djpg&usqp=CAU); background-repeat: no-repeat; background-size: cover; user-select: none; } body { font-family: Arial, sans-serif; } .chat-window { width: 400px; height: 600px; border: 1px solid #ccc; margin: 50px auto; padding: 20px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); } h2 { text-align: center; } #computer-message { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 20px; } #user-input { width: 75%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; } #send-btn { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; } #send-btn:hover { background-color: #3e8e41; } #ifme{ width: 100%; height: 90%; } .window { position: absolute; background-color: #c2c2c2; width: 400px; min-height: 200px; max-height: 200px; border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); resize: both; overflow-y: scroll; overflow-x: scroll; z-index: 1; } textarea{ width: 100%; height: 80%; } .spinner { width: 40px; height: 40px; border-radius: 50%; border: 4px solid #333; border-top-color: #999; animation: spin 1s infinite linear; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .contaner{ overflow: scroll; } .window-title { background-color: #017acd; padding: 8px; color: #fff; cursor: move; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .window-content { padding: 8px; min-height: 150px; } .taskbar { position: fixed; bottom: 0; left: 0; width: 100%; height: 40px; background-color: #1c1c1c; color: white; display: flex; align-items: center; justify-content: flex-start; padding-left: 10px; } .start-button { width: 40px; height: 40px; background-color: #1c1c1c; color: white; border: none; outline: none; cursor: pointer; display: flex; align-items: center; justify-content: center; } .start-button:hover { background-color: #555; } .start-button img { width: 20px; height: 20px; } .start-menu { position: absolute; top: 40px; left: 0; width: 200px; background-color: #1c1c1c; color: white; border: 1px solid #555; padding: 10px; display: none; } .start-menu.active { display: block; } #cmd{ color: white; } #cmdline{ color: white; background-color: black; border-color: black; } #iframe{ overflow: auto; width: 50px; } #clock{ right: 0px; position: fixed; width: 100px; z-index: 9999; } .context-menu { display: none; position: absolute; background-color: #f9f9f9; border: 1px solid #ccc; padding: 5px; } </style>",
    );

    

    boot();

    return;
  }
  if (query == "restart") {
    create("h6", "cmdline1", "cmd", "Restarting...");
    setTimeout(function () {
      const myNode = document.getElementById("body");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      passlock();
    }, 3000);
  }
  try {
    var tried = 0;
    eval(query);
  } catch (error) {
    tried = 1;
    create(
      "h6",
      "cmdline1",
      "cmd",
      "Error while running command: " + error.message,
    );
  }
  if (tried == 0) {
    create("h6", "cmdline1", "cmd", "Command ran successfully");
  }
}

function create(string, dom, id, text, onclick, src, class1) {
  para = document.createElement(string);
  para.innerText = text;
  para.setAttribute("id", id);
  para.setAttribute("onclick", onclick);
  para.setAttribute("src", src);
  para.setAttribute("class", class1);

  document.getElementById(dom).appendChild(para);
  para = null;
}

function create_file(name) {
  var drive = localStorage.getItem("drive");
  if (drive && drive.includes(name)) {
  } else {
    localStorage.setItem("drive", drive ? drive + "," + name : name);
  }
}

function filemanager() {
  try {
    drive = localStorage.getItem("drive");
    drive_files = drive.split(",");
  } catch (error) {}
  return drive_files;
}

function create_file1(name, value) {
  var drive = localStorage.getItem("drive1");
  if (drive && drive.includes(name)) {
  } else {
    localStorage.setItem("drive1", drive ? drive + "," + name : name);
    localStorage.setItem(name, value);
  }
}

function write_file1(name, value) {
  var drive = localStorage.getItem("drive1");
  localStorage.removeItem(name);
  alpha = filemanager();
  function removeStringFromArray(arr, stringToRemove) {
    return arr.filter((item) => item !== stringToRemove);
  }

  // Example usage:

  modifiedArray = removeStringFromArray(alpha, name);
  localStorage.setItem("drive1", modifiedArray);

  localStorage.setItem("drive1", drive ? drive + "," + name : name);
  localStorage.setItem(name, value);
}

function directorymgr() {
  try {
    const drive = localStorage.getItem("drive");
    const drive_files = drive.split(",");
    return drive_files;
  } catch (error) {
    console.log(error);
    // Handle error here or use a specific error handler
    setTimeout(() => firstRunFunction(), 3000);
  }
}

function filemgr() {
  create_window("Variable Explorer", true);
  drive_files = directorymgr();
  for (item in drive_files) {
    create("h3", "content", "", drive_files[item]);
    create("br", "content");
  }
}

function handle_error(error) {
  try {
    closeWindow();
  } finally {
    create_window("Error", true);
    create(
      "h4",
      "content",
      "",
      "Error:" + error + " Attemping automatic fix in 3 seconds",
    );

    setTimeout(function () {
      closeWindow();
      create_window("Attempting a system reset.");
      localStorage.clear();
      closeWindow;
      create_window("System mem wiped, restarting in 3 seconds");
      setTimeout(function () {
        closeWindow();
        firstRunFunction();
      }, 3000);
    });
  }
}

function notification(name,msg){
    box = document.createElement("div")
    box.innerHTML=(`
    <div class="notification">
    <h5> Notification from: ${name} </h5>
    <hr>
    <h6> ${msg} </h6>
    </div>
    `)
    notbox=(document.getElementById("notbox"))
    notbox.appendChild(box)
    $(".pushnoti").toggle()
    document.getElementById("name").innerHTML=(name)
    document.getElementById("info").innerHTML=(msg)
    setTimeout(function(){
        $(".pushnoti").toggle()
    },3000)
}



function create_window(name, exitpar) {

  num=(Math.random() * 200)


  const windowElem = document.createElement("div");
  windowElem.className = "window";
  windowElem.id = ("window-main");

  windowElem.setAttribute("data-num", num);

  const titleBar = document.createElement("div");
titleBar.className = "window-title";

if (experiment == 0) {
  titleBar.style.backgroundColor = "#017acd";
}
if (experiment == 1){
    titleBar.style.backgroundColor = "#bfbbb4";
}

titleBar.textContent = name;


  const content = document.createElement("div");
  content.className = "window-content";
  content.textContent = "";
  content.id = "content";

  windowElem.appendChild(titleBar);
  windowElem.appendChild(content);
  document.body.appendChild(windowElem);

  if (exitpar == true) {
      on=0



// Create a button element
var button = document.createElement('img');
button.src=fullscreen
button.id="fullscreen"
// Add an event listener to the button
button.addEventListener('click', function() {
  
  if (on == 1){
      on=0
      button.src=fullscreen
      windowElem.style.width = '40%';
  windowElem.style.height = '20%';
  }
  else{
      on=1
      button.src=minimize
      windowElem.style.width = '100%';
      windowElem.style.height = '100%';
  }
  // Set the width and height of the body element to 100%
  
});

// Add the button to the page
titleBar.appendChild(button);

    const exitButton = document.createElement("div");
    exitButton.className = "exit-button";
    exitButton.textContent = "X";
    exitButton.style.position = "absolute";
    exitButton.style.top = "5px";
    exitButton.style.right = "5px";

    titleBar.appendChild(exitButton);

    exitButton.addEventListener("click", () => {
      windowElem.remove();
    });
    return num
  }

  function reset1() {
    localStorage.setItem("drive1", "");
  }
  // Make the window draggable
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  titleBar.addEventListener("mousedown", (event) => {
    isDragging = true;
    dragOffsetX = event.clientX - windowElem.offsetLeft;
    dragOffsetY = event.clientY - windowElem.offsetTop;
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const left = event.clientX - dragOffsetX;
      const top = event.clientY - dragOffsetY;
      windowElem.style.left = `${left}px`;
      windowElem.style.top = `${top}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Make the window resizable
  const resizer = document.createElement("div");
  resizer.className = "resizer";
  windowElem.appendChild(resizer);

  resizer.addEventListener("mousedown", (event) => {
    event.stopPropagation();

    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = parseInt(
      window.getComputedStyle(windowElem).getPropertyValue("width"),
    );
    const startHeight = parseInt(
      window.getComputedStyle(windowElem).getPropertyValue("height"),
    );

    function resizeWindow(event) {
      const width = startWidth + event.clientX - startX;
      const height = startHeight + event.clientY - startY;
      windowElem.style.width = `${width}px`;
      windowElem.style.height = `${height}px`;
    }

    function stopResize() {
      document.removeEventListener("mousemove", resizeWindow);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", resizeWindow);
    document.addEventListener("mouseup", stopResize);
  });
}

function closeWindow() {
try{
  temp = document.getElementById("window-main");
  temp.remove();
  temp = null;
}
catch{

}
}

function reset() {
  user = directorymgr().filter((item) => item.startsWith("user/"));
  pass = directorymgr().filter((item) => item.startsWith("pass/"));
  localStorage.setItem("drive", "");
  localStorage.setItem("drive", user + ",");
  localStorage.setItem("drive", pass + ",");
  localStorage.setItem("C:/", pass + ",");
}

function startup() {
  num=create_window("Startup");
  create("center", "content", "center", "");
  create("h2", "center", "", "Loading assets");

  var fontList = ["Noto+Sans", "Lexend"];

  for (var i = 0; i < fontList.length; i++) {
    var fontName = fontList[i];

    var linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "https://fonts.googleapis.com/css?family=" + fontName;

    document.head.appendChild(linkElement);

    var styleElement = document.createElement("style");
    styleElement.innerHTML =
      ".myText { font-family: '" + fontName + "', sans-serif; }";

    document.head.appendChild(styleElement);
  }

  bodyElement = document.querySelector("body");

  // Apply the font to the <body> element
  bodyElement.style.fontFamily = "Noto Sans";
  closeWindow();

  if (!directorymgr().includes("C:/")) {
    firsttime();
  }

  if ("c:/" in directorymgr()) {
    passlock();
  } else {
    passlock();
  }
}

function quickfile() {
  num=create_window("Quick File", true);
  create("input", "content", "name");
  create("h3", "content", "", "Only TXT supported currently");
  create(
    "button",
    ("content["+num+"]"),
    "",
    "Make file",
    "create_file1(document.getElementById('name').value, '')",
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var contextMenu = document.createElement("div");
  contextMenu.className = "context-menu";
  contextMenu.innerHTML = `
        <ul>
          <li><a  onclick="quickfile()">Create new file</a></li>
          <li><a>Context menu V2</a></li>
        </ul>
      `;

  document.body.appendChild(contextMenu);

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
  });

  document.addEventListener("click", function (event) {
    contextMenu.style.display = "none";
  });

  document.addEventListener("mousemove", function (event) {
    var isInsideContextMenu = isDescendantOf(event.target, contextMenu);
    if (!isInsideContextMenu) {
      contextMenu.style.display = "none";
    }
  });

  function isDescendantOf(element, ancestor) {
    while (element !== null) {
      if (element === ancestor) {
        return true;
      }
      element = element.parentNode;
    }
    return false;
  }
});

// System files end here

// System files but not essentials

function firsttime() {
  rantime=1
  num=create_window("Welcome to Windows Infinite");
  create("h2", ("content"), "", "Give a product key!");
  create("input", ("content"), "productkey");
  create("button", ("content"), "", "Submit", "part2()");
  create("center", ("content"), "center", "");
}

function part2() {
  key = document.getElementById("productkey").value;
  if (productcheck(key) == true) {
    
    create("h2", ("center"), "", "Make a account");
    create("br", ("center"));
    create("input", ("center"), "input-signup");
    inputBox = document.getElementById("input-signup");
    inputBox.placeholder = "Enter Account Name";
    create("input", ("center"), "input-signup1");
    inputBox = document.getElementById("input-signup1");
    inputBox.placeholder = "Enter Account Password";
    create("br", ("center"));
    create("center", ("center"), "center2", "");
    passwordInput = document.getElementById("input-signup1");
    passwordInput.type = "password";
    create("button", "center2", "submit-button", "Submit", "finalize1331()");
  } else {
    alert("Incorrect");
  }
}

function finalize1331() {
  create_file("C:/");
  create_file("Users");
  create_file("user/" + document.getElementById("input-signup").value);
  create_file("pass/" + document.getElementById("input-signup1").value);
  closeWindow();
  passlock();
}

function passlock() {
  create_window("Sign in");
  create("center", ("content"), "center", "");

  const filteredList = directorymgr().filter((item) =>
    item.startsWith("user/"),
  );

  create("h3", "center", "", filteredList);
  create("br", ("content"));
  create("center", ("content"), "center", "");
  create("input", "center", "passcheck");
  inputBox = document.getElementById("passcheck");
  inputBox.placeholder = "Enter Account Password";
  inputBox.type = "password";
  create("br", "content");
  create("center", ("content"), "center1", "");
  create("button", "center", "", "Check Password", "keycheck()");
}

function settings2() {
  create_window("Settings", true);
  // Get a reference to the div element
  create("h2", "content", "", "hi");
}

function submitimg12() {
  document.body.style.backgroundImage =
    'url("' + document.getElementById("textbox11").value + '")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  localStorage.setItem("bg", document.getElementById("textbox11").value);
}

function submitimg2(str) {
  document.body.style.backgroundImage =
    'url("' + str + '")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  localStorage.setItem("bg", str);
}

function customize() {
  create_window("Customize Windows", true);
  create("h2", "content", "", "Customize windows!");
  create("h3", "content", "", "Background IMG");
  create("input", "content", "textbox11");
  create("button", "content", "", "Submit image", "submitimg12()");
  create("div","content","main","")
  

  list=[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTash7hL_FwLGFqvXeBfCWSyT2H8VJfp29L_hRd5Oj1rJDdHQ1CvP3Q-J3i06suNa3okUA:https://i.guim.co.uk/img/media/49980bcd5e29b77611804f3ddd5919816ef9bf36/0_0_2748_3839/master/2748.jpg%3Fwidth%3D445%26dpr%3D1%26s%3Dnone&usqp=CAU",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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"
  ]
  for (item in list){
      create("img","main","img","","submitimg2('" + list[item] +"')",list[item],"item1")
  }
}

function appmgr(str) {
  closeWindow();
  eval(str);
}

function keycheck() {
  //const filteredList = directorymgr().filter(item => item.startsWith('pass/'))

  pass = document.getElementById(passcheck);
  filteredList = pass;
  if ("pass/" + pass == filteredList) {
    closeWindow();
  }
  //console.log(filteredList, (document.getElementById("passcheck")))
  closeWindow();
  main();
  if (localStorage.getItem("bg") == null) {
    return;
  } else {
    document.body.style.backgroundImage =
      'url("' + localStorage.getItem("bg") + '")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  }
}

function main() {
  filemain = filemanager();
  if (filemain == null || filemain == undefined) {
  } else {
    for (item in filemain) {
      //console.log(file[item])
      create(
        "img",
        "screen",
        "file",
        "",
        "notepad('" + filemain[item] + "')",
        txtfile,
        "start-button",
      );
    }
  }

  // Sample data for windows icons
  var windowsIcon = windowsicon;

  // Create taskbar
  var taskbar = document.createElement("div");
  taskbar.className = "taskbar";

  // Create start button
  var startButton = document.createElement("button");
  startButton.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = windowsIcon;
  startButton.appendChild(startIcon);


  var startButton1 = document.createElement("button");
  startButton1.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = file;
  startIcon.setAttribute
  startButton1.appendChild(startIcon);
  startButton1.setAttribute("onclick", "filemgr()");

  var startButton2 = document.createElement("button");
  startButton2.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = cmd;
  startButton2.appendChild(startIcon);
  startButton2.setAttribute("onclick", "cmd1()");

  var startButton3 = document.createElement("button");
  startButton3.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = taskicon;
  startButton3.appendChild(startIcon);
  startButton3.setAttribute("onclick", "taskmgr()");

  var startButton4 = document.createElement("button");
  startButton4.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = paint;
  startButton4.appendChild(startIcon);
  startButton4.setAttribute("onclick", "customize()");

  var startButton5 = document.createElement("button");
  startButton5.className = "start-button";
  var startIcon = document.createElement("img");
  startButton5.appendChild(startIcon);
  startButton5.setAttribute("onclick","opennotifications()")
  startButton5.setAttribute("id", "clock");

  var startButton6 = document.createElement("button");
  startButton6.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = chrome;
  startButton6.appendChild(startIcon);
  startButton6.setAttribute("onclick", "openchrome()");

  // Create start menu
  var startMenu = document.createElement("div");
  startMenu.className = "start-menu";
  startMenu.style.display = "none"; // Hide the start menu initially

  // Add initial content to the start menu
  var startMenuContent = document.createElement("p");
  startMenuContent.textContent = "This is a blank start menu.";
  startMenu.appendChild(startMenuContent);

  // Add elements to the taskbar
  taskbar.appendChild(startButton);
  //taskbar.appendChild(seperator);
  taskbar.appendChild(startButton1);
  taskbar.appendChild(startButton2);
  taskbar.appendChild(startButton3);
  taskbar.appendChild(startButton4);
  taskbar.appendChild(startButton5);
  taskbar.appendChild(startButton6);
  taskbar.appendChild(startMenu);
  if (rantime == 1){
  notification("System","Welcome to windows infinite! If you see a problem then restart the OS")
  document.body.style.backgroundImage =
    'url("' + windows_default + '")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  localStorage.setItem("bg", windows_default);
  }
  //create_window("Welcome to Windows Infinite!",true)

  // Add taskbar to the document body
  document.body.appendChild(taskbar);
  on = 0;
  // Toggle start menu
  startButton.onclick = function () {
    if (on == 1) {
      closeWindow();
      on = 0;
    } else {
      start1();
    }
  };
  



  function start1() {
    on = 1;
    create_window("Start");
    create("center", "content", "center", "");
    create("h2", "center", "", "Applications");
    create("br", "content");
    create(
      "img",
      "content",
      "",
      "",
      "closeWindow();cmd1()",
      cmd,
      "start-button",
    );
    create(
      "img",
      "content",
      "",
      "",
      "closeWindow();internetexplorer()",
      ie,
      "start-button",
    );
    create("img", "content", "", "", "settings1()", settings, "start-button");
    closeWindow();
  }

  // Handle click outside of the start menu to close it
  window.onclick = function (event) {
    if (
      !startButton.contains(event.target) &&
      !startMenu.contains(event.target)
    ) {
      startMenu.style.display = "none";
    }
  };
}

// Applicaions

function internetexplorer() {
  create_window("Internet Explorer");

  create("center", "content", "center", "");
  create("input", "center", "input_box");
  create("iframe", "center", "iframe");
}



function notepad(str) {
  name1 = str;
  create_window("Notepad || " + str, true);
  create(
    "button",
    "content",
    "",
    "Save",
    "write_file1(name, (document.getElementById('textbox').value))",
  );
  create("textarea", "content", "textbox");
  doc = document.getElementById("textbox");
  doc.value = localStorage.getItem(name);
}

// Images
windows_default=
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5A6soUCh8in82W-xdRBRfspVTs-ZFnYAltcSZVgQdZj4_C4U53VaNa9wzryRMhm-MdOY:https://i.pinimg.com/originals/82/2d/76/822d76d0a5e21226769b3b530d2860f3.png&usqp=CAU"
seperator=
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAIVBMVEX///8AAADV1dX19fWmpqYqKirk5ORzc3NHR0d7e3shISF4Kv4/AAAAbklEQVR4nO3U2Q2EMAxAQXshXP0XjOjA+5EoiJkKnmI7EQAAAAAAAAAAAJ+y/Xrb/snZr+zt2ss1y9G95nEsxZ51SE7mWuxpg3pasWdQTuZL32e2/ZntviLO/iNrZ7kmpvufAQAAAAAAAAAA3u8G5FIFvA1LdwQAAAAASUVORK5CYII="
minimize=
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwf7JIqj-IFCe2hmZad8lAUZJ87rGe8tZwIM9V-q2EvAvwFCvXcU2ZgU7Gwo8uSH9gWpA:https://icons.veryicon.com/png/o/object/material_design_icons/window-minimize-3.png&usqp=CAU"
fullscreen=
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAKlBMVEX///8AAADg4OBbW1uDg4Pd3d3r6+t2dnZhYWGfn59UVFR+fn78/PwgICAheNfUAAAAyklEQVR4nO3ayw6CMBBAUQTKo8D//64rTZS0ISloo+esncldWjJNAwAAAHCmNbQZQ2JqyA2FtaAn3HLGxNSYnQoFPW12c5+Y6rNTrR49evT8XM+SmFo+0rNN3as4J6bm+PbLabugZyrYM13Q0xXs6fTo0aNHjx49eg70xII98aSeYewfltS/wSPm5blnTH0VAQAA+Ge1vb9qe5/W/H7Xo0ePHj169PxeT233CbXdb+x9975lr7b7Hz169Oi5rqe2+/Da7ucBAAAA9u6emQ6Bq9OupwAAAABJRU5ErkJggg=="
chrome =
  "data:image/png;base64,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";
lockscreen =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3tHYZPdkovYKeXksUPv9tktWR0gOQxAx6cTB9I3P3Zci4xLkVD9kP90XyL-4KLDlnKk:https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1146708.jpg%26fm%3Djpg&usqp=CAU";
paint =
  "data:image/jpeg;base64,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";
txtfile =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8UNlPd879HkSMW4TOUkwbwTUZtntqXtdQQ:https://img.freepik.com/premium-vector/modern-flat-design-txt-file-icon-web-simple-style_599062-541.jpg%3Fw%3D2000&usqp=CAU";
settings =
  "data:image/jpeg;base64,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";
ie =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88xkI08R7SG57pWpD5I97G1DPP4wiLmEX0w&usqp=CAU";
file =
  "data:image/jpeg;base64,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";
cmd =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUTExP///8AAAAMDAx/f38yMjL4+PjHx8fk5OSGhoawsLCIiIiqqqqvr6+EhISmpqZgYGB5eXmenp5tbW3s7Ozm5ubT09MqKiqQkJAYGBjf399VVVW+vr5lZWU+Pj5EREQsLCyfn5+UlJR+1k8FAAACl0lEQVR4nO3c7XKaUBRGYTkgmKig4AexJine/0UWTSGpOiYz7H02hfX86KRJZ17XnETRTJ1MAAAAAAAAAAAAAAAAAAAAAGDIQnvKhVN7qn0uC2JrQeY0C58De88UUkihOQop/GHh9vDF7Ke2lz8u2g+27QeXj2aXL/11mH2ObD0XFs63wnPhWnPm7nREocyMYeGaQpkZChWnKRSauVPo/LTa3Ze6+S/ntF87mVieoUuCWenhIA3PMDn/9fgaKh+kdWF9KZ6/qR6kYWEZN5/bFYo/kYZXbfVV/675bLx814o0vS517j3btAcZ7VVugffC6J+Z+m6mSNqDVLkJxoXnL7lp3hykxvepfeH5IF31cYgDLawP8bQZbmF9fkXSPGzEg/s5rPN+tz+DwWGu8is+w8LQTXw8IPoqXN4Uhl8fC9cvaldun4VLz4XNdWmwqd40n0ZZF8bJSvlZom3hodyrP0E0LDwevTzJtyv09UKNS+0K7/27W52ne1XoVuXplFfZhyrPT2Xaedp3YfqwsAquxS9dp/tVmN8Ubij8drpXheH+dXWt83SvCs/PNv77+9LHhRrTFArNGBY+USgzQ6HiNIVCMxQqTlMoNEOh4rTvwqehFi56ULigsNMMhYrTFArNGBbOKZSZoVBxmkKhGQoVpykUmmkL5xSKT1MoNDOi61LDVzEo7DYzou9SCuWnKRSaoVBxmkKhmRE9Hg7/upRC+WkKhWZGVDj812kolJ+mUGgm68E9je57X2Y9OENPhcM/QwrlpykUmqFQcZpCoZkRFUbq7+Z5LfJcuEt823kuNEQhhRTao5DCx4WL72+AOtXXacJpGllLp6pvpHLnv6F75+HtYAEAAAAAAAAAAAAAAAAAAAAAAIbsD12pRBbO1WULAAAAAElFTkSuQmCC";
run =
  "data:image/png;base64,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";
windowsicon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8LFsejSKHAUqlLdTJ9wzRqn9GhRqMyhmpw&usqp=CAU";
taskicon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAArlBMVEX///8zMzMmJibm5ua9vb3q6upStSksLCz39/fMzMxsbGy4uLjGxsYhISFTuCnCwsKpqalgYGBZWVkUFBRVvSklHyYzVyc1XScyMDM4SzE0ODMlIyYjFiYkGyZRsSkiEyYtQSYxKTNKnigqNyY/fChImCghCSZMpCkxJTRBgygiDiZFjig7cCcnKyY4ZScsPSYyUScgACaKiopAcC86VTE1QzExSykwHjQoMCYFBQWOsTVWAAAD6UlEQVRoge3aa1PiMBQGYA1QZMW4aiuFtJRyKwIKLi7u/v8/tiflViVJE3Iq42zfD44fGJ7m5M704qJMmTJlytimVmiupO5VpeDUZHLRcKUiaXXhTZY2+n+WCxnXGnKtcfcDP7+05Ic6esh9Q0e+uURP/e62eTa5ens2mdNnkqvNs8lAn0uuNs4mN0v5+8jxxD+PHK9mbVMaRfbfXDcxhHHk+Ik6dGnYaBw5cRx3GHy97Hdcx6H9gHy5HL+A7HQHzIhGkWcUZNryiAmN0s9dh8tPETGhEWS/DcUGPJkSExpBjueuQ4dQcOhoAxpDHlEnWUO5XzxiQCPInS708RT+zNJy69L2Miydjvv4CuO7GxED2l6eQBe7XghzmvaYAW0vx31K+1PWg46eh0Sftpb939DDw5B4iUNHU6JP28stKPOSkYjvV2OiT1vLEy7C0PLgCdy1p0/by7zK0FY22FRdm7aV/fZuZHl8pGXlHNpWjldQ7DWfTQHMLkqYNm0rT2Dp7KYtZWu+onhEl7Zu837VZM98FQ2ILm0p+2u63ynCEaUJI7q0pRzPodiLDRfy3XKQpRnEv/SPgyC/92GH3FaYLaCjXzKje/zM0xEknpjJgod/d7enIJ6A9/mho4PElWYYG8hxp32cFnTzfjyHsFMmz7tye+mJVBIa6Mv+UvIl3UHW2szt3XNQWZtnUV1b5hNX+PT9/RRmBDp6viu3B7UfLR+FWfIP6MrxyqWiZMfUK6zh/e1OyQZ8vEWeMLwuN/fa/fzWEmWdGcwB7FvdP9s5toLSLz5P70z05UufyR5/F+/xMODS4aaATWSYgoov2oTuF1DRWnq6nEu/JrCAptPbE+wfNnIeHeyvGvw/V1VsUzmHZsvdVSPg5wRVsY3lPJovoJHobGQvq+kpPyiM+SiHbl6quvkEWUmHsGvyWRxtT6S4sopOrxorj4QwyPtj+edOlJV0etX4dNfBkxX0lP9mMg4/7FqYspxOrxq9D3daXFlKswWv8zhzj8eW5TSMrVHvcCLFl2V0ulPC3HJ66m62kCW0t9z+RqVcOu1kMc2vGvvf5YqSxXSYHtjUO6S1LKRDvlNmTqTFyCKa9ba/ORcri2g47sIOWbgsoNMjvnqHRJGPabhq0N3Zt1D5mI5mSUu9TyHJglaz3FrjyBrn8KLkk2gc+RQaST6BxpLNaTTZmMaTTWlE2ZDGlM1oVNmIxpVNaGTZgMaW9Wl0WZvWlP9qF5HUbx608ldHrlSqPwtIVUeuNapFJUcukM6TK7Xm18qZd5mLarXknbiLWtH0tfTd8QxdaVyj51b65jjv60Pw3ypWuGXKlCnzzfIPsqDHxSVuFqoAAAAASUVORK5CYII=";

}
catch(e){
    console.log("[ KRNL ] Error: " + e.message)
    console.log("[ KRNL ] Resolving")
    localStorage.clear()
    console.log("[ KRNL ] Resolve complete | If you belive this was because of malicious code, then stop putting random code in the terminal")
    console.log("[ KRNL ] Please rerun code, error should be resolved")
}

let bsodErrorCount = 0; // For snapshot-related errors
let maxBSODErrorCount = 20;
let errorCount = 0;
const maxErrorCount = 5;
const errorHistory = [];
let snapshot_try = 0;
let maxSnapshots = 10; // Maximum number of snapshots to keep
let snapshots = [];

// Initialize the notification system
function notify(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.background = 'rgba(0, 0, 0, 0.7)';
    notification.style.color = '#fff';
    notification.style.position = 'fixed';
    notification.style.bottom = '10px';
    notification.style.right = '10px';
    notification.style.zIndex = '9999';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 5000);
}

function krnl_logEvent(message) {
    console.log("[KRNL] " + message);
    notify("[KRNL] " +message);
}

window.addEventListener("error", function (event) {
    errorCount++;
    const error = event.error;

    errorHistory.push(error);

    if (errorCount >= 5){
        "use strict";
        krnl_logEvent('Unusual amount of errors detected, using strict')
    }
    if (errorCount >= maxErrorCount) {
        snapshot_try++;
        krnl_logEvent(`Snapshot attempt #${snapshot_try}`);

        if (snapshot_try > 5) {
            displayBSOD();
            return;
        }

        if (snapshots.length > 0) {
            const lastSnapshot = snapshots[snapshots.length - 1];
            document.body.outerHTML = lastSnapshot.html;
            krnl_logEvent(`Loaded last snapshot taken at ${lastSnapshot.time}`);
            errorCount = 0;
        } else {
            krnl_logEvent("Cannot find a snapshot to load");
        }
    }

    if (error instanceof ReferenceError) {
        krnl_handleReferenceError(event);
    }
    if (error instanceof SyntaxError) {
        krnl_handleSyntaxError(event);

        // Increment the BSOD error count on syntax errors
        bsodErrorCount++;
    }

    // Reset the BSOD error count if we're not continuously getting snapshot-related errors
    if (errorCount < maxErrorCount) {
        bsodErrorCount = 0;
    }
});

function krnl_handleSyntaxError(event) {
    const error = event.error;
    krnl_logEvent(`Syntax error: ${error.message}`);
    krnl_logEvent("Cannot resolve syntax-related errors.");
}

function krnl_handleReferenceError(event) {
    const error = event.error;
    const variableName = error.message.split(" is not defined")[0];
    krnl_logEvent(`Handling ReferenceError: '${variableName}' is not defined.`);

    const codeToRerun = event.target.outerHTML;

    window[variableName] = undefined;
    krnl_logEvent(`Defined '${variableName}' as undefined.`);

    const codeLines = codeToRerun.split('\n');
    for (let i = 0; i < codeLines.length; i++) {
        try {
            eval(codeLines[i]);
        } catch (rerunError) {
            krnl_logEvent("Error while rerunning the line: " + rerunError);
        }
    }
}

function displayBSOD() {
    document.body.innerHTML = '<div style="height: 100%; width: 100%; background-color: #0078d4; color: #fff; text-align: center; padding: 20px; font-family: Arial, sans-serif;"> [ KRNL ] Snapshot limit reached <br> [ KRNL ] Failure threshold reached </div>';
    localStorage.clear()
}

function takeSnapshot() {
    const snapshotTime = new Date();
    const snapshotData = {
        time: snapshotTime,
        html: document.body.outerHTML
    };

    // Remove old snapshots if we exceed the maximum
    if (snapshots.length >= maxSnapshots) {
        snapshots.shift(); // Remove the oldest snapshot
    }

    snapshots.push(snapshotData);
    krnl_logEvent(`Snapshot taken at ${snapshotTime}`);
}

function loadSnapshot(snapshotIndex) {
    if (snapshotIndex >= 0 && snapshotIndex < snapshots.length) {
        const snapshotData = snapshots[snapshotIndex];
        document.body.outerHTML = snapshotData.html;
        krnl_logEvent(`Loaded snapshot taken at ${snapshotData.time}`);
    } else {
        krnl_logEvent("Invalid snapshot index");
    }
}

function clearSnapshots() {
    snapshots.length = 0;
    krnl_logEvent("Snapshots cleared");
}

function clearErrorHistory() {
    errorHistory.length = 0;
    krnl_logEvent("Error history cleared");
}

krnl_logEvent("Snapshot subsystem initialized");
setTimeout(function(){
takeSnapshot()
},6000)
