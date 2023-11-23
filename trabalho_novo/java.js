var proximaImagem = 1;
var zIndexAtual = 0;
var imagens = document.getElementById("container").children;

function avancarImagem() {
    imagem = imagens[proximaImagem];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    proximaImagem++;

    if (proximaImagem >= imagens.length) {
        proximaImagem = 0;
    }

    setTimeout(resetarImagens, 800);
}

function resetarImagens() {
    imagemVisivel = proximaImagem - 1;

    if (imagemVisivel < 0) {
        imagemVisivel = imagens.length - 1;
    }

    for (var i = 0; i < imagens.length; i++) {
        if (i != imagemVisivel) {
            imagens[i].style.marginLeft = "100%";
        }
    }
}

var intervalo = setInterval(avancarImagem, 5000);

document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();

    var cadastroSection = document.querySelector('#cadastro');

    window.scrollTo({
        top: cadastroSection.offsetTop,
        behavior: 'smooth'
    });
});


function loginUser() {
    var usernameInput = document.querySelector('input[placeholder="Login"]');
    var passwordInput = document.querySelector('input[placeholder="Senha"]');
    var loginButton = document.querySelector('.botao');

 
    if (usernameInput.value === "username1" && passwordInput.value === "user12345") {
        // Redirect to the success page (pagina2.html)
        window.location.href = "pagina2.html";
    } else {
        
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}

document.querySelector('.botao').addEventListener('click', loginUser);
