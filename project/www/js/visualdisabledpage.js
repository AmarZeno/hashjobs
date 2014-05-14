var visualdisabledDetails_vm;
var detailedopen_v = "false";
var job_applied_v = "false";
$(document).on("pagehide", "#visualdisabledpage", function (event) {
    if (detailedopen_v == "true") {
        $("#page3_hidebutton").fadeOut();
        $("#page3_details").fadeOut("slow", function () {
            $("#page3_selectajob").fadeIn();
            $('#page3_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_v = "false";
                    if (job_applied_v == "true") {
                        $("#page3apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_v = "false";
                    }
                }
            });
        });
    }
});
$(document).on("pageshow", "#visualdisabledpage", function (event) {

    $("#page3apply_button").on('click', function () {
        $("#page3apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply_click.png')");
        job_applied_v = "true";
    });
    $("#page3_hidebutton").on('click', function () {

        $("#page3_hidebutton").fadeOut();
        $("#page3_details").fadeOut("slow", function () {
            $("#page3_selectajob").fadeIn();
            $('#page3_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_v = "false";
                    if (job_applied_v == "true") {
                        $("#page3apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_v = "false";
                    }
                }
            });
        });

    });
});
$(document).on("pageinit", "#visualdisabledpage", function (event) {

    function visualdisabledViewModel() {
        var self = this;
        self.visualdisabled = ko.observableArray([
            { category: "Traffic", picture: "img/hearingdisabled/traffic.png", bigpicture: "img/hearingdisabled/detail/traffic.png" },
            { category: "Stitching", picture: "img/hearingdisabled/stitching.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Polish", picture: "img/hearingdisabled/polish.png", bigpicture: "img/hearingdisabled/detail/polishing.png" },
            { category: "Peeling", picture: "img/hearingdisabled/peeling.png", bigpicture: "img/hearingdisabled/detail/peeling.png" },
            { category: "House Keeping", picture: "img/hearingdisabled/housekeeping.png", bigpicture: "img/hearingdisabled/detail/housekeeping.png" },
            { category: "Garnish", picture: "img/hearingdisabled/garnish.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Cooking", picture: "img/hearingdisabled/cooking.png", bigpicture: "img/hearingdisabled/detail/cooking.png" },
            { category: "Book", picture: "img/hearingdisabled/book.png", bigpicture: "img/hearingdisabled/detail/book.png" }

        ]);

        self.visualdisabledclick = function () {
            var bigpic = this.bigpicture;
            var selecttitle = this.category;
            $('#page3_groupcontents').animate({
                marginLeft: '1154px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {


                    $("#page3_details").fadeIn("slow", function () {
                        // Animation complete
                        $("#page3_hidebutton").fadeIn();
                    });
                    $("#page3detail_title").text(selecttitle);
                    $("#page3detail_image").attr('src', bigpic);
                    $("#page3_selectajob").fadeOut();
                    detailedopen_v = "true";
                }
            });

        }
    }

    visualdisabledDetails_vm = { viewModel: new visualdisabledViewModel() };
    //Main Execution
    function initialize() {

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#page3_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(visualdisabledDetails_vm.viewModel, element);

    }
    initialize();
});