function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    const cb = () => console.log("Hello World!");
//    function cb(){
//        console.log("Hello World!");
//    }
    return cb;
}

function returnsAnAnonymousFunction(){
    return () => console.log("Hello World!");
//    return function(){
//        console.log("Hello World!");
//    }
}