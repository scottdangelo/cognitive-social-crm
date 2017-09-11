var datasource
if(process.env.VCAP_SERVICES){
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES)
  "analysis-db"= {
    url: vcapServices.cloudantNoSQLDB.credentials.url 
  }
  "conversation-state-db"= {
    url: vcapServices.cloudantNoSQLDB.credentials.url 
  }
}
