alert ('Welcom To Milano Store')
var gender = prompt ('whats your gender')
if (gender === 'Male'){
document.write('<img src="https://i.pinimg.com/originals/3c/fb/9e/3cfb9e690d95a8c59a8a0375926fff76.jpg">')
}
else if (gender === 'Female') {
document.write('<img src="http://www.cstylejeans.com/wp-content/uploads/2016/01/womens-fashion-clothes-cheap.jpg">')
}
else {
  alert('you should pick between Male or Female')
}


<<<<<<< HEAD
var userold = prompt (' Please enter your age?')
while (userold >=40 || userold <=19) {
  // alert ('sorry we dont have items in this age')
  userold = prompt ('sorry we dont have items in this age please try again')
}
document.write('Welcome :)')


var numbers = prompt ('How many shoes would you like to see')
var Image = ''
for (var x=0; x < numbers ; x++){
  Image= Image + '<img src="https://i.pinimg.com/564x/94/ed/fe/94edfeeee0a0f8e77b492a8a9375e4f8.jpg">'
}
document.write(Image)
=======
>>>>>>> 52202cba17c9ea4600e6929416e0b93309eb44a4
