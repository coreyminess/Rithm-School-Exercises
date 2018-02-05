var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (var singleKey in namesAndHobbies) {
    console.log(namesAndHobbies[singleKey] + ' => ' + singleKey)
}