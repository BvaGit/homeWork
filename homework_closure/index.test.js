
const { expect } = require("@jest/globals");
var {cinema, getPlus, getPostCommitAuthor, complexFunction, cashe} = require("./script");

describe("cinema",function(){
    it("определения", function(){
        expect(cinema).toBeDefined();
    });
    it("arguments[i] === 50", function(){
        expect(cinema(25,50)).toBe("YES");
    });
    it("arguments[i] === 50", function(){
        expect(cinema(50)).toBe("NO");
    });
    it("arguments[i] === 100", function(){
        expect(cinema(25,50,100)).toBe("NO");
    });
    it("arguments[i] === 100", function(){
        expect(cinema(25,50,50,100)).toBe("YES");
    });
});

describe("getPlus", function(){
    it("определения", function(){
        expect(getPlus).toBeDefined();
    });
    it("b == 0", function(){
        expect(getPlus(5,0)).toBe(5);
    });
    it("проверка функции", function(){
        expect(getPlus(5,2)).toBe(7);
    });
});

describe("getPostCommitAuthor", function(){
    it("should be defined", function(){
        expect(getPostCommitAuthor).toBeDefined();
    });
    it("function check for result", function(){

        var arrObj = [
            {author: 'Imuss', comment: 'some comment1'},
            {author: 'Imuss', post: 'some post3'},
        ];
        var res = {"Commit": 1, "Post": 1, "author": "Imuss"};

        var mock = jest.fn(getPostCommitAuthor);
        var postCom = mock();

        expect(postCom(arrObj,'Imuss')).toEqual(res);
    });
    
});

describe("cashe", function(){
    var mockComplexFunction;
    var mockCashe;
    beforeEach(function(){
        mockComplexFunction = jest.fn(complexFunction);
        mockCashe = jest.fn(cashe);
    });

    it("should be defined", function(){
        expect(cashe).toBeDefined();
    });

    it("not a function in argument", function(){
        var addCashe = mockCashe("mockComplexFunction");
        var res = false;
        expect(addCashe()).toBe(res);
    });

    it("check for cache", function(){
        var addCashe = mockCashe(mockComplexFunction);
        addCashe("fooo","fff");
        var res = "Кеш fooofff";
        expect(addCashe("fooo","fff")).toBe(res);
    });
    
});
