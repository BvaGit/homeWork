// 1

function cinema(){
    var res = 0;
    var resAnsw = "";
    for(var i = 0; i < arguments.length; i++){
       if(arguments[i] === 25){
           res += arguments[i];
       }else if(arguments[i] === 50){
           if(res >= 25){
            res += 25;
            resAnsw = "YES";
           }else{
            return  "NO";
           }
       }else if(arguments[i] === 100){
           if(res >= 75){
            res += 25;
            resAnsw = "YES";   
           }else{
           return "NO";
           }
           
       }
    }
    return resAnsw;
}

console.log(cinema(25,100,50));

// 2

function getPlus(a, b)	{
	if (b == 0) return a;
	var sum = a ^ b;			
	var carry = (a & b) << 1;	
	return getPlus(sum, carry);		
}

console.log(getPlus(5,20));

/*console.log((5 ^ 20));
console.log((5 & 20) << 1);
console.log((17 ^ 8));
console.log((17 & 8) << 1);*/


//3


function getPostCommitAuthor(){

    var postCount = 0;
    var commitCount = 0;

   return function postCommit(obj, author){
    for(var i = 0; i < obj.length; i++){
        for(var keys in obj[i]){
             if(typeof obj[i][keys] === "object") postCommit(obj[i][keys], author);
                 if(obj[i][keys] === author){
                     if(obj[i].hasOwnProperty('comment')){
                         commitCount++;
                     }
                     if(obj[i].hasOwnProperty('post')){
                         postCount++;
                     } 
             }
         }
     }
     return {
         author: author,
         Commit: commitCount,
         Post: postCount
     };
   }; 

}




let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }

];


var objRetPostCommit = getPostCommitAuthor();
console.log(objRetPostCommit(listOfPosts2, 'Uncle'));


// 4.Напишите функцию кеш

var complexFunction = function (arg1,arg2) {
	return arg1 + arg2;
	};


var cashe = function (fanc){

    var arr = []; 

    return function(arg1, arg2){

        if(typeof fanc != "function"){
            return false;
        }

        var x = arg1;
        var y = arg2;
        if(arr.length > 0){
            for(var i = 0; i < arr.length; i++){
                if(arr[i][1] === x && arr[i][2] === y){
                    return "Кеш " + arr[i][3];
                }
            }
        }
            var res = fanc(x,y);
            arr.push({1:x, 2:y, 3:res});
            return res;
    };
};

var addCashe = cashe(complexFunction);
console.log(addCashe(5,5));
console.log(addCashe(5,5));
console.log(addCashe(6,5));
console.log(addCashe(6,5));
console.log(addCashe(6,5));
console.log(addCashe("foo","fff"));
console.log(addCashe("foo","fff"));

module.exports = {cinema, getPlus, getPostCommitAuthor, complexFunction, cashe};

 
  







