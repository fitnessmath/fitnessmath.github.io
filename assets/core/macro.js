$(document).ready(function () {

    $("#macro-calc").click(function () {
        console.log("I am clicked");

        var c = $("#macro-c").val() * 1;
        var p = $("#macro-p").val() * 1;
        var f = $("#macro-f").val() * 1;
        var cal = $("#macro-cal").val() * 1;

        var resultSet;

        if ((c + p + f) > 100 || (c + p + f) < 100) {
            console.log("entered if = " + (c + p + f));
            resultSet = "Please Make sure your macros sum = 100%";
            $("#macro-result-c").text("" + resultSet);
        } else {

            $("#macro-result-c").text("Carbs = " + (c / 100 * cal / 4).toFixed(0) + " Gram ");
            $("#macro-result-p").text("Protien = " + (p / 100 * cal / 4).toFixed(0) + " Gram ");
            $("#macro-result-f").text("Fats = " + (f / 100 * cal / 9).toFixed(0) + " Gram ");


        }




    });


});
