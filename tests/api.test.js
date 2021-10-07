const request = require("supertest");

let apiUrl;
let apiKey = "L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3";
let limit = 20;
let searchTerm = "testing";

describe('API endpoints', () => {
    beforeAll(() => {
        apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${searchTerm}`;
    });

    it('Should return a 200 status code', () => {
        request(apiUrl)
            .get('/')
            .expect(200);
    });
});
