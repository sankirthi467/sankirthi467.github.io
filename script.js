var data1 = {image: "presentimage.jpg",name:"K santoshi laxmi", designation:"undergraduate"};
var data2 = {image:"childhood.jpg",name:"santoshi",designation: "developer"};
var isdata1 = true;
var displayData;
var changepic =function(){
    if(isdata1){
        displayData=data2;
        isdata1=false;
    }
    else{
        displayData=data1;
        isdata1=true;
    }
    document.getElementById("imageid").src=displayData.image;
    document.getElementById("user-id").innerHTML=displayData.name;
    document.getElementById("desig-id").innerHTML=displayData.designation;
}