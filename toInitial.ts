const toInitial = str=>  str.split(' ').map((el)=> el.toUpperCase().slice(0,1)  + '.').join('')




console.log(toInitial('Bil Gates'))
console.log(toInitial('elon mask'))
