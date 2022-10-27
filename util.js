const person = {
  personName: "Leontin Kremer",
  sex: "male",
  city: "Münzenberg",
  hasFamiliy: true,
  birthData: {
    birthDay: "27.06.1988",
    birthPlace: "Satpaev",
  },
};
const {
  personName: wholeName = "Max Mustermann",
  city,
  birthData: { birthPlace: bornIn },
  ...rest
} = person;
console.log(wholeName);
console.log(bornIn);
console.log(rest);
