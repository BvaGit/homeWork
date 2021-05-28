var calc = new Calculator();


var panel = document.querySelector(".panel");
var display = document.querySelector("#display");



function funcCalc(e){
    var symbol = ['1','2','3','4','5','6','7','8','9','0','/','*','-','+','(',')'];
    var btnOrder = e.target.id;
    console.log(e.target.id);
    
  
    
    switch(btnOrder){
        case 'answer':
            if(display.value.indexOf('|') > 0){
                var mod = display.value.split('|');
                console.log("---mod");
                display.value = calc.mod(mod[0], mod[1]);
            }else if(display.value.indexOf('^') > 0){
                var xy = display.value.split('^');
                display.value = calc.xDegY(+xy[0], +xy[1]);
            }else{
                display.value = calc.getSimpleExp(display.value);
            }
            break;
        case 'n!':
            display.value = calc.fact(display.value);
            break;
        case 'pi':
            display.value += calc.pi();
            break;
        case 'e':
            display.value += calc.e();
            break;
        case 'c':
            display.value = "";
            break;
        case 'erase':
            display.value = calc.delOneSymbol(display.value);
            break;
        case 'x2':
            display.value = calc.sq(display.value);
            break;
        case 'oneX':
            display.value = calc.oneDivX(display.value);
            break;
        case 'abs':
            display.value = calc.abs(display.value);
            break;
        case 'exp':
            display.value = calc.exp(display.value);
            break;
        case 'mod':
            if(display.value.indexOf('|') === -1 && display.value.length !== 0){
                display.value += '|'; 
            }
            break;
        case 'cube':
            display.value = calc.cube(display.value);
            break;
        case 'xY':
            if(display.value.indexOf('^') === -1 && display.value.length !== 0){
                display.value += '^'; 
            }
            break;
        case 'tenDegX':
            display.value = calc.tenDegX(display.value);
            break;
        default:
            if(symbol.indexOf(e.target.textContent) > 0)
            display.value += e.target.textContent;
            break;
    }

}

panel.addEventListener("click", funcCalc);

