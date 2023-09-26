function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`
}
let x = tellFortune("programmer", "New york", "Rana", 2)
console.log(x);