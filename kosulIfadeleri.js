var marka = 'Opel';
var model = 'Astra'
var otomatik = 'yes';

/* if/else statement */

/*
if(otomatik == 'yes'){
    console.log('Araç otomatiktir.');
}else{
    console.log('Araç otomatik değildir.');
}

otomatik = true;
if(otomatik == 'yes'){
    console.log(marka+' '+model+' otomatik');
}

if(otomatik=='true'){
    console.log("true");
}

if(10=='10'){
    console.log("sayilar eşit");
}
*/

//1: manuel
//2: otomatik
var vites = '1';

if(vites=='1'){
    console.log('Araç manuel');
}else if(vites=='2'){
    console.log('Araç otomatik');
}else{
    console.log('yanlış bir değer');
}


/* switch statement */

switch(vites){
    case '1':
        console.log('Araç manuel');
        break;
    case '2':
        console.log('Araç otomatik');
        break;
   default:
        console.log('yanlış bir değer');
        break;            
}