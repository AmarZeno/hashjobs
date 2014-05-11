var disabledDetails_pwd;
var detailedopen_pwd = "false";
var job_applied_pwd = "false";
$(document).on("pagehide", "#pwdpage", function (event) {
    if (detailedopen_pwd == "true") {
        $("#page5_hidebutton").fadeOut();
        $("#page5_details").fadeOut("slow", function () {
            $("#page5_selectajob").fadeIn();
            $('#page5_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_pwd = "false";
                    if (job_applied_pwd == "true") {
                        $("#page5apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_pwd = "false";
                    }
                }
            });
        });
    }
});
$(document).on("pageshow", "#pwdpage", function (event) {

    $("#page5apply_button").on('click', function () {
        $("#page5apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply_click.png')");
        job_applied_pwd = "true";
    });
    $("#page5_hidebutton").on('click', function () {

        $("#page5_hidebutton").fadeOut();
        $("#page5_details").fadeOut("slow", function () {
            $("#page5_selectajob").fadeIn();
            $('#page5_groupcontents').animate({
                marginLeft: '37px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {
                    detailedopen_pwd = "false";
                    if (job_applied_pwd == "true") {
                        $("#page5apply_button").css("background-image", "url('/www/img/hearingdisabled/detail/apply.png')");
                        job_applied_pwd = "false";
                    }
                }
            });
        });

    });
});
$(document).on("pageinit", "#pwdpage", function (event) {

    function pwddisabledViewModel() {
        var self = this;
        self.pwddisabled = ko.observableArray([
            { category: "Traffic", picture: "img/hearingdisabled/traffic.png", bigpicture: "img/hearingdisabled/detail/traffic.png" },
            { category: "Stitching", picture: "img/hearingdisabled/stitching.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Polish", picture: "img/hearingdisabled/polish.png", bigpicture: "img/hearingdisabled/detail/polishing.png" },
            { category: "Peeling", picture: "img/hearingdisabled/peeling.png", bigpicture: "img/hearingdisabled/detail/peeling.png" },
            { category: "House Keeping", picture: "img/hearingdisabled/housekeeping.png", bigpicture: "img/hearingdisabled/detail/housekeeping.png" },
            { category: "Garnish", picture: "img/hearingdisabled/garnish.png", bigpicture: "img/hearingdisabled/detail/job_info.png" },
            { category: "Cooking", picture: "img/hearingdisabled/cooking.png", bigpicture: "img/hearingdisabled/detail/cooking.png" },
            { category: "Book", picture: "img/hearingdisabled/book.png", bigpicture: "img/hearingdisabled/detail/book.png" }

        ]);

        self.pwddisabledclick = function () {
            var bigpic = this.bigpicture;
            var selecttitle = this.category;

            $('#page5_groupcontents').animate({
                marginLeft: '1154px'
            }, {
                duration: 800,
                specialEasing: {
                    marginTop: 'easeOutBounce'
                },
                complete: function () {


                    $("#page5_details").fadeIn("slow", function () {
                        // Animation complete
                        $("#page5_hidebutton").fadeIn();
                    });
                    $("#page5detail_title").text(selecttitle);
                    $("#page5detail_image").attr('src', bigpic);
                    $("#page5_selectajob").fadeOut();
                    detailedopen_pwd = "true";
                }
            });

        }
    }

    disabledDetails_pwd = { viewModel: new pwddisabledViewModel() };
    //Main Execution
    function initialize() {

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#page5_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(disabledDetails_pwd.viewModel, element);

    }
    initialize();
});