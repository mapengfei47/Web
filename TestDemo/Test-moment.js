var moment = require('moment')

let year = moment().get('year')
let month = moment().get('month') + 1
let date = moment().get('date')
let today = new Date(year, month, date)

// 今天（00:00）时刻的秒数
let dayWrapper = moment(today).unix()

// 7天前（从当前时刻开始算）
let last7Days = moment().day(-7).unix()

console.info(dayWrapper)

console.log(last7Days)