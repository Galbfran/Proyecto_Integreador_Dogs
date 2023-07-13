const { expect } = require('chai');
const server = require('../../src/app');
const request = require('supertest');
const e = require('cors');
const assert = require('assert');


describe('Prueba de la ruta POST', () => {
    test('Debería crear un nuevo recurso', async () => {
        const payload = {
            imagen:'sdfdfdf',
            nombre:'perro',
            altura:"15",
            peso:"50",
            anios_vida:"20",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.body).instanceOf(Object);
        expect(response.statusCode).to.equal(201);
        
    });
});
    
    test('caso falta imagen retorna error', async () => {
        const payload = {
            nombre:'perro',
            altura:"15",
            peso:"50",
            anios_vida:"20",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.statusCode).to.equal(400);
        assert.deepStrictEqual(response.body, { "error": "Faltan datos para crear un nuevo perro" });


    });
    test('caso falta nombre retorna error', async () => {
        const payload = {
            imagen:'sdfdfdf',
            altura:"15",
            peso:"50",
            anios_vida:"20",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.statusCode).to.equal(400);
        assert.deepStrictEqual(response.body, { "error": "Faltan datos para crear un nuevo perro" });

    });
    test('caso falta altura retorna error', async () => {
        const payload = {
            imagen:'sdfdfdf',
            nombre:'perro',
            peso:"50",
            anios_vida:"20",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.statusCode).to.equal(400);
        assert.deepStrictEqual(response.body, { "error": "Faltan datos para crear un nuevo perro" });

    });
    test('caso falta peso retorna error', async () => {
        const payload = {
            imagen:'sdfdfdf',
            nombre:'perro',
            altura:"15",
            anios_vida:"20",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.statusCode).to.equal(400);
        assert.deepStrictEqual(response.body, { "error": "Faltan datos para crear un nuevo perro" });

    });
    test('caso falta anios retorna error', async () => {
        const payload = {
            imagen:'sdfdfdf',
            nombre:'perro',
            altura:"15",
            peso:"50",
            temperamento: "hola"
        };
        const response = await request(server)
            .post('/dogs') // Ruta POST a probar
            .send(payload); // Enviar los datos en la solicitud
      // Verificar la respuesta esperada
        expect(response.statusCode).to.equal(400);
        assert.deepStrictEqual(response.body, { "error": "Faltan datos para crear un nuevo perro" });
    });

