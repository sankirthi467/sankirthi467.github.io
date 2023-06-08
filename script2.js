var userinfo = {name:"",image:"",username:""};
var changemypic =function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
        userinfo.name=data.results[0].name.first;
        userinfo.image=data.results[0].picture.large;
        userinfo.username=data.results[0].name.last;
        document.getElementById("imageid").src=userinfo.image;
        document.getElementById("name-id").innerHTML=userinfo.name;
        document.getElementById("user-id").innerHTML=userinfo.username;
    });
}