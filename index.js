document.getElementById("btnn").style.display = "none";
memeform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let imagesection=document.querySelector("input[type=file]")
    let top=document.getElementById("top");
    let bottom=document.getElementById("bottom");
    let thead=document.getElementById("top-head");
    let bhead=document.getElementById("bottom-head");
    if(top.value=="" || bottom.value==""){
        alert("Please fill the mandatory fields")
    }
    else{
        let memeimg=document.getElementById("meme-image");
        bhead.innerHTML=bottom.value
        thead.innerHTML=top.value
        if(imagesection.files && imagesection.files[0]){
            URL.revokeObjectURL(memeimg.src);
        }
        memeimg.src=URL.createObjectURL(imagesection.files[0]);
        
        // Show the download button
        document.getElementById("btnn").style.display = "block";
    } 
}); 

var imagesections = document.getElementsByClassName("image-part");
var btn = document.getElementById("btnn");
btn.addEventListener("click", () => {
    html2canvas(imagesections, {
        allowTaint: true,
        onrendered: function(canvas) {
            var link = document.createElement("a");
            link.download = "my-image.jpeg";
            link.href = canvas.toDataURL("image/jpeg");
            link.click();
            console.log(link.href);
            console.log(imagesections)
        }
    });
});

function adjustFontSize() {
    var textElement = document.getElementById("top-head");
    var currentFontSize = parseFloat(window.getComputedStyle(textElement, null).getPropertyValue('font-size'));
    var newFontSize = currentFontSize * 1.2; // Increase font size by 20%
    textElement.style.fontSize = newFontSize + "px";
}

// Call adjustFontSize function to change font size after 2 seconds (for demonstration)
setTimeout(adjustFontSize, 2000);













