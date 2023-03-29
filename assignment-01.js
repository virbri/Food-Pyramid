
var adult = true;
var chilC = false;
var chilCYounger = false;


function greenCircs(){

document.getElementById("red").style.backgroundColor= "green";
document.getElementById("orange").style.backgroundColor= "green";
document.getElementById("gg").style.backgroundColor= "green";
document.getElementById("gr").style.backgroundColor= "red";

document.getElementById("subRedButton").disabled = true;
document.getElementById("subRedButton").pointer = true;
document.getElementById("subOrangeButton").disabled = true;
document.getElementById("subOrangeButton").pointer = true;
document.getElementById("subYellowButton").disabled = true;
document.getElementById("subYellowButton").pointer = true;
document.getElementById("subBlueButton").disabled = true;
document.getElementById("subBlueButton").pointer = true;
document.getElementById("subBrownButton").disabled = true;
document.getElementById("subBrownButton").pointer = true;
document.getElementById("subGreenButton").disabled = true;
document.getElementById("subGreenButton").pointer = true;

document.getElementById("selectedDate").innerHTML =  "00/00/0000";  
}



function Reset(){


document.getElementById("gg").style.backgroundColor= "green";
document.getElementById("gr").style.backgroundColor= "red";

nexRedeUp =0;
nextOrangeUp =0;
nextYellowUp = 0;
nextBlueUp = 0;
nextBrownUp =0;
nextGreenUp = 0;

document.getElementById("redTwo").textContent = 0;
document.getElementById("orangeTwo").textContent = 0;
document.getElementById("yellowTwo").textContent = 0;
document.getElementById("blueTwo").textContent = 0;
document.getElementById("brownTwo").textContent = 0;
document.getElementById("greenTwo").textContent = 0;

document.getElementById("red").innerHTML = nexRedeUp;
document.getElementById("orange").innerHTML = nextOrangeUp;
document.getElementById("yellow").innerHTML = nextYellowUp;
document.getElementById("blue").innerHTML = nextBlueUp;
document.getElementById("brown").innerHTML = nextBrownUp;
document.getElementById("green").innerHTML = nextGreenUp;

document.getElementById("subRedButton").disabled = true;
document.getElementById("subRedButton").pointer = true;
document.getElementById("subOrangeButton").disabled = true;
document.getElementById("subOrangeButton").pointer = true;
document.getElementById("subYellowButton").disabled = true;
document.getElementById("subYellowButton").pointer = true;
document.getElementById("subBlueButton").disabled = true;
document.getElementById("subBlueButton").pointer = true;
document.getElementById("subBrownButton").disabled = true;
document.getElementById("subBrownButton").pointer = true;
document.getElementById("subGreenButton").disabled = true;
document.getElementById("subGreenButton").pointer = true;

document.documentElement.style.setProperty('--trap7-height', "30px");
document.documentElement.style.setProperty('--trap6-height', "75px");
document.documentElement.style.setProperty('--trap5-height', "75px");
document.documentElement.style.setProperty('--trap4-height', "75px");
document.documentElement.style.setProperty('--trap3-height', "75px");
document.documentElement.style.setProperty('--trap2-height', "75px");
document.documentElement.style.setProperty('--trap1-height', "75px"); 

document.getElementById("redRange").textContent= "Ok";
document.getElementById("orangeRange").textContent= "Ok";
document.getElementById("yellowRange").textContent= "Too Little";
document.getElementById("blueRange").textContent= "Too Little";
document.getElementById("brownRange").textContent= "Too Little";
document.getElementById("greenRange").textContent= "Too Little";



if(adult){
    
    document.getElementById("red").style.backgroundColor= "green";
    document.getElementById("orange").style.backgroundColor= "green";
    document.getElementById("yellow").style.backgroundColor= "orange";
    document.getElementById("blue").style.backgroundColor= "orange";
    document.getElementById("brown").style.backgroundColor= "orange";
    document.getElementById("green").style.backgroundColor= "orange";

    document.getElementById("redRange").textContent= "Ok";
    document.getElementById("orangeRange").textContent= "Ok";
    document.getElementById("yellowRange").textContent= "Too Little";
    document.getElementById("blueRange").textContent= "Too Little";
    document.getElementById("brownRange").textContent= "Too Little";
    document.getElementById("greenRange").textContent= "Too Little";

    document.getElementById("shelf2").style.backgroundColor= "996633";
    document.getElementById("shelf1").style.backgroundColor= "99ff66";

    document.getElementById("guideBar2").style.backgroundColor= "996633";
    document.getElementById("guideBar1").style.backgroundColor= "99ff66";

    document.getElementById("veg").textContent = "Vegetables, salad and fruit";
    document.getElementById("grains").textContent = "Wholemeal cereals & breads, potatoes, pasta & rice";
    
    }
    else if(chilC){
    document.getElementById("red").style.backgroundColor= "red";
    document.getElementById("orange").style.backgroundColor= "green";
    document.getElementById("yellow").style.backgroundColor= "orange";
    document.getElementById("blue").style.backgroundColor= "orange";
    document.getElementById("brown").style.backgroundColor= "orange";
    document.getElementById("green").style.backgroundColor= "orange";

    document.getElementById("redRange").textContent= "Only once a week!!!";
    document.getElementById("orangeRange").textContent= "In Very Small Amounts";
    document.getElementById("yellowRange").textContent= "Too Little";
    document.getElementById("blueRange").textContent= "Too Little";
    document.getElementById("brownRange").textContent= "Too Little";
    document.getElementById("greenRange").textContent= "Too Little";

    document.getElementById("shelf2").style.backgroundColor= "99ff66";
    document.getElementById("shelf1").style.backgroundColor= "996633";

    document.getElementById("guideBar2").style.backgroundColor= "99ff66";
    document.getElementById("guideBar1").style.backgroundColor= "996633";
    
    document.getElementById("veg").textContent = "Wholemeal cereals & breads, potatoes, pasta & rice";
    document.getElementById("grains").textContent = "Vegetables, salad and fruit";

    }
    else if(chilCYounger){
        document.getElementById("red").style.backgroundColor= "red";
        document.getElementById("orange").style.backgroundColor= "green";
        document.getElementById("yellow").style.backgroundColor= "orange";
        document.getElementById("blue").style.backgroundColor= "orange";
        document.getElementById("brown").style.backgroundColor= "orange";
        document.getElementById("green").style.backgroundColor= "orange" 
        
        document.getElementById("redRange").textContent= "Only once a week!!!";
        document.getElementById("orangeRange").textContent= "In Very Small Amounts";
        document.getElementById("yellowRange").textContent= "Too Little";
        document.getElementById("blueRange").textContent= "Too Little";
        document.getElementById("brownRange").textContent= "Too Little";
        document.getElementById("greenRange").textContent= "Too Little";
    
        document.getElementById("shelf2").style.backgroundColor= "99ff66";
        document.getElementById("shelf1").style.backgroundColor= "996633";
    
        document.getElementById("guideBar2").style.backgroundColor= "99ff66";
        document.getElementById("guideBar1").style.backgroundColor= "996633";
    
    
        document.getElementById("veg").textContent = "Wholemeal cereals & breads, potatoes, pasta & rice";
        document.getElementById("grains").textContent = "Vegetables, salad and fruit";     

        }else{
            document.getElementById("red").style.backgroundColor= "green";
            document.getElementById("orange").style.backgroundColor= "green";
            document.getElementById("yellow").style.backgroundColor= "orange";
            document.getElementById("blue").style.backgroundColor= "orange";
            document.getElementById("brown").style.backgroundColor= "orange";
            document.getElementById("green").style.backgroundColor= "orange";

            document.getElementById("shelf2").style.backgroundColor= "99ff66";
            document.getElementById("shelf1").style.backgroundColor= "996633";

            document.getElementById("guide2").style.backgroundColor= "99ff66";
            document.getElementById("guide1").style.backgroundColor= "996633";


            document.getElementById("veg").textContent = "Wholemeal cereals & breads, potatoes, pasta & rice";
            document.getElementById("grains").textContent = "Vegetables, salad and fruit";
        }
}

