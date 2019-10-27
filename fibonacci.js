function Fibonacci(n){
    if(n<=1){
        return n;
    }else{
        var pre = 0;
        var cur = 1;
        for(var i=2;i<=n;i++){
            cur = pre + cur;
            pre = cur - pre;
        }
        return cur
    }
}