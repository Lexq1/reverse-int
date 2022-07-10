module.exports = function reverse (n) {
  let strNumb = '' + n;
  let strNumbRev = '';
  for(let i = strNumb.length - 1; i >= 0; i--){
    if(strNumb[i] == '-'){
        strNumbRev += '';
    }else{
        strNumbRev += strNumb[i];
    }
  }
  
  return +strNumbRev;
}
