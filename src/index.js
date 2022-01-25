module.exports = function toReadable (number) {

    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var hundred = ' hundred';
    var output = '';
    var numString = number.toString();

    if (number == 0) {
        return 'zero';
    }

    if (number < 20) {
        output = ones[number];
        return output.trim();
    }
    if (numString.length == 3) {
        output = ones[parseInt(numString.charAt(0))] + hundred;
        if(ones[parseInt(numString.charAt(1) + numString.charAt(2))]) {
            output += ones[parseInt(numString.charAt(1) + numString.charAt(2))];
            return output.trim();
        }
    
        output += tens[parseInt(numString.charAt(1))];
        output += ones[parseInt(numString.charAt(2))];
        return output.trim();
      }
      
    output += tens[parseInt(numString.charAt(0))];
    output += ones[parseInt(numString.charAt(1))];

    return output.trim();

  }

