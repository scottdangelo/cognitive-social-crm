var datasource
if(process.env.VCAP_SERVICES){
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES)
  datasource = {
    url: vcapServices.cloudantNoSQLDB.credentials.url 
  }
}

module.exports = {
  analysis-db: datasource
  conversation-state-db: datasource
}
