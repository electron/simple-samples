/* global $ */
const csv = require('papaparse')

// Run this function after the page has loaded
$(() => {
  let url
  const stocks = {
    'oil': 'CL.F', // Crude oil, https://stooq.com/q/?s=cl.f
    'gold': 'GC.F', // Gold, https://stooq.com/q/?s=gc.f
    'silver': 'SI.F' // Silver,https://stooq.com/q/?s=si.f
  }

  for (let symbol in stocks) {
    url = `https://stooq.com/q/l/?s=${stocks[symbol]}&f=sd2t2ohlc&h&e=csv`

    csv.parse(url, {
      download: true,
      delimiter: ',',
      complete: (results) => {
        // price data is the second array, first is headers
        const prices = results.data[1]
        const previousPrice = parseFloat(prices[3], 10)
        const currentPrice = parseFloat(prices[6], 10)
        let change = Math.round((currentPrice - previousPrice) * 100) / 100

        if (change >= 0) {
          change = `+${change}`
        }

        $(`#${symbol}-price`).text(currentPrice.toLocaleString())
        $(`#${symbol}-change`).text(change)
      }
    })
  }
})
