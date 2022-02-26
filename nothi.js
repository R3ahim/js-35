function welcomeMsg(name,greetHandler){
    // console.log(name);
    // console.log(greetHandler);
    greetHandler(name)
}
// const name = 'tom hanks';
function greetMoring(name){
    console.log('good moring',name);
}
function greetAfternoon(name){
    console.log('good moring',name);
}
function greetEvening(name){
    console.log('good moring',name);
}
welcomeMsg('tom hanks',greetMoring)
welcomeMsg('sakib hanks',greetAfternoon)
welcomeMsg('bappa raj',greetEvening)