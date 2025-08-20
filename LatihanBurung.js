class Burung {
    bersuara(){
        console.log("Cuit cuit");
    }
}

class Ayam extends Burung {
    bersuara(){
        console.log("Kukuruyuk");
    }
}

class Bebek extends Burung {
    bersuara(){
        console.log("Kwek kwek");
    }
}

const daftarBurung = [new Ayam(), new Bebek()];

daftarBurung.forEach(burungItem => {
    burungItem.bersuara(); //polymorphism
});

