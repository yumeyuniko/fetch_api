const getRandomUserData = (gender) => {
  fetch(`https://randomuser.me/api/?gender=male&results=10`)
    .then((data) => data.json())
    .then((data) => console.log(data));
};

document.querySelector('button').addEventListener('click', () => {
  const gender = document.querySelector('input[name="gender"]:checked').value;

  getRandomUserData(gender);
});
