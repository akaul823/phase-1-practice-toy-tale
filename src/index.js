let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  const URL = "http://localhost:3000/toys"
  fetch(URL)
  .then(response=>response.json())
  .then(toys=>{
    toys.forEach(toy=>createToy(toy))
  })
});

function createToy(toy){
  //Selecting a section from the HTML where we will present it on
  const toyList = document.querySelector("#toy-collection")
  //Creates an H2 element containing toy name
  const name = document.createElement("h2")
  name.textContent = toy.name
  // creates an image element with the toy picture
  const image = document.createElement("img")
  image.src = toy.image
  image.classList.add("toy-avatar")
  //creates a p element to hold the likes
  const likes = document.createElement("p")
  likes.textContent = `${toy.likes} likes`
  likes.classList.add("like-btn")
  likes.id = toy.id
  //like button
  const button = document.createElement("button")
  button.textContent = "like"

  //Creates a card and puts information on it
  const card = document.createElement("div")
  card.append(name, image, likes, button)
  card.classList.add("card")

  //Add to the toyList
  toyList.append(card)
}
