/**
 * Convert to BRL currency format
 * @param value - Number to be converted.
 * @returns Converted BRL to string
 */
export function currencyConverter(value) {
    return new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}
