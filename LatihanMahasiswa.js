class Mahasiswa {
    #nama;

    constructor(nama){
        this.#nama = nama;
    }

    get nama(){
        return this.#nama.toLocaleUpperCase();
    }

    set nama(value){
        if (value.length < 3){
            console.log("Nama terlalu pendek");
        }
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("Ari");

console.log(mhs.nama);

mhs.nama = "Li";
mhs.nama = "Putri";
console.log(mhs.nama);