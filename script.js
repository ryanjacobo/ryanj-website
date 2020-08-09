$(document).ready(function() {
    $(".socialMediaLinks").hover(function() {
        $(this).css("width", "120px")},
        function() {
            $(this).css("width", "90px")
        });
});

let gitHubRequest1 = new XMLHttpRequest();
gitHubRequest1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("gitRepo1").innerHTML = gitObject.html_url;
        
    }  
}
gitHubRequest1.open("GET", "https://api.github.com/repos/ryanjacobo/git-example", true);
gitHubRequest1.send();

let gitHubRequest2 = new XMLHttpRequest();
gitHubRequest2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("gitRepo2").innerHTML = gitObject.html_url;
        
    }  
}
gitHubRequest2.open("GET", "https://api.github.com/repos/ryanjacobo/Git-Practice-Hands-On", true);
gitHubRequest2.send();

let gitHubRequest3 = new XMLHttpRequest();
gitHubRequest3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("gitRepo3").innerHTML = gitObject.html_url;
        
    }  
}
gitHubRequest3.open("GET", "https://api.github.com/repos/ryanjacobo/origin", true);
gitHubRequest3.send();


