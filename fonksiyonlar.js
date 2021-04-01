// tekÇift Bulma

function tekCift(sayi){

    if(sayi%2==0){
        return true;
    }else{
        return false;
    }
}

var sayi = tekCift(10);
console.log(sayi);



// Faktoriyel Hesaplama

function faktoriyel(sayi){
    var sonuc = 1;

    for(var i=2;i<=sayi;i++){
        sonuc *= i;
    }
    return sonuc;
}

console.log(faktoriyel(7));




// Dizinin elemanlarını ekrana yazdırma

var modeller = ['skoda','i3','benz'];

function yazdir(dizi){
    dizi.forEach(function(item){
        console.log(item);
    });
}

yazdir(modeller);