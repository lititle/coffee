var sqlMap = {
  getValue: 'SELECT * FROM user WHERE uId = ?',
  setValue: 'UPDATE user SET uName = ? WHERE uId = ?'
}

module.exports = sqlMap
