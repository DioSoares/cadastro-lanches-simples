// Seleciona o formulário e o botão de envio
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const grade = document.getElementById('tabLanchonete')

// Adiciona um ouvinte de evento para o botão de envio
submitButton.addEventListener('click', (event) => {
  // Previne o envio do formulário
  event.preventDefault();

  // Seleciona os campos do formulário
  const nomeInput = document.querySelector('#nome');
  const emailInput = document.querySelector('#email');
  const telefoneInput = document.querySelector('#telefone');
  const enderecoInput = document.querySelector('#endereco');
  const alimentosSelect = document.querySelector('#alimentos');
  const bebidasSelect = document.querySelector('#bebidas');

  // Verifica se todos os campos foram preenchidos
  if (!nomeInput.value || !emailInput.value || !telefoneInput.value || !enderecoInput.value || !alimentosSelect.value || !bebidasSelect.value) {
    alert('Por favor, preencha todos os campos do formulário!');
    return;
  }

  // Cria um objeto com os dados do formulário
  const formData = {
    nome: nomeInput.value,
    email: emailInput.value,
    telefone: telefoneInput.value,
    endereco: enderecoInput.value,
    alimentos: alimentosSelect.value,
    bebidas: bebidasSelect.value
  };

  // Recupera os dados do formulário salvos na Local Storage
  let formList = JSON.parse(localStorage.getItem('formData')) || [];

  console.log(formList)
  // Adiciona os dados do formulário ao array
  formList.push(formData);

  // Salva o array na Local Storage
  localStorage.setItem('formData', JSON.stringify(formList));

  // Envia o formulário
  window.alert('Cadastrado com Sucesso!')
  form.submit();
});


function carregarGrade() {
  let formList = JSON.parse(localStorage.getItem('formData')) || [];
  formList.forEach(element => {
    criarLinha(element)

  });
}
function criarLinha(dado) {

  const linha = document.createElement("tr")

  const nome = document.createElement("td")
  nome.innerText = dado.nome
  linha.appendChild(nome)

  const email = document.createElement("td")
  email.innerText = dado.email
  linha.appendChild(email)

  const telefone = document.createElement("td")
  telefone.innerText = dado.telefone
  linha.appendChild(telefone)

  grade.appendChild(linha)
}

