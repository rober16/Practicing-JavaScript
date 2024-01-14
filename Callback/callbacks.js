//ejemplo basico de una funcion callback

function operation(n1, n2, operation){
    return operation(n1,n2);
}

function add(n1, n2){
    return n1 + n2;
}

function mult(n1, n2){
    return n1 * n2;
}

const result = calculate(2, 8, add);

console.log(result);