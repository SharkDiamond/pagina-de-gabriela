var m1=document.getElementById("imagen1");


function an1(s) {
 
 if (s==1) {
    return  m1.className="a1"; 
 }
 if (s==2) {
    return  m1.className="a2"; 

}


}


m1.addEventListener(mouseover,an1(1));
m1.addEventListener(mouseout,an1(2));

