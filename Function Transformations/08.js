//leetcode  2629. Function Composition

var compose = function(functions) {
    
    return function(x) {
        for(let i=functions.length-1;i>=0;i++){
           x =function[i](x);
        }
        return x;
        
    }
};
