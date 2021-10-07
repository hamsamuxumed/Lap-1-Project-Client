/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

describe('Layout of website', () => {
    beforeAll(() => {
        document.documentElement.innerHTML= html.toString();
    });

    test('Favicon is present', () => {
        let favicon = document.querySelector('link[rel="icon"]');
        expect(favicon).toBeTruthy();
    });

    test('It has a head section', () => {
        let head = document.querySelector('head');
        expect(head).toBeTruthy();
    });

    test('It has a body section', () => {
        let body = document.querySelector('body');
        expect(body).toBeTruthy();
    });

    test('It has a main section', () => {
        let main = document.querySelector('main');
        expect(main).toBeTruthy();
    });

    test('It has an article section', () => {
        let article = document.querySelector('article');
        expect(article).toBeTruthy();
    });

    test('It has a header', () => {
        let header = document.getElementById('main-header');
        expect(header.textContent).toContain('Add your own News entry');
    });

    // test('It ')
});