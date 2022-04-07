import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { BuildOptions } from 'sequelize/types'

@Table
export class Person extends Model {
    @Column(DataType.TEXT)
    name: string

    @Column(DataType.DATE)
    birthday: Date

    constructor(values?: any, options?: BuildOptions | undefined) {
        super(values, options)
        this.name = ""
        this.birthday = new Date()
    }
}