var {aEven, decart, getPosSum, getExp,
    study, valid, getSumEven,
    getPrimeNumber, getSquareNumberLine,
    getSquareNumberBin, getFact,
    getSum, getMirrorNumber, validArr,
    arrMinMax, getOddSumIndexElem,
    getArrReverse, getSwap, bubbleSort} = require('./script');

describe("aEven", function(){
    it("should be defined", function(){
        expect(aEven).toBeDefined();
    });
    it("multi two arg a and b", function(){
        expect(aEven(2,3)).toBe(6);
    });
    it("sum two arg a and b", function(){
        expect(aEven(3,2)).toBe(5);
    });
});

describe("decart", function(){
    it("should be defined",function(){
        expect(decart).toBeDefined();
    });
    it("Проверка на undefined аргумента", function(){
        expect(decart()).toBe("Нет данных");
    });
    it("x>0 && y>0", function(){
        expect(decart(1,1)).toBe("Точка 1:1 Принадлежит I четверти");
    });
    it("x<0 && y>0", function(){
        expect(decart(-1,1)).toBe("Точка -1:1 Принадлежит II четверти");
    });
    it("x<0 && y<0", function(){
        expect(decart(-1,-1)).toBe("Точка -1:-1 Принадлежит III четверти");
    });
    it("x>0 && y<0", function(){
        expect(decart(1,-1)).toBe("Точка 1:-1 Принадлежит IV четверти");
    });
    it("x===0 && y===0", function(){
        expect(decart(0,0)).toBe("Точка 0:0 Лежит в начале координат");
    });
    it("x===0 && y>0", function(){
        expect(decart(0,1)).toBe("Точка 0:1 Лежит в на оси Y");
    });
    it("x>0 && y===0", function(){
        expect(decart(1,0)).toBe("Точка 1:0 Лежит в на оси X");
    });
    it("x<0 && y===0", function(){
        expect(decart(-1,0)).toBe("Точка -1:0 Лежит в на оси X");
    });
});

describe("getPosSum", function(){
    it("typeof (a)===string || typeof (b)===string || typeof (c)===string", function(){
        expect(getPosSum("jl",1,1)).toBe("Введите число");
    });
    it("a===undefined || b===undefined || c===undefined", function(){
        expect(getPosSum()).toBe("Введены не все значения!");
    });
    it("a>=0 && b>=0 && c>=0", function(){
        expect(getPosSum(2,2,2)).toBe("Сумма положительных чисел 6");
    });
    it("a<=0 && b>=0 && c>=0", function(){
        expect(getPosSum(-2,2,2)).toBe("Сумма положительных чисел 4");
    });
    it("a>=0 && b<=0 && c>=0", function(){
        expect(getPosSum(2,-2,2)).toBe("Сумма положительных чисел 4");
    });
    it("a>=0 && b<=0 && c<=0", function(){
        expect(getPosSum(2,2,-2)).toBe("Сумма положительных чисел 4");
    });
});

describe("getExp", function(){
    it("typeof (a)===string || typeof (b)===string || typeof (c)===string", function(){
        expect(getExp("jl",1,1)).toBe("Введите число");
    });
    it("a===undefined || b===undefined || c===undefined", function(){
        expect(getExp()).toBe("Введены не все значения!");
    });
    it("umn>sum", function(){
        expect(getExp(2,2,2)).toBe(11);
    });
    it("sum>umn", function(){
        expect(getExp(2,1,2)).toBe(8);
    });
    it("umn === sum", function(){
        expect(getExp(0,0,0)).toBe(0);
    });
});

describe("study", function(){
    it("should be defined",function(){
        expect(study).toBeDefined();
    });
    it("arg===undefined", function(){
        expect(study()).toBe("Введите данные");
    });
    it("typeof arg === 'string'", function(){
        expect(study("dddd")).toBe("Введите число");
    });
    it("arg>=0 && arg<=19", function(){
        expect(study(5)).toBe("Рейтинг: 5 Оценка: F")
    });
    it("arg < 0 || arg > 100", function(){
        expect(study(-1)).toBeFalsy();
    });
    it("arg < 0 || arg > 100", function(){
        expect(study(101)).toBeFalsy();
    });
});

describe("valid", function(){
    it("arg === undefined || typeof arg === 'string'", function(){
        expect(valid()).not.toBeFalsy();
    });
    it("arg === undefined || typeof arg === 'string'", function(){
        expect(valid("str")).not.toBeFalsy();
    });
});

