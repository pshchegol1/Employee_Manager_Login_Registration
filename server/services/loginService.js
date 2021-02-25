/* 
    Login Service will Authenticate an email and password
    return a true or false response
*/

const fileService = require('./fileService');

exports.authenticate = (credential) =>{
    const {email, password} = {...credential}
    const users = fileService.getFileContents('../data/users.json');

    const authUser = users.reduce((authObj, user)=>{
        if(user.email === email)
        {
            authObj.validEmail = true;
        }
        else
        {
            authObj.validEmail = false;
            authObj.emailError = "invalid email"
        }
        
        if(user.password === password)
        {
            authObj.validPassword = true;
        }

        if(authObj.validEmail === true && authObj.validPassword === true)
        {
            authObj.user = user;
        }
        return authObj

    }, {validEmail:false, validPassword:false, user:null})

    const auth0 = authUser.user ? authUser.user: formatErrors(authUser);
    return auth0

    
}

const formatErrors = function(user){
    let passwordWarning = ""
    let emailWarning = ""
  
    if(user.validPassword === false){passwordWarning= `password doesn't seem to be correct`}
    if(user.validEmail === false){ emailWarning= `email doesn't seem to be correct`}
  
    return {user:null, emailWarning, passwordWarning}
  }