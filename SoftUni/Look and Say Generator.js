function lookAndSay(seq){
    var prev = seq[0];
    var freq = 0;
    var output = '';
    seq.forEach(function(s){
        if (s==prev){
            freq++;
        }
        else{
            output+=prev;
            output+=freq;
            prev = s;
            freq = 1;
        }
    });
    output+=prev;
    output+=freq;
    yield output;
}
let g = lookAndSay(3);
g.next();