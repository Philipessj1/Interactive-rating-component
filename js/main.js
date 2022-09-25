function submitRating() {
  if (rating !== '') {

    // Creating elements

    const img = document.createElement('img');
    img.src = 'assets/illustration-thank-you.svg';

    const span = document.createElement('span');
    span.innerText = `You selected ${rating} out of 5`
    
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = 'Thank you!';

    const p = document.createElement('p');
    p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    // Clean the component

    const component = document.querySelector('.component');
    component.innerHTML = '';

    // Appending elements

    div.appendChild(h2);
    div.appendChild(p);

    component.appendChild(img);
    component.appendChild(span);
    component.appendChild(div);

    toggleState(component);

  } else {
    alert('Select a number!');
    return;
  }
}

// Toggle the component Class

function toggleState(element) {
  element.classList.toggle('rating-state');
  element.classList.toggle('thank-you-state');
}
// Save the rating score

function ratingSelect(param) {
  num = Number(param);
  rating = num;
  changeStyle(num);
}

// Change the numbers 

function changeStyle(param) {
  for (let i = 1; i < 6; i++) {
    element = document.getElementById(i);
    if (param === i) {
      element.style = 'color: white; background-color: hsl(25, 97%, 53%);';
    } else {
      element.style = '';
    }
  }
}

rating = '';