var nexRedeUp =0;
function redSub() {
    if(nexRedeUp>0){
        nexRedeUp = nexRedeUp - 1;
          document.getElementById("red").innerHTML = nexRedeUp;
          document.getElementById("redTwo").innerHTML = nexRedeUp;
        if(nexRedeUp==0){
            document.getElementById("subRedButton").disabled = true;
            document.getElementById("subRedButton").pointer = true;
        }
    }
    trap6Height = getComputedStyle(document.documentElement).getPropertyValue('--trap6-height');
    document.documentElement.style.setProperty('--trap6-height', (parseInt(trap6Height, 10) - 10) + "px");
}
function redAdd() {   
    nexRedeUp = nexRedeUp + 1;
    document.getElementById("red").innerHTML = nexRedeUp;
    document.getElementById("redTwo").innerHTML = nexRedeUp;
    if(nexRedeUp>0){
        document.getElementById("subRedButton").disabled = false;
    }
    trap6Height = getComputedStyle(document.documentElement).getPropertyValue('--trap6-height');
    document.documentElement.style.setProperty('--trap6-height', (parseInt(trap6Height, 10) + 10) + "px");
}

var nextOrangeUp = 0;
function orangeSub() {
    if(nextOrangeUp>0){
        nextOrangeUp = nextOrangeUp - 1;
          document.getElementById("orange").innerHTML = nextOrangeUp;
          document.getElementById("orangeTwo").innerHTML = nextOrangeUp;
        if(nextOrangeUp==0){
            document.getElementById("subOrangeButton").disabled = true;
            document.getElementById("subOrangeButton").pointer = true;
        }
    }
    trap5Height = getComputedStyle(document.documentElement).getPropertyValue('--trap5-height');
    document.documentElement.style.setProperty('--trap5-height', (parseInt(trap5Height, 10) - 10) + "px");
}


