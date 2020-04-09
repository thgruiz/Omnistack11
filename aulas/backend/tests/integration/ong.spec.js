const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterEach(() => {
        console.log('end of one test...');
    })

    //solves the error on tests
    //A worker process has failed to exit gracefully and has 
    //been force exited. This is likely caused by tests leaking 
    //due to improper teardown. Try running with 
    //--runInBand --detectOpenHandles to find leaks.
    afterAll( async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                    "name": "APAD muitos2", 
                    "email": "contato@apad.com.br",
                    "whatsapp": "99999999919",
                    "city": "São Paulo",
                    "uf": "SP"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});