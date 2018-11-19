// JavaScript File

window.onload = function(){
    var x = document.getElementById("lookup");
    x.addEventListener("click",Rsearch);
    
};

function Search(key){
    if(key.length == 0){
        return;
    }
    var a = new XMLHttpRequest();
    a.onreadystatechange = function(){
        if (a.readyState == 4 && a.status == 200){
            document.getElementById("result").innerHTML = a.responseText;
        }
    };
    a.open("GET","world.php?country=" + key ,true);
    a.send();
    
}

function Rsearch(){
    var a = document.getElementById("country");
    var z = document.getElementById("tick");
    if (z.checked == true){
        searchAll();
    }else{

    Search(a.value);
    }
}

function searchAll(){
    var y= new XMLHttpRequest;
    y.open("GET", "world.php?all=true",true);
    y.send();
    
    y.onreadystatechange= function(){
        if(y.readyState == 4 && y.status == 200){
            document.getElementById("result").innerHTML = y.responseText;
        }
    };
    
}