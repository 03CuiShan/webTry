
function auto(){
    var acID = document.getElementById("idName").value;
    if(acID == "ch1"){
        var activity = "Residential College/Faculty/Club";
    } else if(acID == "ch2"){
        var activity = "University";
    }else if(acID == "ch3"){
        var activity = "District/State Level";
    }else if(acID == "ch4"){
        var activity = "National";
    }else if(acID == "ch5"){
        var activity = "international";
    }
    document.getElementById("AcLevel").innerHTML= activity;


    var acID2 = document.getElementById("idName2").value;
    if(acID2 == "2ch1"){
        var activity2 = "Residential College/Faculty/Club";
    } else if(acID2 == "2ch2"){
        var activity2 = "University";
    }else if(acID2 == "2ch3"){
        var activity2 = "District/State Level";
    }else if(acID2 == "2ch4"){
        var activity2 = "National";
    }else if(acID2 == "2ch5"){
        var activity2 = "international";
    }
    document.getElementById("AcLevel2").innerHTML= activity2;
    

}

function display(){
    
    

    //activity-based merit 1
    var acID = document.getElementById("idName").value;
    if(acID == "ch1"){
        var acLevel= 10;
    } else if(acID == "ch2"){
        var acLevel = 20;
    }else if(acID == "ch3"){
        var acLevel = 30;
    }else if(acID == "ch4"){
        var acLevel = 40;
    }else if(acID == "ch5"){
        var acLevel = 50;
    }

    var position = document.getElementById("b5").value;
    if(position == "1b5"){
        var posMerit = 10;
    } else if(position == "2b5"){
        var posMerit = 20;
    }else if(position == "3b5"){
        var posMerit = 30;
    }

    var perfScore1 = acLevel*posMerit;
    document.getElementById("PerScore1").innerHTML = perfScore1;


    //activity-based merit 2
    var acID2 = document.getElementById("idName2").value;
    if(acID2 == "2ch1"){
        var acLevel2= 10;
    } else if(acID2 == "2ch2"){
        var acLevel2 = 20;
    }else if(acID2 == "2ch3"){
        var acLevel2 = 30;
    }else if(acID2 == "2ch4"){
        var acLevel2 = 40;
    }else if(acID2 == "2ch5"){
        var acLevel2 = 50;
    }

    var position2 = document.getElementById("b52").value;
    if(position2 == "1b52"){
        var posMerit2 = 10;
    } else if(position2 == "2b52"){
        var posMerit2 = 20;
    }else if(position2 == "3b52"){
        var posMerit2 = 30;
    }

    var perfScore2 = acLevel2*posMerit2;
    document.getElementById("PerScore2").innerHTML=perfScore2;

    var totalPs = perfScore1+perfScore2;
    document.getElementById("totalPs").innerHTML=totalPs;


    //position-based merit 1
    var pHold = document.getElementById("b6").value;
    if(pHold == "1b6"){
        var y = 10;
    } else if(pHold == "2b6"){
        var y = 20;
    }else if(pHold == "3b6"){
        var y = 30;
    }else if(pHold == "4b6"){
        var y = 40;
    }else if(pHold == "5b6"){
        var y = 50;
    }

    var ass = document.getElementById("b7").value;
    if(ass == "1b7"){
        var x = 10;
    }else if(ass == "2b7"){
        var x = 20;
    }else if(ass == "3b7"){
        var x = 30;
    }else if(ass == "4b7"){
        var x = 40;
    }

    var posBasedmerit1 = y * x ;
    document.getElementById("2PerScore1").innerHTML= posBasedmerit1;

    

    //position-based merit 2
    var pHold2 = document.getElementById("b62").value;
    if(pHold2 == "1b62"){
        var a = 10;
    }else if(pHold2 == "2b62"){
        var a = 20;
    }else if(pHold2 == "3b62"){
        var a = 30;
    }else if(pHold2 == "4b62"){
        var a = 40;
    }else if(pHold2 == "5b62"){
        var a = 50;
    }


    var ass2 = document.getElementById("b72").value;
    if(ass2 == "1b72"){
        var b = 10;
    }else if(ass2 == "2b72"){
        var b = 20;
    }else if(ass2 == "3b72"){
        var b = 30;
    }else if(ass2 == "4b72"){
        var b = 40;
    }

    var posBasedmerit2 = a * b ;
    document.getElementById("scorePos").innerHTML= posBasedmerit2;

    var posTotalMerit = posBasedmerit1 + posBasedmerit2;
   
    document.getElementById("totalMerit").innerHTML= posTotalMerit;


    //accum
    var accum = totalPs + posTotalMerit;
    document.getElementById("accumulation").innerHTML= accum;

    if(accum > 1000){
        document.getElementById("result").innerHTML="In campus accommodation";
    }else if (accum >= 500){
        document.getElementById("result").innerHTML="University Village (DHUAM) accommodation";
    }else if (accum < 500){
        document.getElementById("result").innerHTML="Not eligible for in campus and DHUAM accommodation";
    }

}