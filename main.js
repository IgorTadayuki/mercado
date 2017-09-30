// https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f
// https://tableless.com.br/ecmascript-6-uma-breve-introducao-a-poo/

/*
class Person {
    constructor(height, weight, age){
        this.age = age;
        var __weight = weight;
        var __height = height;
        var __imc;
        this.calcImc = function() {__imc = __weight / (__height * __height)};
        this.calcImc();
        this.getImc =  __imc;
        this.getHeight = __height;
        this.getWeight = __weight;
        this.getAge = age;
        this.setHeight = function(newValue) {
            __height = newValue;
            this.calcImc()
        };
        this.setWeight = function(newValue) {
            __weight = newValue;
            this.calcImc()
        };
    }
}

var John = new Person (1.74, 59.5, 18);
console.log("Age: " + John.getAge + ", height: " + John.getHeight + ", weight: " + John.getWeight + ", IMC: " + John.getImc);​
 */

import {Produto} from "./Produto";
import {Venda} from "./Vendas/Venda";

try {
    let brinquedo = new Produto("brinquedo", 19.99, 10);
    let brinquedo2 = new Produto("brinquedo2", 9.99, 30);

    let venda = new Venda("fulano", "123546789");
    venda.adicionarProduto(brinquedo, 3);
    console.log(venda.total);
    console.log(venda.itensDeVenda);
}

catch (e){
    console.log(e.message);
}