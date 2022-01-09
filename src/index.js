module.exports = function toReadable (number) {
  let arrNum = Array.from(String(number), Number);
  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let c = ' hundred';

  let strDecimalNum = b[arrNum[0] - 2] + ' ' + a[arrNum[1]];
  let hundredths = a[arrNum[0]] + c;
  let decimal = b[arrNum[1] - 2];

  if(number < 100) {
    let condition1 = number <= 19 ? a[number] :
                     arrNum[1] == 0 ? b[arrNum[0] - 2] : strDecimalNum;
    return condition1;
  }
  else {
    let cond = arrNum[2] == 0 ? hundredths + " " + decimal : 
                               hundredths + " " + decimal + " " + a[arrNum[2]];
    let condition2 = arrNum[1] == 0 && arrNum[2] == 0 ? hundredths :
                     number%100 <= 19 ? hundredths + " " + a[number%100] : cond;
    return condition2;
  } 
}
