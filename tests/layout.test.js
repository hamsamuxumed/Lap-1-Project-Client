/**
 * @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

describe('Head section', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('It has a title', () => {
        let webTitle = document.querySelector('title');
        expect(webTitle).toBeTruthy();
        expect(webTitle.textContent).toContain('Caffeine Newswire');
    });

    test('Favicon is present', () => {
        let favicon = document.querySelector('link[rel="icon"]');
        expect(favicon).toBeTruthy();
    });

    test('CSS links to .css files', () => {
        const css = document.querySelector('link[rel="stylesheet"]');
        const filePath = css.getAttribute('href');
        const fileExtension = filePath.split('.').pop();
        expect(fileExtension).toContain('css');
    });

    test('JS links to .js files', () => {
        const js = document.querySelector('script');
        const filePath = js.getAttribute('src');
        const fileExtension = filePath.split('.').pop();
        expect(fileExtension).toContain('js');
    });

});

describe('Layout of website', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('It has a head section', () => {
        let head = document.querySelector('head');
        expect(head).toBeTruthy();
    });

    test('It has a body section', () => {
        let body = document.querySelector('body');
        expect(body).toBeTruthy();
    });

    test('It has a navbar', () => {
        let navBar = document.querySelector('nav');
        expect(navBar).toBeTruthy();
    });

    test('It has a main section', () => {
        let main = document.querySelector('main');
        expect(main).toBeTruthy();
    });

    test('It has an article section', () => {
        let article = document.querySelector('article');
        expect(article).toBeTruthy();
    });
});

describe('Navigation Bar', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('It has a title', () => {
        let webTitle = document.querySelector('h5');
        expect(webTitle).toBeTruthy();
    });

    test('It has a button to move another section of the page', () => {
        let navBarButton = document.getElementById('sortByButton');
        expect(navBarButton).toBeTruthy();
    });
});

describe('Form', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('It has a header', () => {
        let header = document.getElementById('mainHeader');
        expect(header.textContent).toContain('Add your own News entry');
    });

    test('It has a title input field', () => {
        let formTitle = document.getElementById('formTitle');
        expect(formTitle).toBeTruthy();
    });

    test('It has a message input field', () => {
        let formMessage = document.getElementById('formMessage');
        expect(formMessage).toBeTruthy();
    });

    test('It has a search field for GIFs', () => {
        let formGifSearch = document.getElementById('formGifSearch');
        expect(formGifSearch).toBeTruthy();
    });

    test('It has a area for GIFs to show up', () => {
        let gifSection = document.getElementById('gifSection');
        expect(gifSection).toBeTruthy();
    });

    test('It has a post button', () => {
        let postButton = document.getElementById('postButton');
        expect(postButton).toBeTruthy();
    });
});
