document.querySelector('input[type="submit"]').addEventListener('click', whoCleans);

var checkbox = document.querySelectorAll('input[type="checkbox"]');
var out = document.querySelector('#output');

function whoCleans(e){
    e.preventDefault();
    var checkedMembers = [];
    
    let x = 0;
    for(var i=0; checkbox[i]; i++){
        let obj = {name:"", id:"", date:""};
        if(checkbox[i].checked){
            let id = checkbox[i].value;
            let name = checkbox[i].name;
            obj.name = name;
            obj.id = Number(id);
            obj.date = members[Number(id)-1].date;
            checkedMembers[x] = obj;
            x++;
        }
    }

    for(let i=0; i<checkedMembers.length; i++){
        for(let j=0; j<(checkedMembers.length-i-1); j++){
            if(checkedMembers[j].date > checkedMembers[j+1].date){
                let x = checkedMembers[j];
                checkedMembers[j] = checkedMembers[j+1];
                checkedMembers[j+1] = x;
            }
        }
    }

    var dateOfEnter = new Date;
    let cleaners = "";

    if(checkedMembers.length>3){
        for(let i=0; i<3; i++){
            cleaners += checkedMembers[i].name + '<br>';
            members[checkedMembers[i].id-1].date = dateOfEnter;
        }
    } else {
        for(let i=0; i<checkedMembers.length; i++){
            cleaners += checkedMembers[i].name + '<br>';
            members[checkedMembers[i].id-1].date = dateOfEnter;
        }
    }

    out.innerHTML = '';
    out.innerHTML = '<h2>Strunjače peru:<h2>' + '<h3>' + cleaners + '<h3>';

    var appState = JSON.stringify(members);
    localStorage.setItem('data', appState);
    
    for(let i in checkbox){
        checkbox[i].checked = false;
    }
}