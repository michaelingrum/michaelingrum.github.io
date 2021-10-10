window.onload = () =>{
    const myTextBox = document.getElementById("myTextBox");
}
function alertThem(){
    myTextBox.style.fontSize = "24pt";
}
function fancy(){
    if(document.getElementById("FancyShmancy").checked){
        myTextBox.style.fontWeight = "bold";
        myTextBox.style.color = "blue";
        myTextBox.style.textDecoration = "underline";
    }
}
function dull(){
    if(document.getElementById("BoringBetty").checked){
        myTextBox.style.fontWeight = "normal";
        myTextBox.style.color = "black";
        myTextBox.style.textDecoration = null;
    }
}
function moo(){
    myTextBox.value = myTextBox.value.toUpperCase();
    let sentences = myTextBox.value.trim().split(".");
    for (i = 0; i < sentences.length-1; i++){
        let words = sentences[i].split(" ");
        words[words.length-1] = words[words.length-1]+"-moo";
        sentences[i] = words.join(" ");
    }
    myTextBox.value = sentences.join(".");


}
