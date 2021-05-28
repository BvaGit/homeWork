var ccT = document.querySelector(".control-color__title");
var contColor = document.querySelector(".control-color");
var contEdit = document.querySelector(".control-color__edit");
var countColorPal = document.querySelector(".control-color__palette");
var range = document.querySelector(".control-panel__range");
var widthLine = document.querySelector(".control-panel__width");


class Component{

    constructor(selector){
        this.sel = document.querySelector(selector);
        
    }

}

class Painter extends Component{
    constructor(options){
        super(options.selector);
        this.sel.setAttribute('width', options.width);
        this.sel.setAttribute('height', options.height); 
    }

    draw(){
        let ctx = this.sel.getContext('2d');
        let canX;
        let canY;
        let draw = false;

        this.sel.addEventListener("mousedown", function(e){
            canX = e.layerX;
            canY = e.layerY;
            draw = true;
        });

        this.sel.addEventListener("mouseup", function(e){
            draw = false;
        });

        console.log(this.sel);
        this.sel.addEventListener("mousemove", function(e){
            if(draw){
                var x = e.layerX;
                var y = e.layerY;
                ctx.fillStyle = addColor;
                ctx.fillRect(x-range.value, y-range.value, range.value, range.value);
                ctx.lineCap = "round";
                ctx.fill();
                var canvasContents = this.sel.toDataURL(); // a data URL of the current canvas image
                var data = { image: canvasContents, date: Date.now() };
                var string = JSON.stringify(data);
                console.log(string);
            }
        });

    }
}

class Move extends Component{

    constructor(options){
        super(options.selector);
        this.sel2 = document.querySelector(options.selector2);
        
    }
    
    move(){
        var sel2 = this.sel2;
        var xDrag = null;
        var yDrag = null;
        var drag = false;

        this.sel.addEventListener("mousedown", function (e){
            xDrag = e.layerX;
            yDrag = e.layerY;
            drag = true;
        
          
        });
       
        this.sel.addEventListener("mouseup", function(){
            drag = false;
        });
        
        document.addEventListener("mousemove", function(e){
            if(drag){
                sel2.style.left = (e.clientX - xDrag) + "px";
                sel2.style.top = (e.clientY - yDrag) + "px";
            }
        });
    }


}

const painter = new Painter({
    selector:'#idCanvas',
    width: '600',
    height: '400'
});

painter.draw();

const moveColor = new Move({
    selector: '.control-color__title',
    selector2: '.control-color'
});
moveColor.move();

const movePanel = new Move({
    selector: '.control-panel__title',
    selector2: '.control-panel'
});

movePanel.move();


widthLine.style.height = range.value + "px";
range.addEventListener("input", ()=>{
    widthLine.style.height = range.value + "px";
});


function selColor(){
    var contColorItem = document.querySelectorAll(".control-color__item");
    contColorItem.forEach(function(item){
        item.addEventListener("click", function(){
            addColor = item.style.backgroundColor;
        });
    });
}


var addColor = null;
contEdit.addEventListener("change", function(){
    addColor = contEdit.value;
    var div = document.createElement("div");
    div.classList.add("control-color__item");
    div.style.backgroundColor = addColor;
    countColorPal.append(div);
    selColor();
});











