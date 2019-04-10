if (localStorage.getItem('data') === null){
    var members = [
        {name:"Bojan Stanojević", id: 1},
        {name:"Vladimir Bidin", id: 2},
        {name:"Davor Jakišić", id: 3},
        {name:"Dušan Miloradović", id: 4},
        {name:"Dušan Tanasić", id: 5},
        {name:"Zlatko Ilić", id: 6},
        {name:"Ivan Zarev", id: 7},
        {name:"Ilija Puača", id: 8},
        {name:"Nikola Glavonjić", id: 9},
        {name:"Tomislav Miletić", id: 10}
    ];

    const startDate = new Date('January 1, 2019 01:00:00');

    for(let i in members){
        members[i].date = startDate;
    }
} else {
    var appState = localStorage.getItem('data');
    var members = JSON.parse(appState);
}

// Putting names onto screen via checkboxes...

var input = '';

for(var i in members){
    input += '<input type="checkbox" name="' + members[i].name + '" ' + 'value="' + members[i].id + '"> ' + members[i].name + '<br>';
}

document.getElementById('input').innerHTML = input;