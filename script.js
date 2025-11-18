document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // 1. MENU HAMBURGER E RESPONSIVIDADE DO HEADER
    // =======================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('header');
    
    // Abrir/fechar menu mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link (em mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Esconder/Mostrar Header ao rolar
    let ultimaPosicaoScroll = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const posicaoAtualScroll = window.scrollY;

        if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > 200) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        ultimaPosicaoScroll = posicaoAtualScroll;
    });


    // =======================================================
    // 2. INICIALIZAÇÃO DO SWIPER JS (Carrossel Definitivo)
    // =======================================================
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper", {
            loop: true, 
            centeredSlides: true,
            
            autoplay: {
                delay: 6000, // 6 segundos
                disableOnInteraction: false, 
            },

            // Navegação (Botões)
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Paginação (Pontos/Indicadores)
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            // Configuração Responsiva (1 slide por vez)
            slidesPerView: 1, 
            spaceBetween: 10,
        });
    }


    // =======================================================
    // 3. BOTÃO "VOLTAR AO TOPO"
    // =======================================================
    const btnVoltarTopo = document.getElementById('voltarTopo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btnVoltarTopo.style.display = 'block';
        } else {
            btnVoltarTopo.style.display = 'none';
        }
    });

    btnVoltarTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});