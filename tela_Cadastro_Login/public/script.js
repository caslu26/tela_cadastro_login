// Variáveis para armazenar os itens do menu e o pedido
const menuItens = [
  { nome: 'Hambúrguer-tradicional', preco: 15.00, imagem: 'imagens/burguer.jpeg' },
  { nome: 'Hambúrguer-duplo', preco: 25.00, imagem:'imagens/burguer.jpeg' },
  { nome: 'Hamburguer-triplo', preco: 30.00, imagem: 'imagens/burguer.jpeg' },
  { nome: 'Batata-pequena', preco: 20.00, imagem: 'imagens/fritas.jpeg' },
  { nome: 'Batata-media', preco: 30.00, imagem: 'imagens/fritas.jpeg' },
  { nome: 'batata-grande', preco: 40.00, imagem: 'imagens/fritas.jpeg' },
  { nome: 'Refrigerante-pequeno', preco: 5.00, imagem: 'imagens/refri.jpeg' },
  { nome: 'Refrigerante-medio', preco: 10.00, imagem: 'imagens/refri.jpeg' },
  { nome: 'Refrigerante-grande', preco: 15.00, imagem: 'imagens/refri.jpeg' },
  
  // Adicione mais itens de menu aqui
];
const pedidoItens = [];

// Função para adicionar um item ao pedido
function adicionarAoPedido(item) {
  pedidoItens.push(item);
  atualizarPedido();
}

// Função para atualizar a lista de pedidos na página
function atualizarPedido() {
  const listaPedido = document.getElementById('lista-pedido');
  listaPedido.innerHTML = '';

  pedidoItens.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listaPedido.appendChild(li);
  });
}

// Função para calcular o total do pedido
function calcularTotal() {
  let total = 0;
  pedidoItens.forEach(item => {
      const menuItem = menuItens.find(menuItem => menuItem.nome === item);
      if (menuItem) {
          total += menuItem.preco;
      }
  });
  return total.toFixed(2);
}

// Evento de clique para os botões "Pedir" dos itens do menu
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');

  menuItens.forEach(item => {
      const divItem = document.createElement('div');
      divItem.classList.add('item');

      const imagemItem = document.createElement('img');
      imagemItem.src = item.imagem;
      imagemItem.alt = item.nome;

      const nomeItem = document.createElement('h2');
      nomeItem.textContent = item.nome;

      const precoItem = document.createElement('p');
      precoItem.textContent = `Preço: R$ ${item.preco.toFixed(2)}`;

      const botaoPedir = document.createElement('button');
      botaoPedir.textContent = 'Adicionar ao carrinho';
      botaoPedir.addEventListener('click', () => {
          adicionarAoPedido(item.nome);
      });

      divItem.appendChild(imagemItem);
      divItem.appendChild(nomeItem);
      divItem.appendChild(precoItem);
      divItem.appendChild(botaoPedir);
      menu.appendChild(divItem);
  });

  // Evento de clique para o botão "Enviar Pedido"
  const enviarPedidoBtn = document.getElementById('enviar-pedido-btn');
  enviarPedidoBtn.addEventListener('click', () => {
      const total = calcularTotal();
      const mensagem = `Gostaria de fazer um pedido no valor de R$ ${total}. Meu pedido é: ${pedidoItens.join(', ')}`;
      const numeroWhatsApp = '11948391523'; // Substitua pelo seu número de WhatsApp
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(urlWhatsApp, '_blank');
  });

  // Inicializa a página com a lista de pedidos vazia
  atualizarPedido();
});
