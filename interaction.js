// La création d'un Dnd requière un canvas et un interacteur. 
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ. 
function DnD(canvas, interactor) { 
  // Définir ici les attributs de la 'classe' 
  this.xInit = 0; 
  this.yInit = 0; 
  this.xFinal = 0; 
  this.yFinal = 0; 
  this.pressionFirst = false;
  
  // Developper les 3 fonctions gérant les événements 
  function maFctGérantLaPression(evt){ 
    let xy = getMousePosition(this,evt);
    this.xInit = xy.x;
    this.yInit = xy.y;
    this.pressionFirst = true;
    console.log("Pression x:"+this.xInit+" y:"+this.yInit);
  } 
  
  function maFctGérantLeDéplacement(evt){ 
    if(this.pressionFirst){
      let xy = getMousePosition(this,evt);
      this.xFinal = xy.x;
      this.yFinal = xy.y;
      console.log("Déplacement x:"+this.xFinal+" y:"+this.yFinal);
    }
  } 

  function maFctGérantLeRelâchement(evt){
    if(this.pressionFirst){
      let xy = getMousePosition(this,evt);
      this.xFinal = xy.x;
      this.yFinal = xy.y;
      this.pressionFirst = false;
      console.log("Relachement x:"+this.xFinal+" y:"+this.yFinal);
    }
  }
  
  // Associer les fonctions précédentes aux évènements du canvas. 
  canvas.addEventListener('mousedown', maFctGérantLaPression, false); 
  canvas.addEventListener('mousemove', maFctGérantLeDéplacement, false); 
  canvas.addEventListener('mouseup', maFctGérantLeRelâchement, false); 
}; 
  
// Place le point de l'événement evt relativement à la position du canvas. 
function getMousePosition(canvas, evt) { 
  var rect = canvas.getBoundingClientRect(); 
  return { x: evt.clientX - rect.left, y: evt.clientY - rect.top }; 
};