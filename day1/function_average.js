function average(x,y){
    var avg = (x+y)/2;
    return avg;
}

console.log(average(2,3));

function factorial(n){
    var fact = 1;
    for(i=n;i>=1;i--){
        fact *= i; 
    }

    return fact;
}

console.log(factorial(5));


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(materials.map(material => material.length+1 *2 /100));
