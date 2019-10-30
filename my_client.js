const https = require('https')

// possible values for secureProtocol: https://www.openssl.org/docs/man1.1.1/man7/ssl.html#Dealing-with-Protocol-Methods
// const protocol = "TLSv1_1_method"
const protocol = "TLSv1_2_method"

const options = {
    hostname: '127.0.0.1',
    port: 8000,
    method: 'GET',
    secureProtocol: protocol,
    rejectUnauthorized: false
}

https.request(options, res => {
  let body = ''
  res.on('data', data => body += data)
  res.on('end', () => {
    console.log('response data: ' + body)
  })
}).on('error', err => {
  console.warn(err)
}).end()