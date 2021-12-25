const navSlide = () => {
    const dropdown = document.querySelector('.dropdown');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');

    //When dropdown is clicked
    dropdown.addEventListener('click', () => {
        //Toggle Navigaton Bar
        nav.classList.toggle('nav-active');

        //Links Animation
        navLink.forEach((link, index) => {
            if(link.style.animation)
            {
                link.style.animation ='';
            }
            else
            {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Dropdown Animation
        dropdown.classList.toggle('toggle');
    });
}

navSlide();