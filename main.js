function drawTriangles(){
    var triangles = document.getElementsByClassName("triangle");
    console.log("adjusting "+triangles.length+" triangles");

    var panelWidth = document.getElementById("home-section__panel").offsetWidth;
    console.log("panel width is "+panelWidth);

    for(let i=0; i<triangles.length; i++){

        if (triangles[i].className.includes("topleft") || triangles[i].className.includes("botleft")){
            triangles[i].style.borderRight=(panelWidth+"px solid transparent");
        }

        if (triangles[i].className.includes("topright") || triangles[i].className.includes("botright")){
            triangles[i].style.borderLeft=(panelWidth+"px solid transparent");
        }
    }
}

drawTriangles();

window.addEventListener("resize", drawTriangles);