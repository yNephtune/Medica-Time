// export const navbar = () => {
//     return (  
//     <nav>
//         <a class="logo" href="./index.html">
//           <img src="./imagensHome/imagensLogos/medical.png" alt="" width="40vh" />  
//           <p><strong>MEDICA TIME</strong></p>
//         </a>
//         <div class="mobile-menu">
//           <div class="line 1"></div>
//           <div class="line 2"></div>
//           <div class="line 3"></div>
//         </div>
//         <ul class="nav-list">
//           <li><a href="./farmaciasLocal/index.html">Encontre Farmacias</a></li>
//           <li><a href="./cadastro/index.html">Cadastre-se</a></li>
//           <li><a href="./Login/login.html">Login</a></li>
//         </ul>
//     </nav>)
// }

// funcoes.js
document.addEventListener('DOMContentLoaded', function () {
    // Função para criar a navbar
    function criarNavbar() {
        var navbarHTML = `
        <a class="logo" href="./index.html">
        <img src="./imagensHome/imagensLogos/medical.png" alt="" width="40vh" />  
        <p><strong>MEDICA TIME</strong></p>
      </a>
      <div class="mobile-menu">
        <div class="line 1"></div>
        <div class="line 2"></div>
        <div class="line 3"></div>
      </div>
      <ul class="nav-list">
        <li><a href="./farmaciasLocal/index.html">Encontre Farmacias</a></li>
        <li><a href="./cadastro/index.html">Cadastre-se</a></li>
        <li><a href="./Login/login.html">Login</a></li>
      </ul>
  </nav>
        `;

        // Seleciona o elemento onde você deseja exibir a navbar
        var elementoDestinoNavbar = document.getElementById('minhaNavbar');

        // Atualiza o conteúdo do elemento com a navbar HTML
        elementoDestinoNavbar.innerHTML = navbarHTML;
    }

    // Chama a função para criar a navbar
    criarNavbar();
});
