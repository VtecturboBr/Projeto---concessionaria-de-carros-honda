// Capturando os elementos
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

// Variáveis de controle
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função base para atualizar os indicadores
function setSlider() {
    // Remove as classes "active" dos itens velhos
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    
    // Adiciona o active nos dots e muda a numeração com o zero na frente (ex: 01, 02)
    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

// Botão da Direita (Avançar)
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1); // Garante que a animação vem da direita
    
    // Lógica IF/ELSE em linha: Se passou do último, volta para o 0
    active = active + 1 > lastPosition ? 0 : active + 1;
    
    setSlider();
    items[active].classList.add('active'); // Adiciona a classe ativa no novo carro
}

// Botão da Esquerda (Voltar)
prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1); // Garante que a animação vem da esquerda
    
    // Lógica IF/ELSE em linha: Se for menor que 0, vai pro último
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    
    setSlider();
    items[active].classList.add('active');
}