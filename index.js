function introduction(firstName='Mikal') {
  return (`Hi, my name is ${firstName}.`);
}

introduction();

function introductionWithLanguage(name='Mikal', language='js.') {
  return (`Hi, my name is` + ` ${name} ` + `and I am learning to program in` + ` ${language}.`);
}

introductionWithLanguage();

let name='Mikal'
function introductionWithLanguageOptional(name, language='JavaScript') {
  return (`Hi, my name is` + ` ${name} ` + `and I am learning to program in` + ` ${language}.`);
}

introductionWithLanguageOptional()