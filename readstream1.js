const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt' ,{highWaterMark:10000} );

stream.on('data', (result) => {
  console.log(result);
});

stream.on ('error' , (err) => {
 console.log(err);
});