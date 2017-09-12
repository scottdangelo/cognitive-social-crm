var datasource
if(process.env.VCAP_SERVICES){
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES)

  datasource = {
    url: VCAP_SERVICES.cloudantNoSQLDB.credentials.url 
  }
}

module.exports = {
  db: datasource
}

