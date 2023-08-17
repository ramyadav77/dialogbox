const getColor =()=>{
    //hex code
    const random=Math.floor(Math.random()*16777215);
    // console.log(random);
   const randomcode ="#"+random.toString(16); 
//    console.log(randomcode);    
document.body.style.backgroundColor=randomcode;
document.getElementById('colorcode').innerText=randomcode;
navigator.clipboard.writeText(randomcode);
   }

document.getElementById('btn').addEventListener('click',getColor)


getColor();