function orangeAdd() {   
    nextOrangeUp = nextOrangeUp + 1;
    document.getElementById("orange").innerHTML = nextOrangeUp;
    document.getElementById("orangeTwo").innerHTML = nextOrangeUp;
    if(nextOrangeUp>0){
        document.getElementById("subOrangeButton").disabled = false;
    }
    trap5Height = getComputedStyle(document.documentElement).getPropertyValue('--trap5-height');
    document.documentElement.style.setProperty('--trap5-height', (parseInt(trap5Height, 10) + 10) + "px");
}

var nextYellowUp =0;
function yellowSub() {
    if(nextYellowUp>0){
        nextYellowUp = nextYellowUp - 1;
          document.getElementById("yellow").innerHTML = nextYellowUp;
          document.getElementById("yellowTwo").innerHTML = nextYellowUp;
        if(nextYellowUp==0){
            document.getElementById("subYellowButton").disabled = true;
            document.getElementById("subYellowButton").pointer = true;
        }
    }
    trap4Height = getComputedStyle(document.documentElement).getPropertyValue('--trap4-height');
    document.documentElement.style.setProperty('--trap4-height', (parseInt(trap4Height, 10) - 10) + "px");
}


function yellowAdd() {   
    nextYellowUp = nextYellowUp + 1;
    document.getElementById("yellow").innerHTML = nextYellowUp;
    document.getElementById("yellowTwo").innerHTML = nextYellowUp;
    if(nextYellowUp>0){
        document.getElementById("subYellowButton").disabled = false;
    }
    trap4Height = getComputedStyle(document.documentElement).getPropertyValue('--trap4-height');
    document.documentElement.style.setProperty('--trap4-height', (parseInt(trap4Height, 10) + 10) + "px");
}


var nextBlueUp =0;
function blueSub() {
    if(nextBlueUp>0){
        nextBlueUp = nextBlueUp - 1;
          document.getElementById("blue").innerHTML = nextBlueUp;
          document.getElementById("blueTwo").innerHTML = nextBlueUp;
        if(nextBlueUp==0){
            document.getElementById("subBlueButton").disabled = true;
            document.getElementById("subBlueButton").pointer = true;
        }
    }
    trap3Height = getComputedStyle(document.documentElement).getPropertyValue('--trap3-height');
    document.documentElement.style.setProperty('--trap3-height', (parseInt(trap3Height, 10) - 10) + "px");
}


function blueAdd() {   
    nextBlueUp = nextBlueUp + 1;
    document.getElementById("blue").innerHTML = nextBlueUp;
    document.getElementById("blueTwo").innerHTML = nextBlueUp;
    if(nextBlueUp>0){
        document.getElementById("subBlueButton").disabled = false;
    }
    trap3Height = getComputedStyle(document.documentElement).getPropertyValue('--trap3-height');
    document.documentElement.style.setProperty('--trap3-height', (parseInt(trap3Height, 10) + 10) + "px");
}

var nextBrownUp = 0;
function brownSub() {
    nextBrownUp = nextBrownUp - 1;
    if(adult && nextBrownUp>0){
          document.getElementById("brown").innerHTML = nextBrownUp;
          document.getElementById("brownTwo").innerHTML = nextBrownUp;
        }
        if( chilC && nextBrownUp>0 ){
              document.getElementById("brown").innerHTML = nextBrownUp;
              document.getElementById("greenTwo").innerHTML = nextBrownUp;
        }

        if( chilCYounger&& nextBrownUp>0){
              document.getElementById("brown").innerHTML = nextBrownUp;
              document.getElementById("greenTwo").innerHTML = nextBrownUp;
        }
    
        if(nextBrownUp==0){
            document.getElementById("subBrownButton").disabled = true;
            document.getElementById("subBrownButton").pointer = true;
    }
    trap2Height = getComputedStyle(document.documentElement).getPropertyValue('--trap2-height');
    document.documentElement.style.setProperty('--trap2-height', (parseInt(trap2Height, 10) - 10) + "px");
}

function brownAdd() { 
    nextBrownUp = nextBrownUp + 1;  
    if(adult && nextBrownUp>0){
        document.getElementById("brown").innerHTML = nextBrownUp;
        document.getElementById("brownTwo").innerHTML = nextBrownUp;
        }
        if(chilC && nextBrownUp>0  ){
              document.getElementById("brown").innerHTML = nextBrownUp;
              document.getElementById("greenTwo").innerHTML = nextBrownUp;
        }
        if(chilCYounger && nextBrownUp>0 ){
              document.getElementById("brown").innerHTML = nextBrownUp;
              document.getElementById("greenTwo").innerHTML = nextBrownUp;
        }
  
    if(nextBrownUp>0){
        document.getElementById("subBrownButton").disabled = false;
    }

    trap2Height = getComputedStyle(document.documentElement).getPropertyValue('--trap2-height');
    document.documentElement.style.setProperty('--trap2-height', (parseInt(trap2Height, 10) + 10) + "px");
}



