function showIntro (){
    let introDiv = document.querySelector("#introDiv");
    document.querySelector("#cancelIntroBtn").addEventListener("click", () => {
        introDiv.style.display = "none"
    })
    document.querySelector("#introTextDiv").innerHTML = "Hi! You're the new student, right? I'm afraid that no one's here today. Well, except for COO, our mascot.. <br> It's a cool little fella, but quite mischievous sometimes. Some time ago, he got upset that no one had time for him, and he decided to get some attention by creating a project of his own - he designed a game which keeps everyone from leaving the laboratory's room before they finish it successfully.. Everyone got pretty angry with him, so now, he uses it just when someone new comes into the lab.. <br><br> *** The door slams shut. *** <br><br> Oh no, not again! I bet he locked you in here. Well, good luck..  <br><br> GO TALK TO COO, THE RACCOON."
    introDiv.style.display = "block"
}