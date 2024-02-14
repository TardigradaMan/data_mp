import { defineStore } from 'pinia'
import { getMockData, getMockDataByMonth } from 'src/actions'

export const useChartsStore = defineStore('charts', {
  state: () => ({
    profitByDay: {} as ACCOUNT.ChartDay,
    profitByMonth: {} as ACCOUNT.ChartDay,
    isLoading: {
      profitByDay: false,
      profitByMonth: false
    }
  }),
  getters: {},
  actions: {
    async getProfitByDay() {
      try {
        this.setLoading(true, 'profitByDay')
        const response = await getMockData(15, 10000)

        if (response && response?.data) {
          this.profitByDay = response.data
        }
      } catch (error) {
        console.error('error', error)
        this.profitByDay = { date: ['Error. Failed to load profit by days'], data: [0] }
      } finally {
        this.setLoading(false, 'profitByDay')
      }
    },
    async getProfitByMonth() {
      try {
        this.setLoading(true, 'profitByMonth')
        const response = await getMockDataByMonth(4, 100000)

        if (response && response?.data) {
          this.profitByMonth = response.data
        }
      } catch (error) {
        console.error('error', error)
      } finally {
        this.setLoading(false, 'profitByMonth')
      }
    },

    setLoading(isLoading: boolean, type: 'profitByDay' | 'profitByMonth') {
      this.isLoading[type] = isLoading
    }
  }
})
