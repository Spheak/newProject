

var t=0;
$(document).ready(function () {
    //pop up form
    

    // Read More button 
    $("#more-content").hide();
    $("#readmore").click(function () { 
        $("#more-content").toggle();
        if(t==0) {
            $("#readmore").text("Show less");
            t=1;
        }
        else{
            $("#readmore").text("Read More");
            t=0;
        }
    });




    
});

$(document).ready(function () {
    $("form > i").click(function () { 
        $("form").hide();
        
    });
});

$(document).ready(function () {
    $("#light").click(function () { 
        $("body").css({background: 'white !important'});
        
    });
});




