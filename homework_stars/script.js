

function shapeDot(shape, m){ // shape - номер фигуры, m - размер фигуры
    if(shape===undefined || m===undefined){
        shape=1;
        m=7;
    }
    if(isNaN(shape) || isNaN(m)){
        shape=1;
        m=7;
    }
    var dot = "";
    if(shape == 2){
        for(var i=1; i<=m; i++){
            if(i==1){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i==m){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i>1 && i<m){
                for(var y=1; y<=m; y++){
                    if(y==1){
                        dot += ".";
                    }else if(y==m){
                        dot += ".";
                    }else{
                        dot +=" ";
                    }
                    
                }
                console.log(dot);
                dot = "";
            }
            
        }
    }else if(shape == 3){ 
       var count3 = m-1;
        for(var i=1; i<=m; i++){
            if(i==1){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }if(i==m){
                dot = ".";
                console.log(dot)
                dot = "";
            }else if(i>1 && i<m){
                for(var y=1; y<=count3; y++){
                    if(y==1){
                        dot += ".";
                    }else if(y == count3){
                        dot += ".";
                    }else{
                        dot += " ";
                    }

                }
                console.log(dot);
                count3--;
                dot = "";

            }

        }
    }else if(shape==4){
        for(var i=1; i<=m; i++){
            if(i===1){
                dot += ".";
                console.log(dot);
                dot = "";
            }else if(i===m){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i>1 && i<m){
                for(var y=1; y<=i; y++){
                    if(y===1){
                        dot += ".";
                    }else if(y===i){
                        dot += ".";
                    }else if(y>1 && y<i){
                        dot += " ";
                    }
                }
                console.log(dot);
                dot = "";
            }

        }
        

    }else if(shape==5){
        var count5 = m-1;
        for(var i=1; i<=m; i++, count5--){
            if(i===1){
                for(var y=1; y<=m; y++){
                   if(y<m){
                       dot += " ";
                   }else if(y===m){
                       dot += ".";
                   }
                }
                console.log(dot);
                dot = "";
            }else if(i===m){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i>1 && i<m){
                for(var y=1; y<=m; y++){
                    if(y<=count5){
                        dot += " ";
                    }else if(y===count5+1){
                        dot += ".";
                    }else if(y===m){
                        dot += ".";
                    }else if(y>count5+1 && y<m){
                        dot += " ";
                    }
                }
                console.log(dot);
                dot = "";
            }
        }
        
    }else if(shape==6){
        var count6 = 0;
        for(var i=1; i<=m; i++, count6++){
            if(i===1){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i===m){
                for(var y=1; y<=m; y++){
                    if(y<m){
                        dot += " ";
                    }else if(y===m){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
            }else if(i>1 && i<m){
                for(var y=1; y<=m; y++){
                    if(y<=count6){
                        dot += " ";
                    }else if(y===count6+1){
                        dot += ".";
                    }else if(y>count6+1 && y<m){
                        dot += " ";
                    }else if(y===m){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
            }
        }

    }else if(shape==7){
        var count7 = 0;
        var countMax7 = m-1;
        var countX7 = Math.round(m/2);
        for(var i=1; i<=m; i++){
            if(i<countX7){
                if(i===1){
                    for(y=1; y<=m; y++){
                        if(y===1){
                            dot += ".";
                        }else if(y===m){
                            dot += ".";
                        }else if(y>1 && y<m){
                            dot += " ";
                        }
                    }
                    console.log(dot);
                    dot = "";
                }else if(i===countX7){
                    for(var y=1; y<=m; y++){
                        if(y<=count7){
                            dot += " ";
                        }else if(y===count7+1){
                            dot += ".";
                        }
                    }
                    console.log(dot);
                    dot = "";
                    
                }else if(i>1 && i<countX7){
                    for(var y=1; y<=m; y++){
                        if(y<=count7){
                            dot += " ";
                        }else if(y===count7+1){
                            dot += ".";
                        }else if(y>count7+1 && y<=countMax7){
                            dot += " ";
                        }else if(y===countMax7+1){
                            dot += ".";
                        }
                    }
                    console.log(dot);
                    dot = "";
                }
                count7++;
                countMax7--;
            }
            
            if(i>countX7){
                count7-- ;
                countMax7++;
                for(var y=1; y<=m; y++){
                    
                    if(y<=count7){
                        dot += " ";
                    }else if(y===count7+1){
                        dot += ".";
                    }else if(y>count7+1 && y<=countMax7){
                        dot += " ";
                    }else if(y===countMax7+1){
                        dot += ".";
                    }
                }
                
                console.log(dot)
                dot = "";
            }

        }
    }else if(shape==8){
        var countTr = Math.round(m/2);
        var count8 = 0;
        var countMax8 = m;
        for(var i=1; i<=countTr; i++, count8++,countMax8--){

            if(i===1){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i===countTr){
                for(var y=1; y<=m; y++){
                    if(y<=count8){
                        dot += " ";
                    }else if(y===count8+1){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
            }else if(i>1 && i<countTr){
                for(var y=1; y<=m; y++){
                    if(y<=count8){
                        dot += " ";
                    }else if(y===count8+1){
                        dot += ".";
                    }else if(y>count8+1 && y<countMax8){
                        dot += " ";
                    }else if(y===countMax8){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
            }
        }
    }else if(shape==9){
        var countTr9 = Math.round(m/2);
        var count9 = countTr9-1;
        var countMax9 = 1;
        for(var i=1; i<=m; i++, countMax9++){
            if(i===countTr9){
                for(y=1; y<=m; y++){
                    if(y<=count9){
                        dot += " ";
                    }else if(y===count9+1){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
            }else if(i===m){
                for(var y=1; y<=m; y++){
                    dot += ".";
                }
                console.log(dot);
                dot = "";
            }else if(i<countTr9){
                dot += "";
                console.log(dot);
            }else if(i>countTr9 && i<m){
                count9--;
                for(var y=1; y<=m; y++){
                    if(y<=count9){
                        dot += " ";
                    }else if(y===count9+1){
                        dot += ".";
                    }else if(y>count9+1 && y<countMax9){
                        dot += " ";
                    }else if(y===countMax9){
                        dot += ".";
                    }
                }
                console.log(dot);
                dot = "";
                
                
            }
            

        }
    }else if(shape==1){
        for(var i = 1; i<=7; i++){
    
            for(var y=1; y<=7; y++){
                dot += ".";
            } 
            console.log(dot);
            dot = "";
         }
    }
    
}

shapeDot(2,7); // shape - номер фигуры, m - размер фигуры

