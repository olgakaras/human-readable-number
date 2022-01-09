module.exports = function toReadable (number) {
  let arrNum = Array.from(String(number), Number);
  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eihteen', 'nineteen', 'twenty'];
  let b = ['thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let c = ' hundred ';

  let strDecimalNum = b[arrNum[0] - 3] + ' ' + a[arrNum[1]];

  if(number < 100) {
    if(number <= 20) {
      return a[number];
    }
    else if(arrNum[1] == 0) {
      console.log(b[arrNum[0] - 2]);
    }
    else {
      return strDecimalNum;
    }
  }
  else {
    return a[arrNum[0]] + c + strDecimalNum;
  }
}
