// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getThickness();
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
    ctx.stroke();
};
  
Line.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.strokeStyle = this.getColor();
  ctx.lineWidth = this.getThickness();
  ctx.beginPath();
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

function updateShapeList(shape, index){
  document.getElementById('shapeList').appendChild(toHTML(shape,index));
}
  
function toHTML(shape, index){
  let li = document.createElement('li');
  li.id = "liRemove"+index;
  li.style.color = shape.color;
  if(shape.constructor === Rectangle){
    li.innerHTML = "Rect";
  }else{
    li.innerHTML = "Line";
  }
  li.innerHTML += `<button type="button" class="btn btn-default" id=remove${index}>
	                  <span class="glyphicon glyphicon-remove-sign"></span>
                  </button>`

  return li
}