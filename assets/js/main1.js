const input = document.querySelector('.input-tarefa')
const btn = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

btn.addEventListener('click',()=>{
     if(!input.value){
         return
     }
     criaTarefa(input.value)
    })
    
    input.addEventListener('keypress',(e)=>{
        if(e.keyCode === 13){
            criaTarefa(input.value)
    }

})

document.addEventListener('click',(e)=>{
    const el = e.target
    if(el.classList.contains('Apagar')){
        el.parentElement.remove()
        salvarTarefa()
    }

})


const  criaTarefa =(texto)=>{
    const li =  criaLi(`${texto} `)
    const btn = CriaApagar()
    li.appendChild(btn)
    tarefas.appendChild(li)
    input.value=""
    salvarTarefa()
        
}
const criaLi = (texto)=>{
    const li =  document.createElement('li')
    li.innerHTML = texto
    return li
}

const CriaApagar = ()=>{

    const btn = document.createElement('button')
    btn.innerHTML = "Apagar"
    btn.setAttribute('class','Apagar')
    return btn

}

const salvarTarefa = ()=>{
    const itensTarefa = tarefas.querySelectorAll('li')
    const arrayTarefas = []
    for(let tarefa of itensTarefa){
        const itens = tarefa.innerText.replace('Apagar','').trim()
        arrayTarefas.push(itens)
    }
    const tarefasJson = JSON.stringify(arrayTarefas)
    localStorage.setItem('MinhaLista', tarefasJson)
}

const getStorage = ()=>{
  const itens = localStorage.getItem('MinhaLista');
   const itensparce =  JSON.parse(itens)
  for(let osItens of itensparce){

      criaTarefa(osItens)
      
  }
}

getStorage()


