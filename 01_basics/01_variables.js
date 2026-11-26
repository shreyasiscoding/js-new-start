const accountId = 13334
let accountEmail = "shreyas@microsoft.com"
var accountPassword = "12343"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "bruh@google.com"
accountPassword = "2112"
accountCity = "Bangalurru"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

