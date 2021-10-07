/**
 * @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

describe('DOM Manipulation', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('Entry section has articles', () => {
        // let entrySection = document.getElementById('entrySection');
        // let entryCard = document.querySelector('.entryCard');
        // expect(entrySection).toContain(entryCard);
    });
});
