
var titleElement = document.getElementById("title");
var descriptionElement = document.getElementById("description");
var priorityElement = document.getElementById("form").priority;
var buttonElement = document.getElementById("button");
var items = document.getElementById("items")

var arreglo= []

function Tarea(title, description, priority){

  this.title = title;
  this.description = description;
  this.priority = priority;
  this.isFinished = false;
}

buttonElement.addEventListener("click", function(){

  var title = titleElement.value;
  var description = descriptionElement.value;
  var priority = priorityElement.value;
  var x = new Tarea(title, description, priority);
  console.log(x);
  arreglo.push(x);
  renderElements();

});


// <h2>Titulo</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facilis tempora nobis placeat. Pariatur ex repellendus earum dicta illum hic voluptatibus blanditiis natus animi facere, neque nisi, quos perspiciatis placeat, incidunt amet possimus ipsum qui eaque quibusdam ipsa ea. Quaerat.</p>
// <span class="check">
//   <input type="checkbox">
//   <label for=""></label>
// </span>
// <button>Eliminar</button>
// </article>
// <article class="item">
// <h2>Titulo</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, at? Totam, quidem similique mollitia est odit, numquam repellat rerum sint.</p>
// <span class="check">
//   <input type="checkbox">
//   <label for=""></label>
// </span>
// <button onclick="eliminar()">Eliminar</button>



function renderElements(){
  items.innerHTML ="";
  for (var i = 0; i < arreglo.length; i++) {
    items.innerHTML += returnItem(arreglo[i],i)
  }
}

function returnItem(tarea,index) {
  return '<article class="item">'+
  '<h2>'+tarea.title+ '</h2>'+
  '<p>'+tarea.description+'</p>'+
  '<span class="check">'+
  '<input type="checkbox">'+
  '<label for=""></label>'+
  '</span>'+
  '<button onclick="eliminar('+index+')">Eliminar</button>'+
  '</article>'

}

function eliminar(index){
  console.log("estas eliminado" + arreglo[index].title);
  arreglo.splice(index,1);
  renderElements();
}
