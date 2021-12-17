const navSlide = () => {
    const dropdown = document.querySelector('.dropdown');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');

    dropdown.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
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