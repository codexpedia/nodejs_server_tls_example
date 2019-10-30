https://www.codexpedia.com/node-js/nodejs-tls-configuration-server-and-client-example/

To generate a self-signed certificate, run the following in your command line window:
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

To start your https server, run the following on the terminal.
```
node my_server.js
```

Now the server is set up and started, it can be accessed with curl:

```
curl -k https://localhost:8000
```
