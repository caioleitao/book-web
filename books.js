let books = document.querySelectorAll(".book");
let links = ["https://th.bing.com/th/id/OIP.Zzv55ESkdvdqrSFHF8EwvgHaMU?pid=ImgDet&rs=1",
            "https://th.bing.com/th/id/OIP.AupeR9UShNdlk3U3TlqHWwHaK3?pid=ImgDet&rs=1",
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/31727756/tolkien.jpg?v=637357755800500000",
            "https://images-na.ssl-images-amazon.com/images/I/91BsZhxCRjL.jpg",
            "https://m.media-amazon.com/images/I/41Yzwvd85oS.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71Jt2eJxI6L.jpg",
            "https://th.bing.com/th/id/OIP.DmX1ZK_rySPKEE8LxXk3UwHaKp?pid=ImgDet&rs=1",
            "https://m.media-amazon.com/images/I/514KTwIAT4L.jpg",
            "https://th.bing.com/th/id/R.b18ee9772f790ce5e242b6eda7e2567d?rik=11Tn2qSAk1LC8w&riu=http%3a%2f%2fimagens.lelivros.love%2f2014%2f07%2fDownload-Aristateles-e-Dante-Descobrem-os-Segredos-do-Universo-Benjamin-Alire-Saenz-em-ePUB-mobi-e-pdf.jpg&ehk=Qie9PxWWddIrC1Lxqh%2bjintnUS8uD1zcr0%2b48Qi19Pk%3d&risl=&pid=ImgRaw&r=0",
            "https://images-na.ssl-images-amazon.com/images/I/81KfUf8JkcL.jpg", 
            "https://images-na.ssl-images-amazon.com/images/I/81zN7udGRUL.jpg",
            "https://th.bing.com/th/id/OIP.LykVOLeUj62teDDE60FctgHaKT?pid=ImgDet&w=704&h=979&rs=1",
            "https://images-na.ssl-images-amazon.com/images/I/819js3EQwbL.jpg",
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/2121050/1002915369.jpg?v=637007373516070000",
            "https://images-na.ssl-images-amazon.com/images/I/7121bMhcNKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81MscdgdwLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81o-0QH7KiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91Kz+sC5X0L.jpg",
            "https://www.lpm.com.br/livros/imagens/alice_noais_das_maravilhas_9788525400307_hd.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71l6UlO3TxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61nPQ2vVqlS.jpg"
];
function addCovers() {
    for (i = 0; i < books.length; i++) {
        books[i].style.background = `url(${links[i]})`;
        books[i].style.backgroundSize = "100% 100%";
        books[i].style.backgroundRepeat = "no-repeat";
        books[i].style.height = "5vh";
    }
}

addCovers();
generateId();






