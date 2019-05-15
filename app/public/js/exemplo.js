var variavel;
variavel = 'hello world';
console.log(variavel)

function sum(a, b = 100)
{
    return a+b;
}

console.log(sum(2))