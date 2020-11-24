$(document).ready(function () {

    $("#tdee-calc").click(function () {
        console.log("I am clicked");

        var w = $("#tdee-w").val() * 1;
        var age = $("#tdee-age").val() * 1;
        var h = $("#tdee-h").val() * 1;
        var steps = $("#tdee-steps").val() * 1;

        var rmr = (66 + (13.7 * w) + (5 * h) - (6.8 * age));
        var stepscalc = ((0.57 * w * 2.2) / 2200) * steps;
        var tdee = rmr + stepscalc;

        console.log("tdee =" + tdee);

        $("#tdee-result").text("Your TDEE Should Be " + tdee.toFixed(2));


    });


});
