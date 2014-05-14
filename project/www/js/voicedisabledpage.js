var voicedisabledDetails_vm;
var detailedopen_vo = "false";
var job_applied_vo = "false";
$(document).on("pagehide", "#voicedisabledpage", function (event) {
    if (detailedopen_vo == "true") {
        $("#page4_hidebutton").fadeOut();
        $("#page4_details").fadeOut("slow", function () {
            $("#page4_selectajob").fadeIn();
            $('#page4_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_vo = "false";
                    if (job_applied_vo == "true") {
                        $("#page4apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_vo = "false";
                    }
                }
            });
        });
    }
});
$(document).on("pageshow", "#voicedisabledpage", function (event) {

    $("#page4apply_button").on('click', function () {
        $("#page4apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply_click.png')");
        job_applied_vo = "true";
    });
    $("#page4_hidebutton").on('click', function () {

        $("#page4_hidebutton").fadeOut();
        $("#page4_details").fadeOut("slow", function () {
            $("#page4_selectajob").fadeIn();
            $('#page4_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_vo = "false";
                    if (job_applied_vo == "true") {
                        $("#page4apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_vo = "false";
                    }
                }
            });
        });

    });
});
$(document).on("pageinit", "#voicedisabledpage", function (event) {

    function voicedisabledViewModel() {
        var self = this;
        self.voicedisabled = ko.observableArray([
            { category: "Traffic", picture: "img/hearingdisabled/traffic.png", bigpicture: "img/hearingdisabled/detail/traffic.png" },
            { category: "Stitching", picture: "img/hearingdisabled/stitching.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Polish", picture: "img/hearingdisabled/polish.png", bigpicture: "img/hearingdisabled/detail/polishing.png" },
            { category: "Peeling", picture: "img/hearingdisabled/peeling.png", bigpicture: "img/hearingdisabled/detail/peeling.png" },
            { category: "House Keeping", picture: "img/hearingdisabled/housekeeping.png", bigpicture: "img/hearingdisabled/detail/housekeeping.png" },
            { category: "Garnish", picture: "img/hearingdisabled/garnish.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Cooking", picture: "img/hearingdisabled/cooking.png", bigpicture: "img/hearingdisabled/detail/cooking.png" },
            { category: "Book", picture: "img/hearingdisabled/book.png", bigpicture: "img/hearingdisabled/detail/book.png" }

        ]);

        self.voicedisabledclick = function () {
            var bigpic = this.bigpicture;
            var selecttitle = this.category;

            $('#page4_groupcontents').animate({
                marginLeft: '1154px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {


                    $("#page4_details").fadeIn("slow", function () {
                        // Animation complete
                        $("#page4_hidebutton").fadeIn();
                    });
                    $("#page4detail_title").text(selecttitle);
                    $("#page4detail_image").attr('src', bigpic);
                    $("#page4_selectajob").fadeOut();
                    detailedopen_vo = "true";
                }
            });

        }
    }

    voicedisabledDetails_vm = { viewModel: new voicedisabledViewModel() };
    //Main Execution
    function initialize() {

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#page4_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(voicedisabledDetails_vm.viewModel, element);

    }
    initialize();
});