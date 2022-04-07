import { Module } from '@nuxt/types';
import consola from 'consola';
import http from 'http';
import db from './db';

const myModule: Module = function () {
    this.nuxt.hook('render:before', async () => {
        const server = http.createServer(this.nuxt.renderer.app)

        consola.info('Starting DB service..')
        await db.start()
        await db.testBill()

        this.nuxt.server.listen = (port: number, host: string) => new Promise(resolve => {
            server.listen(port || 3000, host || 'localhost', undefined, () => resolve(null))
        })
        this.nuxt.hook('close', () => new Promise(server.close))
    })
}

export default myModule