module.exports = function toReadable (number) {
  let arr = number.toString().split('');
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (parseInt(number) === 0) { return units[arr[0]]; }
  if (arr[arr.length-2] !== '1') {
    if (arr.length !== 1) {
      arr.splice(arr.length-2,1,`${dozens[arr[arr.length-2]]}`);
    }
    arr.splice(arr.length-1,1, arr[arr.length-1] === '0' ? '' : `${units[arr[arr.length-1]]}`);
  } else {
    arr.splice(arr.length-2,1,'');
    arr.splice(arr.length-1,1,`${tens[arr[arr.length-1]]}`);
  }
  if (arr.length > 2) {
    arr.splice(arr.length-3,1, arr[arr.length-3] === '0' ? '' : `${units[arr[arr.length-3]]} hundred`);
  }
  arr = arr.filter((i) => i !== '');
  return arr.join(' ');
}