var nextGreenUp =0;
function greenSub() {
    nextGreenUp = nextGreenUp - 1;
    if(adult && nextGreenUp>0){
          document.getElementById("green").innerHTML = nextGreenUp;
          document.getElementById("greenTwo").innerHTML = nextGreenUp;
    }
    if(nextGreenUp>0 && chilC ){
          document.getElementById("green").innerHTML = nextGreenUp;
          document.getElementById("brownTwo").innerHTML = nextGreenUp;
    }
    if(nextGreenUp>0 &&  chilCYounger){
          document.getElementById("green").innerHTML = nextGreenUp;
          document.getElementById("brownTwo").innerHTML = nextGreenUp;
    }
        if(nextGreenUp==0){
            document.getElementById("subGreenButton").disabled = true;
            document.getElementById("subGreenButton").pointer = true;
        }
        trap1Height = getComputedStyle(document.documentElement).getPropertyValue('--trap1-height');
    document.documentElement.style.setProperty('--trap1-height', (parseInt(trap1Height, 10) - 10) + "px");
}


    function greenAdd() {  
        nextGreenUp = nextGreenUp + 1; 
        if(adult && nextGreenUp >0){
        document.getElementById("green").innerHTML = nextGreenUp;
        document.getElementById("greenTwo").innerHTML = nextGreenUp;
        }
        if(nextGreenUp>0 && chilC ){
              document.getElementById("green").innerHTML = nextGreenUp;
              document.getElementById("brownTwo").innerHTML = nextGreenUp;
        }
        if(nextGreenUp>0 && chilCYounger){
              document.getElementById("green").innerHTML = nextGreenUp;
              document.getElementById("brownTwo").innerHTML = nextGreenUp;
        }
        if(nextGreenUp>0){
            document.getElementById("subGreenButton").disabled = false;
        }
       
        trap1Height = getComputedStyle(document.documentElement).getPropertyValue('--trap1-height');
        document.documentElement.style.setProperty('--trap1-height', (parseInt(trap1Height, 10) + 10) + "px");

    }


    function redAdult(){

        if(adult && nexRedeUp>=0 && nexRedeUp<2){
            document.getElementById("red").style.backgroundColor= "green";
            document.getElementById("red").style.color= "white";
            document.getElementById("redRange").textContent = "Ok";
        }
        if(adult && nexRedeUp>1){
            document.getElementById("red").style.backgroundColor= "red"
            document.getElementById("red").style.color= "white";
            document.getElementById("redRange").textContent = "Too Much";
        }
    }
    function orangeAdult(){

        if(adult && nextOrangeUp>=0 && nextOrangeUp<2){
            document.getElementById("orange").style.backgroundColor= "green";
            document.getElementById("orange").style.color= "white";
            document.getElementById("orangeRange").textContent = "Ok";
        }
        if(adult && nextOrangeUp>1){
            document.getElementById("orange").style.backgroundColor= "red";
            document.getElementById("orange").style.color= "white";
            document.getElementById("orangeRange").textContent = "Too Much";
        }
    }
    function yellowAdult(){
        if(adult && nextYellowUp>0 && nextYellowUp<3){
            document.getElementById("yellow").style.backgroundColor= "orange"
            document.getElementById("yellow").style.color= "white";
            document.getElementById("yellowRange").textContent = "Too Little";
        }
        if(adult && nextYellowUp>2 && nextYellowUp<4){
            document.getElementById("yellow").style.backgroundColor= "green"
            document.getElementById("yellow").style.color= "white";
            document.getElementById("yellowRange").textContent = "In Range";
        }
        if(adult && nextYellowUp>3){
            document.getElementById("yellow").style.backgroundColor= "red"
            document.getElementById("yellow").style.color= "white";
            document.getElementById("yellowRange").textContent = "Too Much";
        }
    }
    function blueAdult(){
        if(adult && nextBlueUp>0 && nextBlueUp<3){
            document.getElementById("blue").style.backgroundColor= "orange"
            document.getElementById("blue").style.color= "white";
            document.getElementById("blueRange").textContent = "Too Little";
        }
        if(adult && nextBlueUp>2 && nextBlueUp<4){
            document.getElementById("blue").style.backgroundColor= "green"
            document.getElementById("blue").style.color= "white";
            document.getElementById("blueRange").textContent = "In Range";
        }
        if(adult && nextBlueUp>3){
            document.getElementById("blue").style.backgroundColor= "red"
            document.getElementById("blue").style.color= "white";
            document.getElementById("blueRange").textContent = "Too Much";
        }
    }
    
    function brownAdult(){
        if(adult && nextBrownUp>0 && nextBrownUp<3){
            document.getElementById("brown").style.backgroundColor= "orange"
            document.getElementById("brown").style.color= "white";
            document.getElementById("brownRange").textContent = "Too Little";
        }
        if(adult && nextBrownUp>2 && nextBrownUp<6){
            document.getElementById("brown").style.backgroundColor= "green"
            document.getElementById("brown").style.color= "white";
            document.getElementById("brownRange").textContent = "In Range";
        }
        if(adult && nextBrownUp>5){
            document.getElementById("brown").style.backgroundColor= "red"
            document.getElementById("brown").style.color= "white";
            document.getElementById("brownRange").textContent = "Too Much";
        }
    }
    function greenAdult(){
        if(adult && nextGreenUp>0 && nextGreenUp<6){
            document.getElementById("green").style.backgroundColor= "orange"
            document.getElementById("green").style.color= "white";
            document.getElementById("greenRange").textContent = "Too Little";
        }
        if(adult && nextGreenUp>4 && nextGreenUp<8){
            document.getElementById("green").style.backgroundColor= "green"
            document.getElementById("green").style.color= "white";
            document.getElementById("greenRange").textContent = "In Range";
        }
        if(adult && nextGreenUp>7){
            document.getElementById("green").style.backgroundColor= "red"
            document.getElementById("green").style.color= "white";
            document.getElementById("greenRange").textContent = "Too Much";
        }
    }


