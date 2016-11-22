function* fibonacci(){
    var fn1 =  1;
    var fn2 = 1;
    while (true){
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
    }
}