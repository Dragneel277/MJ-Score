const queryString = window.location.search;

qs = queryString.split("%")

console.log(qs)
for(let i = 0;i<qs.length;i++){
    p=qs[i].slice().split(";")
    team1=p[i].slice([1])
    team2=p[i+1].slice()

}



function changeIcon() {
    document.getElementById("icon1").src = "IMG/"+team1+".svg"
    document.getElementById("icon2").src = "IMG/"+team2+".svg"
  }


function changeName(){
    team1_name = document.getElementById('team1_name')
    team2_name = document.getElementById('team2_name')
    team1_name.textContent = team1
    team2_name.textContent = team2
    
}

changeName()

changeIcon()