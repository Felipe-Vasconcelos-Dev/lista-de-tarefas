const input = document.querySelector('.input-tarefa')
const btn = document.querySelector('.btn-tarefa')
const lista = document.querySelector('.tarefas')
const apagar = document.querySelector('.apagar')

input.addEventListener('keypress',(e)=>{

  if(e.keyCode === 13 ){
    if(!input.value) return;
  
  criaTarefa(input.value)
  

  
}
})
btn.addEventListener('click',(e)=>{
  if(!input.value) return;
  
  criaTarefa(input.value)
  
})

function CriaBtnpagar(li){
  
  
  const btn = document.createElement('button')
  btn.innerHTML = "Apagar"
  btn.setAttribute("class", "apagar")
  li.appendChild(btn)
 

  return btn

}  

document.addEventListener('click',(e)=>{
  const el = e.target
  if(el.classList.contains('apagar')){
    
    el.parentElement.remove()
    salvarTarefa()
  }

})
function criaTarefa(texto){
 let li =   criaLi(texto)
 

  CriaBtnpagar(li)
  lista.appendChild(li)
  input.value = ""
  salvarTarefa()
  input.focus();
    
}  

function criaLi(texto){
  let li = document.createElement('li')
  li.innerHTML = `${texto}  `

  
  return li
}
  function criaHora(){
    const data  = new Date(Date.now())
     return ` Time ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  
  }

function salvarTarefa(){
  const liTarefas = lista.querySelectorAll('li')
  console.log(liTarefas);
  
  const listaDeTarefas = []

  for(let tarefas of liTarefas){
    let tarefaTexto = tarefas.innerText
    tarefaTexto = tarefaTexto.replace('Apagar','').trim()
    listaDeTarefas.push(tarefaTexto)
    
  }
  
  const tarefasJson = JSON.stringify(listaDeTarefas)

  localStorage.setItem('tarefas', tarefasJson)

  console.log(tarefasJson);
}  

function adicionaTarefasStorage (){
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for(let tarefass of listaDeTarefas){
    criaTarefa(tarefass)

  }
}

adicionaTarefasStorage()