function adults() {   
    adult = true;
    chilC = false;
    chilCYounger = false;

    document.getElementById("maskChildren").style.opacity= "1";
    document.getElementById("maskAdult").style.opacity= ".3";
    document.getElementById("maskAdultChild").style.opacity= ".3";
    document.getElementById("adults").disabled = true;
    document.getElementById("childrenC").disabled = false;
    document.getElementById("childrenYounger").disabled = false;

    document.getElementById("red").style.backgroundColor= "green";
    document.getElementById("orange").style.backgroundColor= "green";
    document.getElementById("yellow").style.backgroundColor= "orange";
    document.getElementById("blue").style.backgroundColor= "orange";
    document.getElementById("brown").style.backgroundColor= "orange";
    document.getElementById("green").style.backgroundColor= "orange";

    document.getElementById("gg").style.backgroundColor= "green";
    document.getElementById("gr").style.backgroundColor= "red";

    nexRedeUp =0;
    nextOrangeUp =0;
    nextYellowUp = 0;
    nextBlueUp = 0;
    nextBrownUp =0;
    nextGreenUp = 0;

    document.getElementById("redTwo").textContent = 0;
    document.getElementById("orangeTwo").textContent = 0;
    document.getElementById("yellowTwo").textContent = 0;
    document.getElementById("blueTwo").textContent = 0;
    document.getElementById("brownTwo").textContent = 0;
    document.getElementById("greenTwo").textContent = 0;

    document.getElementById("red").innerHTML = nexRedeUp;
    document.getElementById("orange").innerHTML = nextOrangeUp;
    document.getElementById("yellow").innerHTML = nextYellowUp;
    document.getElementById("blue").innerHTML = nextBlueUp;
    document.getElementById("brown").innerHTML = nextBrownUp;
    document.getElementById("green").innerHTML = nextGreenUp;

    document.getElementById("subRedButton").disabled = true;
    document.getElementById("subRedButton").pointer = true;
    document.getElementById("subOrangeButton").disabled = true;
    document.getElementById("subOrangeButton").pointer = true;
    document.getElementById("subYellowButton").disabled = true;
    document.getElementById("subYellowButton").pointer = true;
    document.getElementById("subBlueButton").disabled = true;
    document.getElementById("subBlueButton").pointer = true;
    document.getElementById("subBrownButton").disabled = true;
    document.getElementById("subBrownButton").pointer = true;
    document.getElementById("subGreenButton").disabled = true;
    document.getElementById("subGreenButton").pointer = true;

    document.documentElement.style.setProperty('--trap7-height', "30px");
    document.documentElement.style.setProperty('--trap6-height', "75px");
    document.documentElement.style.setProperty('--trap5-height', "75px");
    document.documentElement.style.setProperty('--trap4-height', "75px");
    document.documentElement.style.setProperty('--trap3-height', "75px");
    document.documentElement.style.setProperty('--trap2-height', "75px");
    document.documentElement.style.setProperty('--trap1-height', "75px");

    document.getElementById("redRange").textContent= "Ok";
    document.getElementById("orangeRange").textContent= "Ok";
    document.getElementById("yellowRange").textContent= "Too Little";
    document.getElementById("blueRange").textContent= "Too Little";
    document.getElementById("brownRange").textContent= "Too Little";
    document.getElementById("greenRange").textContent= "Too Little";

    document.getElementById("shelf2").style.backgroundColor= "996633";
    document.getElementById("shelf1").style.backgroundColor= "99ff66";

    document.getElementById("guideBar2").style.backgroundColor= "996633";
    document.getElementById("guideBar1").style.backgroundColor= "99ff66";

    document.getElementById("veg").textContent = "Vegetables, salad and fruit";
    document.getElementById("grains").textContent = "Wholemeal cereals & breads, potatoes, pasta & rice";
}