describe("getSumEven", function(){
    it("should be defined",function(){
        expect(getSumEven).toBeDefined();
    });
    /*it("valid(arg) should be called", function(){
        var valid = jest.fn();
        getSumEven();
        expect(valid).toHaveBeenCalled();
    });*/
    it("Validator", function(){
        expect(getSumEven("str")).toBe("Введены некорректные данные");
    });
    it("sum", function(){
        expect(getSumEven(10)).toBe(30);
    });
});

describe("getPrimeNumber", function(){
    it("Prime Number", function(){
        expect(getPrimeNumber(7)).toBe("Число 7 простое");
    });
    it("No Prime Number", function(){
        expect(getPrimeNumber(8)).toBe("Число 8 не является простым");
    });
});

describe("getSquareNumberLine", function(){
    it("should be defined",function(){
        expect(getSquareNumberLine).toBeDefined();
    });
    it("arg<0", function(){
        expect(getSquareNumberLine(-1)).toBe("Введены некорректные данные");
    });
    it("Square Number", function(){
        expect(getSquareNumberLine(64)).toBe(8);
    });
});

describe("getSquareNumberBin", function(){
    it("should be defined",function(){
        expect(getSquareNumberBin).toBeDefined();
    });
    it("arg<0", function(){
        expect(getSquareNumberBin(-1)).toBe("Введены некорректные данные");
    });
    it("Square Number Bin", function(){
        expect(getSquareNumberBin(100)).toBe(10);
    });
});

describe("getFact", function(){
    it("should be defined",function(){
        expect(getFact).toBeDefined();
    });
    it("fact", function(){
        expect(getFact(3)).toBe(6);
    });
});

describe("getSum", function(){
    it("should be defined",function(){
        expect(getSum).toBeDefined();
    });
    it("getSum", function(){
        expect(getSum(5)).toBe(15);
    });
});

describe("getMirrorNumber", function(){
    it("should be defined",function(){
        expect(getMirrorNumber).toBeDefined();
    });
    it("Mirror Number", function(){
        expect(getMirrorNumber(15)).toBe(51);
    });
});


describe("validArr", function(){
    it("!Array.isArray(arr) || arr.length === 0 || arr === undefined", function(){
        expect(validArr("str")).not.toBeFalsy();
        expect(validArr([])).not.toBeFalsy();
        expect(validArr()).not.toBeFalsy();
    });
});

describe("arrMinMax", function(){
    it("should be defined",function(){
        expect(arrMinMax).toBeDefined();
    });
    it("array Min Max", function(){
        var arr = [-5,3,-10,8,-1,7,-5];
        var obj = { arr: [-5, 3, -10, 8, -1, 7,  -5],
          elemMin: -10,
          indexMin: 2,
          elemMax: 8,
          indexMax: 3};
          expect(arrMinMax(arr)).toEqual(obj);
    });
});

describe("getOddSumIndexElem", function(){
    it("should be defined",function(){
        expect(getOddSumIndexElem).toBeDefined();
    });
    it("Odd Sum Index Elem", function(){
        var arr = [-5,3,-10,8,-1,7,-5];
        var obj = {arr: [-5, 3, -10, 8, -1, 7,  -5],
          oddElem: 18,
          oddCount: 3};
          expect(getOddSumIndexElem(arr)).toEqual(obj);
    });
});

describe("getArrReverse", function(){
    it("should be defined",function(){
        expect(getArrReverse).toBeDefined();
    });
    it("Array reverse", function(){
        var arr = [5,3,10,2];
        var arrRes = [2,10,3,5];
        expect(getArrReverse(arr)).toEqual(arrRes);
    });
});

describe("getSwap", function(){
    it("should be defined",function(){
        expect(getSwap).toBeDefined();
    });

    it("Swap", function(){
        var arr = [1,2,3,4]; 
        var arrRes = [3,4,1,2];
        expect(getSwap(arr)).toEqual(arrRes);
    });
});

describe("bubbleSort", function(){
    it("should be defined",function(){
        expect(bubbleSort).toBeDefined();
    });
    it("Bubble", function(){
        var arr = [5,9,1,6,-2,3,15];
        var resArr = [-2,1,3,5,6,9,15];
        expect(bubbleSort(arr)).toEqual(resArr);
    });
});