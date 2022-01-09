module.exports = function toReadable (number) {
  let arrNum = Array.from(String(number), Number);
  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eihteen', 'nineteen'];
  let b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let c = ' hundred';

  let strDecimalNum = b[arrNum[0] - 2] + ' ' + a[arrNum[1]];

  if(number < 100) {
    if(number <= 19) {
      return a[number];
    }
    else if(arrNum[1] == 0) {
      return b[arrNum[0] - 2];
    }
    else {
      return strDecimalNum;
    }
  }
  else if (number < 1000) {
    if (arrNum[1] == 0 && arrNum[2] == 0) {
      return a[arrNum[0]] + c;
    }
    else if(number%100 <= 19) {
      return a[arrNum[0]] + c + " " + a[number%100];
    }
    else {
      if(arrNum[2] == 0) {
        return a[arrNum[0]] + c + " " + b[arrNum[1] - 2];
      }
      // else {
      //   return a[arrNum[0]] + c + " ";
      // }
      
    }
  } 
}
