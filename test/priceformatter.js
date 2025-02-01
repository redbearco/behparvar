// Clean Code
/**
 * This function get a [string] number and separate triple with separator char.
 *
 * @param {number} price
 * @param {string} separator '/' as default separator
 * @return {string}
 */
export default function priceFormatter(price, separator = '/') {
    if (price == null)
        return ''

    let tmp_price = [],
        tmp_c = 1;
    price = price.toString(); // convert int or any other types to string
    // this loop will return a reversed array of chars
    for (let i = price.length - 1; i >= 0; i--) {
        tmp_price.push(price[i]);
        if (tmp_c === 3 && i > 0) {
            tmp_price.push(separator); // push separator on each 3 char
            tmp_c = 0;
        }
        tmp_c++;
    }

    // re reverse and join the chars array of formatting and return string
    return tmp_price.reverse().join('');
}
