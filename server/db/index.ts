
import { Sequelize } from 'sequelize-typescript'
import { Person } from './models/Person'

const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
    models: [Person]
})

export default {
    sequelize,
    async start() {
        await sequelize.authenticate()
        await sequelize.sync({ force: true })
    },
    async testBill() {
        const bill = new Person({ name: 'Bill' })
        await bill.save()
    }
}