function childers() {   
    chilC = true;
    adult = false;
    chilCYounger = false;
    document.getElementById("maskAdult").style.opacity= "1";
    document.getElementById("maskChildren").style.opacity= ".3";
    document.getElementById("maskAdultChild").style.opacity= ".3";
    document.getElementById("childrenC").disabled = true;
    document.getElementById("adults").disabled = false;
    document.getElementById("childrenYounger").disabled = false;

    document.getElementById("red").style.backgroundColor= "red";
    document.getElementById("orange").style.backgroundColor= "orange";
    document.getElementById("yellow").style.backgroundColor= "orange";
    document.getElementById("blue").style.backgroundColor= "orange";
    document.getElementById("brown").style.backgroundColor= "orange";
    document.getElementById("green").style.backgroundColor= "orange";

    document.getElementById("gg").style.backgroundColor= "green";
    document.getElementById("gr").style.backgroundColor= "red";

    nexRedeUp =0;
    nextOrangeUp =0;
    nextYellowUp = 0;
    nextBlueUp = 0;
    nextBrownUp =0;
    nextGreenUp = 0;

    document.getElementById("redTwo").textContent = 0;
    document.getElementById("orangeTwo").textContent = 0;
    document.getElementById("yellowTwo").textContent = 0;
    document.getElementById("blueTwo").textContent = 0;
    document.getElementById("brownTwo").textContent = 0;
    document.getElementById("greenTwo").textContent = 0;

    document.getElementById("red").innerHTML = nexRedeUp;
    document.getElementById("orange").innerHTML = nextOrangeUp;
    document.getElementById("yellow").innerHTML = nextYellowUp;
    document.getElementById("blue").innerHTML = nextBlueUp;
    document.getElementById("brown").innerHTML = nextBrownUp;
    document.getElementById("green").innerHTML = nextGreenUp;

    document.getElementById("subRedButton").disabled = true;
    document.getElementById("subRedButton").pointer = true;
    document.getElementById("subOrangeButton").disabled = true;
    document.getElementById("subOrangeButton").pointer = true;
    document.getElementById("subYellowButton").disabled = true;
    document.getElementById("subYellowButton").pointer = true;
    document.getElementById("subBlueButton").disabled = true;
    document.getElementById("subBlueButton").pointer = true;
    document.getElementById("subBrownButton").disabled = true;
    document.getElementById("subBrownButton").pointer = true;
    document.getElementById("subGreenButton").disabled = true;
    document.getElementById("subGreenButton").pointer = true;

    document.documentElement.style.setProperty('--trap7-height', "30px");
    document.documentElement.style.setProperty('--trap6-height', "75px");
    document.documentElement.style.setProperty('--trap5-height', "75px");
    document.documentElement.style.setProperty('--trap4-height', "75px");
    document.documentElement.style.setProperty('--trap3-height', "75px");
    document.documentElement.style.setProperty('--trap2-height', "75px");
    document.documentElement.style.setProperty('--trap1-height', "75px");


    document.getElementById("redRange").textContent= "Only once a week!!!";
    document.getElementById("orangeRange").textContent= "In Very Small Amounts";
    document.getElementById("yellowRange").textContent= "Too Little";
    document.getElementById("blueRange").textContent= "Too Little";
    document.getElementById("brownRange").textContent= "Too Little";
    document.getElementById("greenRange").textContent= "Too Little";

    document.getElementById("shelf2").style.backgroundColor= "99ff66";
    document.getElementById("shelf1").style.backgroundColor= "996633";

    document.getElementById("guideBar2").style.backgroundColor = "99ff66";
    document.getElementById("guideBar1").style.backgroundColor = "996633";

    document.getElementById("veg").textContent= "Wholemeal cereals & breads, potatoes, pasta & rice";
    document.getElementById("grains").textContent= "Vegetables, salad and fruit";

}


