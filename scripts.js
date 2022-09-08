function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "white";
        tablinks[i].style.fontWeight = 'normal'
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = 'rgb(182, 182, 182)';
    // elmnt.style.backgroundColor = color;
    elmnt.style.color = "#cc1400"
    elmnt.style.fontWeight = 'bold'
}