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


// A função que será executada ao clicar nos links de navegação
// A função que será executada ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Obtém o elemento de destino baseado no href
      const targetElement = document.querySelector(this.getAttribute("href"));
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      // Rolagem suave ajustando a altura da navbar
      window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: 'smooth'
      });
  });
});

// A função para verificar a visibilidade das seções durante o scroll
function onScroll() {
  const sections = document.querySelectorAll('section');  // Seleciona todas as seções
  const links = document.querySelectorAll('.navbar a');   // Seleciona todos os links da navbar

  // Primeiro remove a classe 'active' de todos os links
  links.forEach(link => link.classList.remove('active'));

  sections.forEach(section => {
      const rect = section.getBoundingClientRect(); // Obtém a posição da seção na tela
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`.navbar a[href="#${sectionId}"]`); // Link correspondente à seção

      // Verifica se a seção está visível na tela
      if (rect.top <= 0 && rect.bottom >= 0) {
          link.classList.add('active'); // Adiciona a classe active
      }
  });
}

// Adiciona o ouvinte de evento de rolagem
window.addEventListener('scroll', onScroll);

// Chama a função onScroll para garantir que a navegação seja ajustada ao carregar a página
onScroll();

