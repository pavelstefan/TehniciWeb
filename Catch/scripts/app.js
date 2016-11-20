/*
    Event system
*/
window.addEventListener("load",function load(event){
    window.removeEventListener("load", load, false);
    Start();
}, false);
window.addEventListener("resize", function(event){
    Resize();
});

/*
    Main functions
*/
var Start = function(event){
    canvas = document.getElementById("game");
    ctx = canvas.getContext('2d');
    
    /*check for errors*/
    if(canvas == null || ctx == null){
        console.error("Canvas is not supported!");
        return;
    }
    
    /*resize canvas*/
    Resize();
    
    /*load assets*/
    loadAssets();
    setInterval(Loop, FPS/1000);
    
}

var Resize = function(event){
    setResolution();
}

var Loop = function(){
    ctx.drawImage(assets[0], 0, 0);
}