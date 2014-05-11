var hearingdisabledDetails_vm;
var detailedopen = "false";
var job_applied = "false";
$(document).on("pagehide", "#hearingdisabledpage", function (event) {
    if (detailedopen == "true") {
        $("#page2_hidebutton").fadeOut();
        $("#page2_details").fadeOut("slow", function () {
            $("#page2_selectajob").fadeIn();
            $('#page2_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen = "false";
                    if (job_applied == "true") {
                        $("#apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied = "false";
                    }
                }
            });
        });
    }
});
$(document).on("pageshow", "#hearingdisabledpage", function (event) {

    $("#apply_button").on('click', function () {
        $("#apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply_click.png')");
        job_applied = "true";
    });
    $("#page2_hidebutton").on('click', function () {
        
        $("#page2_hidebutton").fadeOut();
        $("#page2_details").fadeOut("slow", function () {
            $("#page2_selectajob").fadeIn();
            $('#page2_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen = "false";
                    if (job_applied == "true") {
                        $("#apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied = "false";
                    }
                }
            });
        });
        
    });
});
$(document).on("pageinit", "#hearingdisabledpage", function (event) {

    function hearingdisabledViewModel() {
        var self = this;
        self.hearingdisabled = ko.observableArray([
            { category: "Traffic", picture: "img/hearingdisabled/traffic.png", bigpicture: "img/hearingdisabled/detail/traffic.png" },
            { category: "Stitching", picture: "img/hearingdisabled/stitching.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Polish", picture: "img/hearingdisabled/polish.png", bigpicture: "img/hearingdisabled/detail/polishing.png" },
            { category: "Peeling", picture: "img/hearingdisabled/peeling.png", bigpicture: "img/hearingdisabled/detail/peeling.png" },
            { category: "House Keeping", picture: "img/hearingdisabled/housekeeping.png", bigpicture: "img/hearingdisabled/detail/housekeeping.png" },
            { category: "Garnish", picture: "img/hearingdisabled/garnish.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Cooking", picture: "img/hearingdisabled/cooking.png", bigpicture: "img/hearingdisabled/detail/cooking.png" },
            { category: "Book", picture: "img/hearingdisabled/book.png", bigpicture: "img/hearingdisabled/detail/book.png" }

        ]);

        self.hearingdisabledclick = function () {
            var bigpic = this.bigpicture;
            var selecttitle = this.category;
            $('#page2_groupcontents').animate({
                marginLeft: '1154px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    

                    $("#page2_details").fadeIn("slow", function () {
                        // Animation complete
                        $("#page2_hidebutton").fadeIn();
                    });
                    $("#page2detail_title").text(selecttitle);
                    $("#page2detail_image").attr('src', bigpic);
                    $("#page2_selectajob").fadeOut();
                    detailedopen = "true";
                }
            });
            
        }
    }

    hearingdisabledDetails_vm = { viewModel: new hearingdisabledViewModel() };
    //Main Execution
    function initialize() {

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#page2_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(hearingdisabledDetails_vm.viewModel, element);

    }
    initialize();
});