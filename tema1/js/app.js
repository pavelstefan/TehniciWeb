/*Menu toggle*/
window.addEventListener("load", function(){
    document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
    document.getElementById("menu-bg").addEventListener("click", function(){
        if(menuVsible)
            toggleMenu();
    });
    document.getElementById("dropdown-content").addEventListener("click", toggleMenu);
    if(window.innerWidth <= 1000)
        menu.style.zIndex = "-100"; 
})

window.addEventListener("resize", function(){
    if(menuVsible && window.innerHeight <= 1000)
        toggleMenu();
    if(!menuVsible && window.innerWidth > 1000)
        toggleMenu();
    
})

var menuVsible = false;

function toggleMenu(){
    var bg = document.getElementById("menu-bg");
    var menu = document.getElementById("menu");
    menuVsible = !menuVsible;
    menu.style.zIndex = "100";
    
    var timeline = new Timeline(1, 60);
    var timeline2 = new Timeline(1, 60);
    var frame1 = new KeyFrame("menu");
    var frame2 = new KeyFrame("menu-bg");
    
    var on1 = new KeyFrame("menu");
    var on2 = new KeyFrame("menu-bg");
    on1.addKey("opacity", "1");
    on2.addKey("opacity", "0.5");
    
    
    var off1 = new KeyFrame("menu-bg");
    var off2 = new KeyFrame("menu-bg");
    off1.addKey("opacity", "0");
    off2.addKey("opacity", "0");
    
    frame1.setTime(0, 30);
    frame2.setTime(0, 30);
    
    if(menuVsible){
        off1.render();
        off2.render();
        frame1.addKey("opacity", "1");
        frame2.addKey("opacity", "0.5");
    }else{
        on1.render();
        on2.render();
        frame1.addKey("opacity", "0");
        frame2.addKey("opacity", "0");
    }
    
    timeline.addKeyframe(frame1);
    timeline2.addKeyframe(frame2);
    timeline.renderAnimation(function(){
        if(menu.style.opacity == 0)
            menu.style.zIndex = "-100";
    });
    timeline2.renderAnimation();
    
}