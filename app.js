// 3 cach tao package.json
// 1 la cach thu cong
// 2 la npm init (bam enter het)
// 3 la npm init -y 
// cach install package npm : npm i <package_name>

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)