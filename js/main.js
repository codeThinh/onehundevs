function getDivisorsCnt(n){
    let result = [];
    for ( i = 1; i >= n; i++ ) {
      if ( n % i === 0 ) {
        result.push(n);
      }
    }   
    return result.length;
}

console.log(getDivisorsCnt(5));
