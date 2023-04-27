// Implémenter ici les 4 classes du modèle.
function Drawing() {
    //Arttributs
    this.shapeList = new Map();

    this.addForm = function(key, shape){
      console.log('add '+key)
      this.shapeList.set(key,shape);
    }

    this.removeForm = function(key){
      this.shapeList.delete(key);
    }

    this.getForms = function(){
        return this.shapeList;
    }
}

function Shape(thickness,color){
    //Attributs
    this.color = color;
    this.thickness = thickness;

    this.getColor = function(){
        return this.color;
    }

    this.getThickness = function(){
        return this.thickness;
    }
}

function Rectangle(x, y, width, height, thickness, color) {
    //Attributs
    Shape.call(this,thickness,color);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    this.getInitX = function(){
      return this.x;
    }
  
    this.getInitY = function(){
      return this.y;
    }
  
    this.getFinalX = function(){
      return this.width;
    }
  
    this.getFinalY = function(){
      return this.height;
    }
}

function Line(x1, y1, x2, y2, thickness, color) {
    //Attributs
    Shape.call(this,thickness,color);
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;

    this.getInitX = function(){
      return this.x1;
    }

    this.getInitY = function(){
      return this.y1;
    }

    this.getFinalX = function(){
      return this.x2;
    }

    this.getFinalY = function(){
      return this.y2;
    }
}

// N'oubliez pas l'héritage !
