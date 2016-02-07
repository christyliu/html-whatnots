

$(function() {
    var $elie = $("https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1465310_645117278879888_477932373_n.jpg?oh=90a16b124d5010b284ed37b41353a269&oe=55C8D5D0"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
    
    $("input").toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });
}); 