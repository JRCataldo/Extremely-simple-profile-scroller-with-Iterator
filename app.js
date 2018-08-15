// Data which normally would be pulled from an API 
const data = [
 {
   name: 'John Doe',
   age: 32, 
   gender: 'male',
   lookingfor: 'female',
   location: 'Boston MA',
   image: 'https://randomuser.me/api/portraits/men/82.jpg'
 }, 
 {
  name: 'Jen Smith',
  age: 27, 
  gender: 'female',
  lookingfor: 'male',
  location: 'Miami FL',
  image: 'https://randomuser.me/api/portraits/women/82.jpg'
},
{
  name: 'William Doe',
  age: 38, 
  gender: 'male',
  lookingfor: 'female',
  location: 'Lynn MA',
  image: 'https://randomuser.me/api/portraits/men/83.jpg'
},
];

const profiles = profileIterator(data);

// call first profile
nextProfile();


// next Event
document.getElementById('next').addEventListener('click', nextProfile);


// next profile display
function nextProfile(){

  const currentProfile = profiles.next().value;

  if(currentProfile !==undefined){

      document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      `;

      document.getElementById('image-display').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    document.getElementById('profile-display').innerHTML = '';
    document.getElementById('image-display').innerHTML = '<img src="https://cdn.pixabay.com/photo/2015/09/02/16/53/end-919336_1280.jpg" height="200px">'

  }
}


// Profile iterator
function profileIterator(profiles){
  let nextIndex = 0;
  
  return{
    next: function(){
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false} : 
      { done: true}
    }
  };
}