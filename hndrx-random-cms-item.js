document.addEventListener("DOMContentLoaded", function () {
  function randomImage() {
    var collectionList = document.querySelector('[hndrx-random-cms-item="list"]');

    // Get the child elements of the collectionList
    const children = collectionList.children;

    const randomNumber = Math.ceil(Math.random() * children.length);
    console.log(`Random Number: ${randomNumber}`);

    const randomChild = children[randomNumber - 1]; // Array is 0-based, so subtract 1 from the random number
    console.log(`Random List Item:`);
    console.log(randomChild);

    // Show the chosenImg and hide all other parent divs
    const chosenDiv = randomChild;
    chosenDiv.classList.remove("hide");

    // Loop through all children and hide their parent divs except for the chosenDiv
    for (let i = 0; i < children.length; i++) {
      if (children[i] !== randomChild) {
        children[i].classList.add("hide");
      }
    }
  }

  // Call the randomImage function after the page has loaded
  randomImage();
});
