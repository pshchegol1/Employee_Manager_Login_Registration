/* 
    Register Service will create  a new user 
*/

const fileService = require('./fileService');

 exports.addUser = (credential)=>{

  const {username,email, password} = {...credential}
  const users = fileService.getFileContents('../data/users.json');
  
  fileService.writeFileContents('../data/users.json',credential)
  

}
