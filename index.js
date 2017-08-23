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
    newArr.push(`${array[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);

  console.log(array);
  return array;
}
