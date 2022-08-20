const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '13px';
    section.style.paddingLeft = '15px';
    section.style.backgroundColor = 'lightgreen'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightblue';


const placesContainer = document.getElementById('place-container');
placesContainer.classList.add('yellow-bg');