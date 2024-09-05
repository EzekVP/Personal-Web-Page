const start = document.getElementById('start')
const page = document.getElementById('page')
const bgImage = document.getElementById('prof');


start.addEventListener('click',showPage,false)

function showPage()
{
    
    start.style.display = "none";
    page.style.display = "block";
    window.alert("This is my portfolio");
    
}

bgImage.addEventListener('mouseover',()=> {
    document.body.style.backgroundImage="url('./flowers.png')";
    console.log("Hello World")
})

bgImage.addEventListener('mouseout', () => {
    document.body.style.backgroundImage = ""; 
    console.log(" NO Hello World")   
});