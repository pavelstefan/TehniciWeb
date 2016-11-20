/*set canvas resolution to full screen*/
var setResolution = function(){
    if(canvas){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

var loadAssets = function(){
    var names = ["img/bomb.png"];
    
    for(var i = 0; i < names.length; i++){
        /*create img tag*/
        var img = document.createElement("IMG");
        img.setAttribute("src", names[i]);
        img.setAttribute("width", "200");
        document.body.appendChild(img);
        
        /*add image to assets stack*/
        assets[assets.length] = img;
    }
}