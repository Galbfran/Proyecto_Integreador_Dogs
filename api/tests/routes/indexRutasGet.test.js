
const { expect } = require('chai');
const server = require('../../src/app');
const request = require('supertest');
const e = require('cors');

describe('test ruta GET /dogs', () => {
    test('pedir todos los dogs', async () => {
        const response = await request(server).get('/dogs').send();
        expect(response.statusCode).to.equal(200);
    });
    test('devuelve un array', async () => {
        const response = await request(server).get('/dogs').send();
        expect(response.body).instanceOf(Array);
    });
    test('el objeto dentro del array tiene las propiedades esperadas', async () => {
        const response = await request(server).get('/dogs').send();
        const claves = response.body[1]
        expect(claves).to.have.property('ID_Dogs');
        expect(claves).to.have.property('Imagen');
        expect(claves).to.have.property('Nombre');
        expect(claves).to.have.property('Altura');
        expect(claves).to.have.property('Peso');
        expect(claves).to.have.property('Anios_Vida');
        expect(claves).to.have.property('Temperamento');
        expect(claves).to.have.property('BaseDatos');
    });
});

describe('test ruta GET /dogs/:idRaza',  () => {
    test('pedir dog  ID:1 devuelve status 200', async () => {
        const response = await request(server).get('/dogs/1').send();
        expect(response.statusCode).to.equal(200);
    });
    test('devuelve un Objeto', async () => {
        const response = await request(server).get('/dogs/1').send();
        expect(response.body).instanceOf(Object);
    });
    test('el objeto tiene las propiedades esperadas', async () => {
        const response = await request(server).get('/dogs/1').send();
        const claves = response.body
        expect(claves).to.have.property('ID_Dogs');
        expect(claves).to.have.property('Imagen');
        expect(claves).to.have.property('Nombre');
        expect(claves).to.have.property('Altura');
        expect(claves).to.have.property('Peso');
        expect(claves).to.have.property('Anios_Vida');
        expect(claves).to.have.property('Temperamento');
        expect(claves).to.have.property('BaseDatos');
    });
    test('pedir dog  ID:1000 devuelve status 400 y mensaje correspondiente', async () => {
        const response = await request(server).get('/dogs/1000').send();
        expect(response.body.error).to.equal('El perro con numero 1000 no se encuentra')
        expect(response.statusCode).to.equal(400);
    });
});

describe('test ruta GET /dogs/name',  () => {
    test('pedir dog  por name devuelve status 200', async () => {
        const response = await request(server).get('/dogs/?Nombre=boxer').send('afghan hound');
        expect(response.statusCode).to.equal(200);
    });
    test('devuelve un Objeto', async () => {
        const response = await request(server).get('/dogs/?Nombre=boxer').send();
        expect(response.body).instanceOf(Object);
    });
});

describe('test ruta GET /temperaments', () => {
    test('pedir todos los temperaments', async () => {
        const response = await request(server).get('/temperaments').send();
        expect(response.statusCode).to.equal(200);
    });
    test('devuelve un array', async () => {
        const response = await request(server).get('/temperaments').send();
        expect(response.body).instanceOf(Array);
    });
});

