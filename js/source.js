//  // Add active class to the current button (highlight it)
 var header = document.getElementById("myDIV");
 var btns = header.getElementsByClassName("btn");
 var listNode = document.getElementById("list");
var pitchNode = document.getElementById("pitch");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
   pitchNode.classList.toggle("show");
   listNode.classList.toggle("hide");
   });
 }

 
    