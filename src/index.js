module.exports = function reverse (n) {
  let strNumb = '' + numb;
  let strNumbRev = '';
  for(let i = strNumb.length - 1; i >= 0; i--){
  	strNumbRev += strNumb[i];
  }
  
  return +strNumbRev;
}
