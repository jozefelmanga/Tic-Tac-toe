$(document).ready(()=>{
    var b=$('#yard')
    var player=true
    for (let i = 0; i <9; i++) {
       var p=$("<div></div>")
       p.addClass("square")
       b.append(p)
       p.attr('id',i)
       p.on("click",add)
       p.on("click",check)
    }
//add x or o 
function add() {
    $(this).off("click",add);
           if (player==true) {
                $(this).text("x");
                player=false;
           }
           else{
                $(this).text("o");
                player=true;
           }
}
// verifier
function check() {
    var t=[]
    var title=$('#main h2')
    for (let i = 0; i < 9; i++) {
        t[i]= $(`#${i}`).text()
    }
    
         if (t[0]==t[1] && t[2]==t[1] && t[1]!="") {
            title.text(`${t[1]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
        }
        else if (t[3]==t[4] && t[4]==t[5] && t[3]!="") { 
            title.text(`${t[4]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
         }
        else if (t[6]==t[7] && t[7]==t[8] && t[8]!="") {
            title.text(`${t[6]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000) 
            }
        else if (t[0]==t[3] && t[3]==t[6] && t[6]!="") { 
            title.text(`${t[0]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
        }
        else if (t[1]==t[4] && t[4]==t[7] && t[7]!="") {
            title.text(`${t[1]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000) 
            }
        else if (t[2]==t[5] && t[5]==t[8] && t[8]!="") {
            title.text(`${t[2]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
             }
        else if (t[0]==t[4] && t[4]==t[8] && t[8]!="") { 
            title.text(`${t[0]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
        }
        else if (t[2]==t[4] && t[4]==t[6] && t[6]!="") { 
            title.text(`${t[2]} win`)  
            setTimeout(clean,2000)
            setTimeout(()=>{title.text(`XO`)},2000)
        }

  

}
function clean() {
    b.empty()
    player=true
    for (let i = 0; i <9; i++) {
       var p=$("<div></div>")
       p.addClass("square")
       b.append(p)
       p.attr('id',i)
       p.on("click",add)
       p.on("click",check)
    }
}


})
