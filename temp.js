let cel = document.getElementById("cel");
let fr  = document.getElementById("fr");

cel.addEventListener('input',changecel);
fr.addEventListener('input',changefr);

cel.addEventListener('focus',function(){
    cel.style.cssText = " font-size:30px;border : 2px solid black;border-radius : 25px";
});
fr.addEventListener('focus',function(){
    fr.style.cssText = " font-size:30px;border : 2px solid black;border-radius : 25px";
});
cel.addEventListener('blur',function(){
  cel.style.cssText = " font-size:25px;";
});
fr.addEventListener('blur',function(){
  fr.style.cssText = " font-size:25px;";
});
function changefr(){
    let c = this.value;
    let f =  (c-32)*5/9;
    if(!Number.isInteger(f)){
      f = f.toFixed(4);
   }
    cel.value = f; 
    console.log(cel.value);
}
function changecel(){
   let c = this.value;
   let f =  (c*9/5) + 32 ;
   if(!Number.isInteger(f)){
     f = f.toFixed(4);
   }
   fr.value = f; 
   console.log(fr.value);
}

