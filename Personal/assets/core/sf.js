$(document).ready(function () {
    $("#sf-calc").click(function () {
        console.log("I am clicked");

        var w = $("#sf-w").val() * 1;
        var h = $("#sf-h").val() * 1;
        var n = $("#sf-n").val() * 1;
        var wa = $("#sf-wa").val() * 1;

        var logwan = Math.log10(wa - n);
        var logh = Math.log10(h);

        var navyBF = 495 / (1.0324 - 0.19077 * logwan + 0.15456 * logh) - 450;
        var armyBF = (76.5 * logwan) - (68.7 * logh) + 46.9;

        navyBF = (navyBF + armyBF) / 2;
        $("#sf-result-bf").html("Your Body fat estimate is from <strong>" + navyBF.toFixed(1) + "</strong> % To <strong>" + armyBF.toFixed(1) +
            "% . </strong>");

        $("#sf-result-lbm").html("Your LBM is From <strong>" + (w - (navyBF / 100 * w)).toFixed(1) + "</strong> To <strong>" + (w - (armyBF / 100 * w)).toFixed(1) + "</strong>");



    });


});
