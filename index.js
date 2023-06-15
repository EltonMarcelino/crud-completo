import { tarefas } from "./database.js";

function cardTarefa(element) {
  const deleted = document.createElement("button");
  //const atualizar = document.createElement("button");
  const li = document.createElement("li");
  const p = document.createElement("p");
  //const inputAtualizar = document.createElement("input");

  deleted.innerText = "Excluir";
  deleted.dataset.id = element.id;// id botao delete
  deleted.classList.add("delete__button");

  //atualizar.innerText = "Atualizar";
  //atualizar.dataset.id = element.id;
  //atualizar.classList.add("atualizar__button");

  //inputAtualizar.placeholder = "Novo value";
  //inputAtualizar.dataset.id = element.id;
  //inputAtualizar.classList.add("input_atualizar");

  p.innerText = element.tarefa;
  p.classList.add('paragrafo')
  li.classList.add("list__tarefas");

  li.appendChild(p);
  li.appendChild(deleted);
  //li.appendChild(atualizar);
  //li.appendChild(inputAtualizar);
  return li;
}




function renderizar(array) {
  const lista = document.querySelector("#lista");//buscando ul
  lista.innerHTML = "";
  array.forEach((element) => {
    const tarefa = cardTarefa(element);// criando elemento
    lista.appendChild(tarefa);
  });
  deleteTarefa(array);//chamar função deletar
  //atualizarTarefa(array);
}
renderizar(tarefas);






function deleteTarefa(array) {
  const deletar = document.querySelectorAll(".delete__button");

  deletar.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.dataset.id;//pegando id do botao
      const findTarefa = array.findIndex((tarefa) => tarefa.id === Number(id)); //comparar se id da tarefa é igual o id evento
      const removeItem = array.splice(findTarefa, 1);//remover
      renderizar(array);
    });
  });
}





function addTarefa(array) {
  const input = document.querySelector("#input");
  const buttonAdd = document.querySelector("#add");
  input.classList.add("add__input");
  input.name = "tarefa";
  let newarray = {};

  buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    newarray.id = array.length + 1;
    newarray.tarefa = input.value;
    input.value = ""
    array.push(newarray);
    newarray = {};
    renderizar(array);
  });
}
addTarefa(tarefas);

/*function atualizarTarefa(array) {
  const input = document.querySelectorAll(".input_atualizar");
  const atualizar = document.querySelectorAll(".atualizar__button");
  const p = document.querySelectorAll('.paragrafo');

  const atualizarLista = {};
  let count = 0;
  atualizar.forEach(button => {
    button.addEventListener("click", (event) => {
    event.preventDefault();
    const id = event.target.dataset.id;
    alert(id)
    atualizarLista.id = array.id;
    atualizarLista.tarefa = input.value;
    const findTarefa = array.findIndex((tarefa) => tarefa.id === Number(id));
    if ((input.value = "")) {
      count++;
    }
    if (count !== 0) {
      count = 0;
      return alert("preencha o campo");
    }
    
    renderizar(array);
  });
  })
  
  
}*/
