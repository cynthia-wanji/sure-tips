var ux = {
    clientSegments: function(){
        $(".l-client-add .segment").hide();
        $(".l-client-add .segment.active").show();
    }(),
    clientStep: function(){
        $(".l-content").find(".step").each(function(){
            $(this).click(function(e){
                $(this).addClass("active");
                var segmentID = $(this).attr("href");
                e.preventDefault();
                $(".l-client-add .segment").hide();
                $(segmentID).show();
            })
        });
    }(),
    dropdowns: function(){
        $('select, .dropdown').dropdown({
            on: "hover"
        })
    }(),
    tabs: function(){
        $('.tabular.menu .item').tab();
    }(),
    addRoles: function () {
        $('.add-role').popup({
            popup : $('.add-role-popup'),
            on    : 'click',
            position   : 'bottom center',
            delay: {
                show: 300,
                hide: 800
            }
        });
    }(),
    progress: function () {
        $('.ui.progress').progress();
    }(),
    modal: function(){
        $(".add-user").click(function(){
            $('#add-user').modal({
                closable  : true
            }).modal('show');
        });
        $('#add-question').click(function () {
            $('#add-question-modal.ui.modal').modal('show');
        });
        $('#view-activity').click(function () {
            $('#view-activity-modal.ui.modal').modal('show');
        })
    }(),
    checkbox: function(){
        $('.ui.checkbox').checkbox();
    }(),
    navReveal: function(){
        $(".m-nav.header").on("click", function(e){
            $(".l-section-1").removeClass("collapse").addClass("expand");
        });
        $(".l-section-1").on("mouseleave", function(){
            $(".l-section-1").removeClass("expand").addClass("collapse");
        })
    }(),
    sectionFullHeader: function(){
        var navigationHeight = $(".l-header").height();
        $(".l-main, .l-navigation").css("top", navigationHeight);
    }(),
    sectionHideNavigation: function () {
        var navLink = $('.l-header-link');
        var navSection = $('.l-navigation');
        var mainSection = $('.l-main');
        var navDisplay = false;
        navLink.click(function(){
            if(navDisplay === false) {
                navSection.hide();
                mainSection.css({width: "100%", left: "0"});
                navDisplay = true;
            } else if (navDisplay === true){
                if (screen.width <= 480){
                    return false;
                } else {
                    navSection.show();
                    navDisplay = false;
                    mainSection.css({width: "85%", left: "15%"});
                }
            }
        })
    }()
};