function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let sum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(sum);
    }
    return sequence;
}

function fibsRec(n) {
    console.log('This was printed recursively');
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let fib = fibsRec(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
}

console.log(fibsRec(8));