function childersYoung() {   
    chilCYounger = true;
    chilC= false;
    adult = false;
    document.getElementById("maskAdultChild").style.opacity= "1";
    document.getElementById("maskChildren").style.opacity= ".3";
    document.getElementById("maskAdult").style.opacity= ".3";
    document.getElementById("childrenYounger").disabled = true;
    document.getElementById("adults").disabled = false;
    document.getElementById("childrenC").disabled = false;
   
    document.getElementById("gg").style.backgroundColor= "green";
    document.getElementById("gr").style.backgroundColor= "red";

    document.getElementById("red").style.backgroundColor= "red";
    document.getElementById("orange").style.backgroundColor= "orange";
    document.getElementById("yellow").style.backgroundColor= "orange";
    document.getElementById("blue").style.backgroundColor= "orange";
    document.getElementById("brown").style.backgroundColor= "orange";
    document.getElementById("green").style.backgroundColor= "orange";

    nexRedeUp =0;
    nextOrangeUp =0;
    nextYellowUp = 0;
    nextBlueUp = 0;
    nextBrownUp =0;
    nextGreenUp = 0;

    document.getElementById("redTwo").textContent = 0;
    document.getElementById("orangeTwo").textContent = 0;
    document.getElementById("yellowTwo").textContent = 0;
    document.getElementById("blueTwo").textContent = 0;
    document.getElementById("brownTwo").textContent = 0;
    document.getElementById("greenTwo").textContent = 0;

    document.getElementById("red").innerHTML = nexRedeUp;
    document.getElementById("orange").innerHTML = nextOrangeUp;
    document.getElementById("yellow").innerHTML = nextYellowUp;
    document.getElementById("blue").innerHTML = nextBlueUp;
    document.getElementById("brown").innerHTML = nextBrownUp;
    document.getElementById("green").innerHTML = nextGreenUp;

    document.getElementById("subRedButton").disabled = true;
    document.getElementById("subRedButton").pointer = true;
    document.getElementById("subOrangeButton").disabled = true;
    document.getElementById("subOrangeButton").pointer = true;
    document.getElementById("subYellowButton").disabled = true;
    document.getElementById("subYellowButton").pointer = true;
    document.getElementById("subBlueButton").disabled = true;
    document.getElementById("subBlueButton").pointer = true;
    document.getElementById("subBrownButton").disabled = true;
    document.getElementById("subBrownButton").pointer = true;
    document.getElementById("subGreenButton").disabled = true;
    document.getElementById("subGreenButton").pointer = true;

    document.documentElement.style.setProperty('--trap7-height', "30px");
    document.documentElement.style.setProperty('--trap6-height', "75px");
    document.documentElement.style.setProperty('--trap5-height', "75px");
    document.documentElement.style.setProperty('--trap4-height', "75px");
    document.documentElement.style.setProperty('--trap3-height', "75px");
    document.documentElement.style.setProperty('--trap2-height', "75px");
    document.documentElement.style.setProperty('--trap1-height', "75px");

    

    document.getElementById("redRange").textContent= "Only once a week!!!";
    document.getElementById("orangeRange").textContent= "In Very Small Amounts";
    document.getElementById("yellowRange").textContent= "Too Little";
    document.getElementById("blueRange").textContent= "Too Little";
    document.getElementById("brownRange").textContent= "Too Little";
    document.getElementById("greenRange").textContent= "Too Little";

    document.getElementById("shelf2").style.backgroundColor= "99ff66";
    document.getElementById("shelf1").style.backgroundColor= "996633";

    document.getElementById("guideBar2").style.backgroundColor = "99ff66";
    document.getElementById("guideBar1").style.backgroundColor = "996633";

    document.getElementById("veg").textContent= "Wholemeal cereals & breads, potatoes, pasta & rice";
    document.getElementById("grains").textContent= "Vegetables, salad and fruit";
    
}


function displayDate() {
    var inputDate = document.getElementById("datepicker").value;
    // Check if the input date is valid
    if (!isValidDate(inputDate)) {
        alert("Please enter a valid date in the format yyyy-mm-dd");
        return;
    }
    // Convert the date format to dd/mm/yyyy
    var parts = inputDate.split("-");
    var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
    document.getElementById("selectedDate").innerHTML =  formattedDate;
    document.getElementById("selectedDate2").innerHTML =  formattedDate;
}

function isValidDate(dateString) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    if(!regex.test(dateString)) {
        return false;
    }
    var parts = dateString.split("-");
    var year = parseInt(parts[0]);
    var month = parseInt(parts[1]);
    var day = parseInt(parts[2]);
    if(month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }
    if(month == 2) {
        var leapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        if(day > 29 || (day == 29 && !leapYear)) {
            return false;
        }
    }
    if((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
        return false;
    }
    return true;
}


 
function redChild(){

    if(chilC && nexRedeUp>=0 && nexRedeUp<2){
        document.getElementById("red").style.backgroundColor= "red";
        document.getElementById("red").style.color= "white";
        document.getElementById("redRange").textContent = "Only once a week!!!";
    }
    if(chilC && nexRedeUp>1){
        document.getElementById("redRange").textContent = "Too Much";
    }
}
function orangeChild(){

    if(chilC && nextOrangeUp>=0 && nextOrangeUp<2){
        document.getElementById("orange").style.backgroundColor= "orange";
        document.getElementById("orange").style.color= "white";
        document.getElementById("orangeRange").textContent = "In Very Small Amounts";
    }
    if(chilC && nextOrangeUp>1){
        document.getElementById("orange").style.backgroundColor= "red";
        document.getElementById("orange").style.color= "white";
        document.getElementById("orangeRange").textContent = "Too Much";
    }
}
function yellowChild(){
    if(chilC && nextYellowUp>0 && nextYellowUp<3){
        document.getElementById("yellow").style.backgroundColor= "orange";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "Too Little";
    }
    if(chilC && nextYellowUp>2 && nextYellowUp<5){
        document.getElementById("yellow").style.backgroundColor= "green";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "In Range";
    }
    if(chilC && nextYellowUp>4){
        document.getElementById("yellow").style.backgroundColor= "red";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "Too Much";
    }
}
function blueChild(){
    if(chilC && nextBlueUp>0 && nextBlueUp<3){
        document.getElementById("blue").style.backgroundColor= "orange";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "Too Little";
    }
    if(chilC && nextBlueUp>2 && nextBlueUp<4){
        document.getElementById("blue").style.backgroundColor= "green";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "In Range";
    }
    if(chilC && nextBlueUp>3){
        document.getElementById("blue").style.backgroundColor= "red";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "Too Much";
    }
}

