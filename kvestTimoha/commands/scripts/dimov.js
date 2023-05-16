let doing1 = true
n1_div.hidden = true
n1_img.hidden = true
function n1(){
    if(doing1 == true){
        n1_div.hidden = false
        doing1 = false
    } else {
        n1_div.hidden = true
        doing1 = true
    }
}
function n1_go(){
    if(n1_inp.value == "713"){
        n1_img.hidden = false
    }
}


let doing2 = true
n2_div.hidden = true
n2_text.hidden = true
function n2(){
    if(doing2 == true){
        n2_div.hidden = false
        doing2 = false
    } else {
        n2_div.hidden = true
        doing2 = true
    }
}
function n2_go(){
    if(n2_inp.value == "XNH"){
        n2_text.hidden = false
    }
}
