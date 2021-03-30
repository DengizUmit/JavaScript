
var now = 2021;
var models = ["BMW","Ford","Fiat","Porsche","Toyota"]; 
var years = ['2021','2013','2017','2018','1998'];


// 1
for(var i=0; i<models.length; i++){
    console.log(models[i]);
}


models.forEach(function(element){
    console.log(element);
})



// 2
for(var i=0; i<models.length; i++){
    console.log(models[i]+' '+years[i]+' model ve '
    +(now-years[i])+' yaşında bir araçtır.');
}



// 3
var model = prompt("Model giriniz: ");
var year = prompt("Model yılını giriniz: ");


models.push(model);
yearsMers.push(year);


for(var i=0; i<models.length; i++){
    console.log(models[i]+' '+years[i]+' model ve '
    +(now-years[i])+' yaşında bir araçtır.');
}