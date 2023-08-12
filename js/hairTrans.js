document.addEventListener('DOMContentLoaded', () => {
    const servicesText1 = document.querySelector('.services-text1');
    const hairTransImage1 = document.querySelector('.hairTransImg1');

    hairTransImage1.addEventListener('mouseover', () => {
        servicesText1.style.display = 'block';

        servicesText2.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    hairTransImage1.addEventListener('click', () => {
        servicesText1.style.display = 'block';
        hairTransImage1.removeEventListener('mouseout', hideServicesText1);

        servicesText2.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText1 = () => {
        servicesText1.style.display = 'none';
    };

    hairTransImage1.addEventListener('mouseout', hideServicesText1);





    const servicesText2 = document.querySelector('.services-text2');
    const hairTransImage2 = document.querySelector('.hairTransImg2');

    hairTransImage2.addEventListener('mouseover', () => {
        servicesText2.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    hairTransImage2.addEventListener('click', () => {
        servicesText2.style.display = 'block';
        hairTransImage2.removeEventListener('mouseout', hideServicesText2);

        servicesText1.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText2 = () => {
        servicesText2.style.display = 'none';
    };

    hairTransImage2.addEventListener('mouseout', hideServicesText2);



    const servicesText5 = document.querySelector('.services-text5');
    const hairTransImage5 = document.querySelector('.hairTransImg5');

    hairTransImage5.addEventListener('mouseover', () => {
        servicesText5.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    hairTransImage5.addEventListener('click', () => {
        servicesText5.style.display = 'block';
        hairTransImage5.removeEventListener('mouseout', hideServicesText5);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText5 = () => {
        servicesText5.style.display = 'none';
    };

    hairTransImage5.addEventListener('mouseout', hideServicesText5);




    const servicesText6 = document.querySelector('.services-text6');
    const hairTransImage6 = document.querySelector('.hairTransImg6');

    hairTransImage6.addEventListener('mouseover', () => {
        servicesText6.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code


    });

    hairTransImage6.addEventListener('click', () => {
        servicesText6.style.display = 'block';
        hairTransImage6.removeEventListener('mouseout', hideServicesText6);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        hairTransImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        hairTransImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        hairTransImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
    });

    const hideServicesText6 = () => {
        servicesText6.style.display = 'none';
    };

    hairTransImage6.addEventListener('mouseout', hideServicesText6);


});


