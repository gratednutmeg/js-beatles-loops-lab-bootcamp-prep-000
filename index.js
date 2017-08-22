function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

theBeatlesPlay(['John Lennon','Paul McCartney','George Harrison','Ringo Starr'],['Guitar','Bass Guitar','Lead Guitar','Drums']);

function johnLennonFacts(array) {
  var newArr = [];
  var i = 0;
  while (i < array.length) {
    newArr.push(`${array[i]}!!!`)
    i++;
  }
  console.log(newArr);
  return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);


function iLoveTheBeatles() {

}
