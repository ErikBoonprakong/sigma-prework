function minMax(arr){
    arr.sort(function(a,b){return a - b});
    return [arr[0], arr[arr.length - 1]]
}
const arrDeno = []
for(let i = 0; i < Deno.args.length; i++){
    arrDeno[i] = parseInt(Deno.args[i])
}
console.log(minMax(arrDeno))