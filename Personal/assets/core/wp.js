$(document).ready(function () {
    $("#wp-calc").click(function () {
        console.log("I am clicked");

        var sw = $("#wp-sw").val() * 1;
        var intake = $("#wp-intake").val() * 1;
        var tdee = $("#wp-tdee").val() * 1;
        var days = $("#wp-days").val() * 1;


        console.log("sw =" + sw + " " + "intake=" + intake + " " + " " + "tdee=" + tdee + " " + "days=" + days);


        var wp = sw - (((tdee - intake) * days) / 7700);

        console.log("wp =" + wp);
        $("#wp-result").text("Your Weight Should Be " + wp.toFixed(2));


    });


});
