var ali = {
    ad :'Ali',
    soyad : 'Yılmaz',
    cinsiyet : 'Erkek',
    telefon : '543',
    adres : 'İzmir / Çeşme',
    meslek : 'Bilgisayar Mühendisliği',
    diller : ['ingilizce','almanca'],
    hobiler : ['sinema,spor,kitap okumak']
};


console.log(ali.diller.length);


console.log(ali.hobiler);


ali.hobiler.forEach(function(hobiler){
    console.log(hobiler);
});



var personel = [

    {
        ad :'Yaşar',
        soyad : 'Yılmaz',
        cinsiyet : 'Erkek',
        telefon : '505',
        adres : 'Antalya',
        meslek : 'Economy',
        diller : ['ingilizce','almanca'],
        hobiler : ['sinema,spor,kitap okumak']
    },
    {
        ad :'Tolga',
        soyad : 'Kulkan',
        cinsiyet : 'Erkek',
        telefon : '543',
        adres : 'İzmir / Çeşme',
        meslek : 'Bilgisayar Mühendisliği',
        diller : ['ingilizce','almanca'],
        hobiler : ['sinema,spor,kitap okumak']
    },
    {
        ad :'Jiyan',
        soyad : 'Hola',
        cinsiyet : 'Kadın',
        telefon : '555',
        adres : 'Muğla',
        meslek : 'İngilizce',
        diller : ['ingilizce','almanca'],
        hobiler : ['sinema,spor,kitap okumak']
    }

];

personel.forEach(function(personel){
    console.log(personel);
});

personel.forEach(function(personel){
    console.log(personel.meslek);
});

