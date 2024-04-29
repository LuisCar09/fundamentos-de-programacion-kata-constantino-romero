const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

let contenedor = document.getElementById("contenedorPreguntas")
function imprimePregunta(pregunta) {
  let html = ''
  let title = imprimeTitulo(pregunta);
  let resp = imprimeTodasLasRespuestas(pregunta)
  html += title;
   
  console.log(resp);
 
  // contenedor.appendChild(resp)

   resp.forEach((item)=>{
    item.forEach(htmlElement =>{
      contenedor.appendChild(htmlElement)
    })
   })

}

function imprimeTitulo(pregunta) {
  let parrafo = document.createElement('p')
  parrafo.textContent = pregunta.titulo
  
  return parrafo
}
imprimeTodasLasRespuestas(pregunta)
function imprimeTodasLasRespuestas(pregunta) {
  
  return pregunta.respuestas.map(respuesta => {
    return imprimeUnaRespuesta(respuesta)
  });
}

function imprimeUnaRespuesta(respuesta) {
  
  
  return [imprimeLabel(respuesta),imprimeInput(respuesta)]
}

function imprimeLabel(respuesta) {
  let label = document.createElement('label')
  label.setAttribute('for',respuesta.id)
  label.textContent = respuesta.label
  
  return label
}

function imprimeInput(respuesta) {
  let input = document.createElement('input')
  input.setAttribute('id',respuesta.id)
  input.setAttribute('type','radio')
  input.setAttribute('name', respuesta.name)
  input.setAttribute('value',respuesta.value)
 
  return input
}




imprimePregunta(pregunta)


// let label = document.createElement('label')
  // let input = document.createElement('input')
  // let response = ''
  // pregunta.respuestas.forEach(respuesta => {
  //   label.setAttribute('for',respuesta.id)
  //   label.textContent = respuesta.label
  //   input.setAttribute('id',respuesta.id)
  //   input.setAttribute('type','radio')
  //   input.setAttribute('name', respuesta.name)
  //   input.setAttribute('value',respuesta.value)

  //   response += label
  //   response += input
    
  // });
  
  // return response