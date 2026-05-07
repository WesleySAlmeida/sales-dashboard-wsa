import { jwtExpirationDateConverter } from '@/utils';
describe('jwtExpirationDateConverter', () => {
    const realDateNow = Date.now.bind(globalThis.Date);
    beforeAll(() => {
        globalThis.Date.now = jest.fn(() => new Date('2024-01-01T00:00:00Z').getTime());
    });
    afterAll(() => {
        globalThis.Date.now = realDateNow;
    });
    it('should convert a valid JWT expiration time to a Date object', () => {
        const exp = Math.floor(Date.now() / 1000);
        const result = jwtExpirationDateConverter(exp);
        expect(result).toBe(0);
    });
    it('should correctly convert future expiration date to days. 5 days in future.', () => {
        const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5;
        const result = jwtExpirationDateConverter(exp);
        expect(result).toBe(5);
    });
    it('should correctly convert expiration date to fraction of a day. 12 hours in future.', () => {
        const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 12;
        const result = jwtExpirationDateConverter(exp);
        expect(result).toBe(0.5);
    });
});
