import { defineStore } from 'pinia'
import car_store from './config/car'

const use_car_store = defineStore('config', car_store)

export { use_car_store }