document.addEventListener('DOMContentLoaded', () => {
    const servicesText1 = document.querySelector('.services-text1');
    const dentalImage1 = document.querySelector('.dentalImg1');

    dentalImage1.addEventListener('mouseover', () => {
        servicesText1.style.display = 'block';

        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    dentalImage1.addEventListener('click', () => {
        servicesText1.style.display = 'block';
        dentalImage1.removeEventListener('mouseout', hideServicesText1);

        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText1 = () => {
        servicesText1.style.display = 'none';
    };

    dentalImage1.addEventListener('mouseout', hideServicesText1);





    const servicesText2 = document.querySelector('.services-text2');
    const dentalImage2 = document.querySelector('.dentalImg2');

    dentalImage2.addEventListener('mouseover', () => {
        servicesText2.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    dentalImage2.addEventListener('click', () => {
        servicesText2.style.display = 'block';
        dentalImage2.removeEventListener('mouseout', hideServicesText2);

        servicesText1.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText2 = () => {
        servicesText2.style.display = 'none';
    };

    dentalImage2.addEventListener('mouseout', hideServicesText2);





    const servicesText3 = document.querySelector('.services-text3');
    const dentalImage3 = document.querySelector('.dentalImg3');

    dentalImage3.addEventListener('mouseover', () => {
        servicesText3.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    dentalImage3.addEventListener('click', () => {
        servicesText3.style.display = 'block';
        dentalImage3.removeEventListener('mouseout', hideServicesText3);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText3 = () => {
        servicesText3.style.display = 'none';
    };

    dentalImage3.addEventListener('mouseout', hideServicesText3);




    const servicesText4 = document.querySelector('.services-text4');
    const dentalImage4 = document.querySelector('.dentalImg4');

    dentalImage4.addEventListener('mouseover', () => {
        servicesText4.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    dentalImage4.addEventListener('click', () => {
        servicesText4.style.display = 'block';
        dentalImage4.removeEventListener('mouseout', hideServicesText4);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText4 = () => {
        servicesText4.style.display = 'none';
    };

    dentalImage4.addEventListener('mouseout', hideServicesText4);




    const servicesText5 = document.querySelector('.services-text5');
    const dentalImage5 = document.querySelector('.dentalImg5');

    dentalImage5.addEventListener('mouseover', () => {
        servicesText5.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    dentalImage5.addEventListener('click', () => {
        servicesText5.style.display = 'block';
        dentalImage5.removeEventListener('mouseout', hideServicesText5);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText5 = () => {
        servicesText5.style.display = 'none';
    };

    dentalImage5.addEventListener('mouseout', hideServicesText5);




    const servicesText6 = document.querySelector('.services-text6');
    const dentalImage6 = document.querySelector('.dentalImg6');

    dentalImage6.addEventListener('mouseover', () => {
        servicesText6.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code


    });

    dentalImage6.addEventListener('click', () => {
        servicesText6.style.display = 'block';
        dentalImage6.removeEventListener('mouseout', hideServicesText6);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        dentalImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        dentalImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        dentalImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        dentalImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        dentalImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
    });

    const hideServicesText6 = () => {
        servicesText6.style.display = 'none';
    };

    dentalImage6.addEventListener('mouseout', hideServicesText6);


});


