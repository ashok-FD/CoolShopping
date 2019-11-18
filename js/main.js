//login overlay
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
   $("#newOne2").click();
}
function openNav2() {
  document.getElementById("mySidenav").style.width = "100%";
  $("#newOne").click();
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//search overlay
function openSearch() {
  document.getElementById("search").style.display = "block";
}

function closeSearch() {
  document.getElementById("search").style.display = "none";
}

//similar product link
document.getElementById('similarLink').addEventListener('click',function(){
  $("#similarProduct").toggle(2000);
});

//Esc keyUp function
document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) window.location.reload();
});

//back to top function
document.getElementById("backToTop").addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
function form(){
  $("#new_address").hide();
  $("#formCard").show(1000);
}
function showInput() {
  $("#formCard").hide();
  document.getElementById("name1").innerHTML = document.getElementById(
    "name"
  ).value;
  document.getElementById("phone1").innerHTML = document.getElementById(
    "phone"
  ).value;
  document.getElementById("line1").innerHTML = document.getElementById(
    "ad1"
  ).value;
  document.getElementById("line2").innerHTML = document.getElementById(
    "ad2"
  ).value;
  document.getElementById("city1").innerHTML = document.getElementById(
    "city"
  ).value;
   document.getElementById("state1").innerHTML = document.getElementById(
     "state"
   ).value;
  document.getElementById("pincode1").innerHTML = document.getElementById(
    "pincode"
  ).value;
  $("#ValueCard").show(1000);
}
