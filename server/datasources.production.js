module.exports = {
  db: {
    connector: 'mongodb',
    hostname: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'firstop',
  },
  emailDs: {
    name: "emailDs",
    connector: "mail",
    transports: [{
      type: "smtp",
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      secure: true,
      port: process.env.EMAIL_PORT || 465,
      tls: {
        "rejectUnauthorized": false
      },
      auth: {
        user: process.env.EMAIL_USER || "firstop@gmail.com",
        pass: process.env.EMAIL_PWD || "FirStop"
      }
    }]
  },
};