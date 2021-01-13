$(document).ready(function () {
    var cenaLetenky;
    var pocetLetenek;
    var cenaLetenkyPocet;
    var zpatecniLetenka;
    var doprava2;
    var doprava3;
    var celkemPorovnani;
    var celkem;
    $("#letenky").change(function () {
             cenaLetenky = parseInt(this.value);   
        
    });
    $("#pocetLetenek").change(function () {
        pocetLetenek = parseInt(this.value);
        cenaLetenkyPocet = cenaLetenky * pocetLetenek;
      
    });
    $("#zpatecniLetenka").click(function () {
        if (this.checked)
            zpatecniLetenka = cenaLetenkyPocet * 2;

        else
            zpatecniLetenka = cenaLetenkyPocet;

       
    });
    $("#dop1").click(function () {
        celkem = zpatecniLetenka;
        $("#celkem").val(celkem);

    });
    $("#dop2").click(function () {
        doprava2 = (zpatecniLetenka) * 0.25;
        celkem = zpatecniLetenka + doprava2;
        $("#celkem").val(celkem);

    });
    $("#dop3").click(function () {
        doprava3 = (zpatecniLetenka) * 0.5;
        celkem = zpatecniLetenka + doprava3;
        $("#celkem").val(celkem);

    });
    $("#mame").keyup(function () {
        celkemPorovnani = parseInt(this.value);
       
    });
    $("#vejdeSe").click(function () {
        if (celkem <= celkemPorovnani) {
            $("#vysledek").html("<b>Do celkové ceny objednávky se vejdete</b>");
        }
        else {
            $("#vysledek").html("<b>Do celkové ceny objednávky se nevejdete</b>");
        }

    });
    $("#poznamky").keypress(function (e) {
        var keyCode = e.which;
        /*32 - (space), 44-, 46-.
          48-57 - (0-9)Numbers
         65-90 - (A-Z)
         97-122 - (a-z)
        */

        if (keyCode != 32 && keyCode != 44 && keyCode != 46 && (keyCode < 48 || keyCode > 57) && (keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {
            return false;
        }
    });
});