function brownChild(){
    if(chilC && nextBrownUp>0 && nextBrownUp<4){
        document.getElementById("brown").style.backgroundColor= "orange";
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "Too Little";
    }
    if(chilC && nextBrownUp>3 && nextBrownUp<6){
        document.getElementById("brown").style.backgroundColor= "green";
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "In Range";
    }
    if(chilC && nextBrownUp>5){
        document.getElementById("brown").style.backgroundColor= "red";
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "Too Much";
    }
}
function greenChild(){
    if(chilC && nextGreenUp>0 && nextGreenUp<4){
        document.getElementById("green").style.backgroundColor= "orange";
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "Too Little";
    }
    if(chilC && nextGreenUp>3 && nextGreenUp<7){
        document.getElementById("green").style.backgroundColor= "green"
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "In Range";
    }
    if(chilC && nextGreenUp>6){
        document.getElementById("green").style.backgroundColor= "red"
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "Too Much";
    }
}


function redChildYoung(){

    if(chilCYounger && nexRedeUp>=0 && nexRedeUp<2){
        document.getElementById("red").style.backgroundColor= "red";
        document.getElementById("red").style.color= "white";
        document.getElementById("redRange").textContent = "Only once a week!!!";
    }
    if(chilCYounger && nexRedeUp>1){
        document.getElementById("redRange").textContent = "Too Much";
    }
}
function orangeChildYoung(){

    if(chilCYounger && nextOrangeUp>=0 && nextOrangeUp<2){
        document.getElementById("orange").style.backgroundColor= "orange";
        document.getElementById("orange").style.color= "white";
        document.getElementById("orangeRange").textContent = "In Very Small Amounts";
    }
    if(chilCYounger && nextOrangeUp>1){
        document.getElementById("orange").style.backgroundColor= "red";
        document.getElementById("orange").style.color= "white";
        document.getElementById("orangeRange").textContent = "Too Much";
    }
}
function yellowChildYoung(){
    if(chilCYounger && nextYellowUp>0 && nextYellowUp<3){
        document.getElementById("yellow").style.backgroundColor= "orange";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "Too Little";
    }
    if(chilCYounger && nextYellowUp>2 && nextYellowUp<4){
        document.getElementById("yellow").style.backgroundColor= "green";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "In Range";
    }
    if(chilCYounger && nextYellowUp>3){
        document.getElementById("yellow").style.backgroundColor= "red";
        document.getElementById("yellow").style.color= "white";
        document.getElementById("yellowRange").textContent = "Too Much";
    }
}
function blueChildYoung(){
    if(chilCYounger && nextBlueUp>0 && nextBlueUp<2){
        document.getElementById("blue").style.backgroundColor= "orange";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "Too Little";
    }
    if(chilCYounger && nextBlueUp>1 && nextBlueUp<3){
        document.getElementById("blue").style.backgroundColor= "green";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "In Range";
    }
    if(chilCYounger && nextBlueUp>4){
        document.getElementById("blue").style.backgroundColor= "red";
        document.getElementById("blue").style.color= "white";
        document.getElementById("blueRange").textContent = "Too Much";
    }
}

function brownChildYoung(){
    if(chilCYounger && nextBrownUp>0 && nextBrownUp<2){
        document.getElementById("brown").style.backgroundColor= "orange";
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "Too Little";
    }
    if(chilCYounger && nextBrownUp>1 && nextBrownUp<5){
        document.getElementById("brown").style.backgroundColor= "green"
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "In Range";
    }
    if(chilCYounger && nextBrownUp>4){
        document.getElementById("brown").style.backgroundColor= "red";
        document.getElementById("brown").style.color= "white";
        document.getElementById("greenRange").textContent = "Too Much";
    }
}
function greenChildYoung(){
    if(chilCYounger && nextGreenUp>0 && nextGreenUp<3){
        document.getElementById("green").style.backgroundColor= "orange";
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "Too Little";
    }
    if(chilCYounger && nextGreenUp>2 && nextGreenUp<6){
        document.getElementById("green").style.backgroundColor= "green"
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "In Range";
    }
    if(chilCYounger && nextGreenUp>5){
        document.getElementById("green").style.backgroundColor= "red";
        document.getElementById("green").style.color= "white";
        document.getElementById("brownRange").textContent = "Too Much";
    }
}

