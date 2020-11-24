$(document).ready(function () {
    $("#1rm-calc").click(function () {
        console.log("I am clicked");

        var w = $("#1rm-weight").val() * 1;
        var r = $("#1rm-repetiton").val() * 1;
        var rm1 = w * (1 + 0.025 * r);
        var rm2 = (100 * w) / (101.3 - 2.67123 * r);
        var rm3 = w * (1 + 0.0333 * r);
        var rm4 = w * (36 / (37 - r));
        var perc = $("#1rm-perc").val() * 1;
        var rm = (rm1 + rm2 + rm3 + rm4) / 4;

        console.log("rm =" + rm);
        var resultSet = " " + parseInt(rm) + " You should lift " + parseInt(perc * rm / 100);

        $("#1rm-result").html("Your 1RM Max is <span>" + resultSet.toString() + "</span>");


    });


});
