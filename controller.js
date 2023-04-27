
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.lastId = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick = () => {
		this.currEditingMode = editingMode.rect;
	}
	document.getElementById('butLine').onclick = () => {
		this.currEditingMode = editingMode.line;
	}
	document.getElementById('spinnerWidth').onchange = (e) => {
		this.currLineWidth = e.target.value;
	}
	document.getElementById('colour').onchange = (e) => {
		this.currColour = e.target.value;
	}

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
		if (this.currEditingMode===editingMode.rect) {
			this.currentShape = new Rectangle();
		}else{
			this.currentShape = new Line();
		}
		drawing.paint(ctx);
	}

	this.onInteractionUpdate = function(dnd){
		if (this.currEditingMode===editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, dnd.xFinal - dnd.xInit, dnd.yFinal - dnd.yInit, this.currLineWidth, this.currColour);
		}else{
			this.currentShape = new Line(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}

	this.onInteractionEnd = function(dnd){
		let index = this.generateId()
		drawing.addForm(index, this.currentShape);
		drawing.paint(ctx);
		updateShapeList(this.currentShape,index);
		document.getElementById('remove'+index).onclick = (e) =>{
			drawing.removeForm(index);
			document.getElementById('liRemove'+index).remove();
			drawing.paint(ctx);
		}
	}

	this.generateId = function(){
		this.lastId++;
		return this.lastId;
	}

};
