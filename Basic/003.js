// 객체의 키이름 중복
const obj = {
    Name: 'Seongchan',
    Height: '178',
    Fav: 'Movie',
    Fav: 'Game',
    Fav: 'ComicBook'
};

// 가장 마지막에 들어간 값을 출력함
console.log(obj['Fav']);
console.log(obj.Fav);