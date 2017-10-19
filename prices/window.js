// Run this function after the page has loaded
$(function() {

  stocks = [
    'CL=F', // Crude oil, http://finance.yahoo.com/quote/CL=F?p=CL=F
    'GC=F', // Gold, https://finance.yahoo.com/quote/GC=F?p=GC=F
    'SI=F' // Silver, https://finance.yahoo.com/quote/SI=F?p=SI=F
  ]

  const fields = 'f=pl1' // Requests the current price and previous closing price
  const symbols = `s=${stocks.join('+')}`
  const url = `https://finance.yahoo.com/d/quotes.csv?${fields}&${symbols}`

  $.ajax(url).done((csv) => {
    // Split the output up into an array of lines
    const lines = csv.trim().split('\n')

    // Iterate over each line
    for (let i = 0; i < lines.length; i++) {
      //Split the line up by comma
      const prices = lines[i].split(',')

      // Previous closing price of stock symbol
      const previousPrice = parseFloat(prices[0], 10)

      // Current price of stock symbol
      const currentPrice = parseFloat(prices[1], 10)

      // Change between closing price and current price rounded to 2 decimal points.
      cons change = Math.round((currentPrice - previousPrice) * 100) / 100

      // Add a leading + for positive change
      if (change >= 0) {
        change = '+' + change
      }

      // Add prices and changes to HTML element
      if (i == 0) { // Oil
        $('#oil-price').text(currentPrice.toLocaleString())
        $('#oil-change').text(change)
      } else if (i == 1) { // Gold
        $('#gold-price').text(currentPrice.toLocaleString())
        $('#gold-change').text(change)
      } else if (i == 2) { // Silver
        $('#silver-price').text(currentPrice.toLocaleString())
        $('#silver-change').text(change)
      }
    }
  }).fail((error) => {
    console.error(error)
  })

})