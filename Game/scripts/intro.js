function showIntro (){
    let introDiv = document.querySelector("#infoDiv")
    introDiv.innerHTML = "Members of HCILab are always busy with their research activities. One day, COO, the HCILab mascot, got bored and decided to get some attention by creating a project of his own - he designed a game which keeps anyone from leaving the laboratory's room before they solve all tasks. <br> You are a perspective student of FI MU and you came to visit the HCILab. Suddenly, the door slams shut behind you. It's locked. After a quick look around, you spot a little raccoon near the door, and you decide to talk to him.. Is he the one who locked you here? <br><br> GO TALK TO COO, THE RACCOON"
    introDiv.style.display = "block"
    setTimeout(() => {
        introDiv.style.display = "none";
    }, 18000);  
}