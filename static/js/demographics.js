// Toggles whether we can actually view the houses based on whether someone is a freshman
function toggleHouseVisibility() {
    var slctYear = document.getElementById("slctYear");
    var divHouse = document.getElementById("divHouse");
    var slctHouse = document.getElementById("slctHouse");
    if (slctYear.selectedIndex == slctYear.length - 2){
        divHouse.style.display = "none";   
        slctHouse.removeAttribute("required");
    }
    else {
        divHouse.style.display = "block";
        slctHouse.setAttribute("required", "required")
    }
}