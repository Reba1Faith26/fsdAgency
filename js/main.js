function menuBtn(){
    $(document).ready(function(){
        $('.fa-bars').click(function(){
            $('.phone-navigation-list').slideToggle();
        });
    });
}
function smDevicesButton(){
    $(document).ready(function(){
        $(".phone-li").click(function(){
            $(".phone-navigation-list").hide(300);
        })
    })
}
function aboutButton(){
    $(document).ready(function(){
        $('#com-about-button').click(function(){
            alert("testing this button");
        });
    })
}
menuBtn();
smDevicesButton();
aboutButton();