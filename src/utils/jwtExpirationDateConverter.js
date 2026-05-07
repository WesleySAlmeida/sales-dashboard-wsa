/**
 * Converte o exp do JWT em dias
 * @param exp - Número a ser convertido.
 * @returns exp convertido em dias.
 */
export function jwtExpirationDateConverter(exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    const secondsUntilExpiration = exp - currentTime;
    const secondsInDay = 60 * 60 * 24;
    const daysUntilExpiration = secondsUntilExpiration / secondsInDay;
    // garante que nunca retorna negativo
    return daysUntilExpiration > 0 ? daysUntilExpiration : 0;
}
