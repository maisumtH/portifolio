document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelector('.nav-link.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });

 // Variáveis de seleção
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section'); // Seleciona todas as seções

// Adiciona classe 'navbar-scrolled' quando a rolagem passa 50px
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Função para ativar o link da navegação baseado na rolagem
function activateNavLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Verifica se a seção está na tela
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove a classe 'active' de todos os links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link correspondente à seção atual
    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Atualiza o link ativo ao rolar a página
window.addEventListener('scroll', activateNavLink);

// Rolagem suave para as seções
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão de navegação

        const targetId = this.getAttribute('href').slice(1); // Obtém o ID da seção
        const targetSection = document.getElementById(targetId);

        // Rolagem suave para a seção
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Inicializa a ativação do link na página ao carregar
activateNavLink();
