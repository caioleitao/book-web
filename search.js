let books = ["o processo", "dracula", "o hobbit", "a revolução dos bichos", "os dois morrem no final", "morte no nilo",
"três coisas sobre você", "orgulho e preconceito", "aristóteles e dante descobrem os segredos do universo",
"o mundo de sofia", "duna", "trivium", "1984", "o livro dos cinco anéis", "mulheres que correm com os lobos", 
"o pequeno príncipe", "os contos de beedle, o bardo", "frankenstein", "alice no país das maravilhas", 
"crime e castigo", "o idiota"
];

function pesquisarLivro() {
    var input = document.querySelector("#search");
    var texto = input.value;

    if (books.includes(texto.toLowerCase())) {
        alert("Encontrado! Nós temos ele no nosso acervo.");
    } else {
        alert("Sinto muito, esse livro não está no nosso acervo.");
    }
}