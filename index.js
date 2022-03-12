//const n=document.querySelectorAll('.no');
//const op=document.querySelectorAll('.opr');
//const e=document.querySelector('.eq');
//const c=document.querySelector('c');
//const ce=document.querySelector('ce');
//let result=null;
//for(item of n){
//    item.addEventListener('click',(e)=>{
//        buttontext=e.target.innerText;
//        console.log('button text is ',buttontext);
//        
//    })
//}
let screen = document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenval='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
       // console.log('button text is ',buttontext);
        if(buttontext=='*'){
            screenval+=buttontext;
            screen.value=screenval;
        }
        else if(buttontext=='C'){
            screenval="";
            screen.value=screenval;
        }
        else if(buttontext=='='){
            screen.value=eval(screenval);
        }
        else if(buttontext=='CE'){
            screen.value = screen.value.slice(0, - 1);
        }
        else if(buttontext=='sin'){
            screen.val=Math.sin(screenval);
        }
        else{
            screenval+=buttontext;
            screen.value=screenval;
        }
    })
    
}