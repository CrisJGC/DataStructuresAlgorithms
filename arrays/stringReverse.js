/* 
Crear una funcion que volte un string:
"Hi my name is Eris" should be:
sirE si eman ym iH
*/

function reverse(str) {
  // check string

  if (!str || str.length < 2 || typeof str !== 'string') {
    return str
  }
  let strReverse = ''
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i]
  }
  return strReverse
}

function reverse2(str) {
  return str.split('').reverse().join('')
}

const strOriginal = 'Hi my name is Eris'
console.log(reverse(strOriginal))
console.log(reverse2(strOriginal))