const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true
})

module.exports = {
  getValue (req, res) {
    let uId = req.query.id
    pool.getConnection((err, connection) => {
      let sql = sqlMap.getValue
      connection.query(sql, [uId], (err, result) => {
        res.json(result)
        connection.release()
        console.log(err)
      })
      console.log(err)
    })
  },
  setValue (req, res) {
    console.log(req.body)
    let uId = req.body.id
    let uName = req.body.name
    pool.getConnection((err, connection) => {
      console.log(err)
      var sql = sqlMap.setValue
      connection.query(sql, [uName, uId], (err, result) => {
        console.log(err)
        res.json(result)
        connection.release()
      })
    })
  }
}
