/*
Cümle özetleme uygulaması

->
Bir cümle içinen 
istenilen karakter sayısına göre bir özet fonksiyonu, 
Ancak bölünnecek nokta bir kelime olamaz!

*/

var product = {

    name: 'Iphone 6',
    price: 600,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

    summary : function () {

        var ozetCumle = [];
        var maxKarakter = 20;
        var cumle = this.description;

        if (maxKarakter > cumle.length) {
            this.shortDescription = cumle;

        } else {
            var kelimeler = cumle.split(" ");

            var toplamKarakter = 0;

            for (var i = 0; i < kelimeler.length; i++) {

                ozetCumle.unshift(kelimeler[i]);
                toplamKarakter += kelimeler[i].length;

                if (toplamKarakter > maxKarakter) {
                    break;
                }
            }
            this.shortDescription = ozetCumle.join(" ") + "   ";
        }
    }
};

product.summary();
console.log(product);

/*
var cumle =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, blanditiis!";

function ozet(cumle, maxKarakter) {
    if (maxKarakter > cumle.length) {
            this.shortDescription = cumle;

        } else {
            var kelimeler = cumle.split(" ");

            var toplamKarakter = 0;

            for (var i = 0; i < kelimeler.length; i++) {

                ozetCumle.unshift(kelimeler[i]);
                toplamKarakter += kelimeler[i].length;

                if (toplamKarakter > maxKarakter) {
                    break;
                }
            }
            this.shortDescription = ozetCumle.join(" ") + "   ";
        }
    }
}
console.log(cumle, 20);
*/
