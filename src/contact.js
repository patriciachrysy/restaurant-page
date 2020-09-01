function loadContactPage() {
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Get your table right now, check the oppening hours and fill the form!!';
  h1.className = 'menu-header';
  mainContent.appendChild(h1);

  const sched = document.createElement('section');
  sched.className = 'schedule';
  const hours = document.createElement('div');
  hours.className = 'hours';
  const h2 = document.createElement('h2');
  h2.innerHTML = 'When are we oppened';
  hours.appendChild(h2);
  const p1 = document.createElement('p');
  p1.innerHTML = '<b>Monday - Friday</b> : 12:00PM - 8:30PM';
  hours.appendChild(p1);
  const p2 = document.createElement('p');
  p2.innerHTML = '<b>Monday - Friday</b> : 12:00PM - 8:30PM';
  hours.appendChild(p2);
  const p3 = document.createElement('p');
  p3.innerHTML = '<b>Monday - Friday</b> : 12:00PM - 8:30PM';
  hours.appendChild(p3);
  sched.appendChild(hours);

  const yello = document.createElement('div');
  yello.className = 'yellow-vertical-bar';
  sched.appendChild(yello);

  const location = document.createElement('div');
  location.className = 'location';
  const titre = document.createElement('h2');
  titre.innerHTML = 'Where can you find us';
  location.appendChild(titre);
  const l1 = document.createElement('p');
  l1.innerHTML = `<i class="las la-campground"></i>
    <span> 13 Kwame Kruhma street, Accra - Ghana</span>`;
  location.appendChild(l1);
  const l2 = document.createElement('p');
  l2.innerHTML = `<i class="las la-user-astronaut"></i>
    <span> 00 88 55 77 44  /  5588 47 63 78</span>`;
  location.appendChild(l2);
  const l3 = document.createElement('p');
  l3.innerHTML = `<i class="las la-envelope"></i>
    <span> contact@thedelish.com </span>`;
  location.appendChild(l3);
  sched.appendChild(location);

  mainContent.appendChild(sched);

  const form = document.createElement('section');
  form.className = 'form';

  const myform = document.createElement('form');
  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Your name(s)';
  myform.appendChild(name);
  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Your email';
  myform.appendChild(email);
  const text = document.createElement('textarea');
  text.placeholder = 'Describe your reservation';
  text.cols = 30;
  text.rows = 10;
  myform.appendChild(text);
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Book';
  myform.appendChild(button);

  form.appendChild(myform);

  mainContent.appendChild(form);

  return mainContent;
}

export default loadContactPage();