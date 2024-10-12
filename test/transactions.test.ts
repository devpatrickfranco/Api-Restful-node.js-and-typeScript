import { it, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { app } from '../src/app'
import request from 'supertest'
import { execSync } from 'node:child_process'

describe('Transactions routes', () => {
    beforeAll( async () => {
        await app.ready()
    })

    afterAll( async () => {
        await app.close()
    } )

    beforeEach( async () => {
        execSync('npm run knex migrate:rollback --all')
        execSync('npm run knex migrate:latest')
    })

    // one
    it('The User should be able to create a transaction', async () => {

    await request(app.server)
        .post('/transactions')
        .send({
            title: 'New Requests',
            amount: 5000,
            type: 'credit'
        })
        .expect(201)    

        
    })  
    // two
    it('should be able to list all transactions', async () => {
        const createTransactionsResponse = await request(app.server)
        .post('/transactions')
        .send({
            title: 'New Requests',
            amount: 5000,
            type: 'credit'
        })

        const cookies = createTransactionsResponse.get('Set-Cookie')

        const listTransactionsResponse = await request(app.server)
        .get('/transactions')
        .set('Cookie',  cookies[0])
        .expect(200)
        
        expect(listTransactionsResponse.body.transactions).toEqual([
            expect.objectContaining({
                title: 'New Requests',
                amount: 5000
            })
        ])
    }) 
    // three
    it('should be able to get a specific transaction', async () => {
        const createTransactionsResponse = await request(app.server)
        .post('/transactions')
        .send({
            title: 'New Requests',
            amount: 5000,
            type: 'credit'
        })

        const cookies = createTransactionsResponse.get('Set-Cookie')

        const listTransactionsResponse = await request(app.server)
        .get('/transactions')
        .set('Cookie',  cookies[0])
        .expect(200)
        
        const transactionId = listTransactionsResponse.body.transactions[0].id

        const getTransactionsResponse = await request(app.server)
        .get(`/transactions/${transactionId}`)
        .set('Cookie',  cookies[0])
        .expect(200)

        expect(getTransactionsResponse.body.transaction).toEqual(
            expect.objectContaining({
                title: 'New Requests',
                amount: 5000
            })
        )
    }) 
    // four
    it('should be able to get a summary', async () => {
        const createTransactionsResponse = await request(app.server)
        .post('/transactions')
        .send({
            title: 'Credit Transactions',
            amount: 5000,
            type: 'credit'
        })

        const cookies = createTransactionsResponse.get('Set-Cookie')

        await request(app.server)
        .post('/transactions')
        .set('Cookie',  cookies[0])
        .send({
            title: 'Debit Transactions ',
            amount: 2000,
            type: 'debit'
        })

        const summaryResponse = await request(app.server)
        .get('/transactions/summary')
        .set('Cookie',  cookies[0])
        .expect(200)
        
        expect(summaryResponse.body.summary).toEqual({
            amount: 3000,

        })
    })

})  


