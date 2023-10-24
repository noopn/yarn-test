export class Converter {
  convertFromBaseNToDecimal(numberBaseN: string, baseFrom: number) {
    // 1101(binary) => 2^3 * 1 + 2^2 *1 + 2^1 * 0 + 2^0 *1
    if (typeof numberBaseN !== "string")
      throw new Error("Number to convert must be a string");
    const digitsArray = Array.from(numberBaseN);
    let position = digitsArray.length - 1;
    let result = 0;

    for (const digit of digitsArray) {
      result +=
        Math.pow(baseFrom, position) *
        (isNaN(parseInt(digit)) ? digit.charCodeAt(0) - 55 : parseInt(digit));
      position--;
    }
    return result;
  }

  /**
   * 这个函数允许你将数字转换为任意进制的数字
   * @param numberToConvert  xxxxxxxxxx
   * @param baseFrom  xxxxxxxxxxxxx
   * @returns  returntttttttttttee
   */
  convertFromDecimalToBaseN(numberToConvert: number, baseFrom: number) {
    let res = "";
    let remainder;
    while (numberToConvert) {
      remainder = numberToConvert % baseFrom;
      numberToConvert = (numberToConvert / baseFrom) >> 0;
      let rr = String(remainder);
      if (remainder >= 10) rr = String.fromCharCode(remainder + 55);

      res = rr + res;
    }

    return res;
  }
}
