document.addEventListener('DOMContentLoaded', () => {
    const servicesText1 = document.querySelector('.services-text1');
    const plasticSurgImage1 = document.querySelector('.plasticSurgImg1');

    plasticSurgImage1.addEventListener('mouseover', () => {
        servicesText1.style.display = 'block';

        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    plasticSurgImage1.addEventListener('click', () => {
        servicesText1.style.display = 'block';
        plasticSurgImage1.removeEventListener('mouseout', hideServicesText1);

        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText1 = () => {
        servicesText1.style.display = 'none';
    };

    plasticSurgImage1.addEventListener('mouseout', hideServicesText1);





    const servicesText2 = document.querySelector('.services-text2');
    const plasticSurgImage2 = document.querySelector('.plasticSurgImg2');

    plasticSurgImage2.addEventListener('mouseover', () => {
        servicesText2.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    plasticSurgImage2.addEventListener('click', () => {
        servicesText2.style.display = 'block';
        plasticSurgImage2.removeEventListener('mouseout', hideServicesText2);

        servicesText1.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText2 = () => {
        servicesText2.style.display = 'none';
    };

    plasticSurgImage2.addEventListener('mouseout', hideServicesText2);





    const servicesText3 = document.querySelector('.services-text3');
    const plasticSurgImage3 = document.querySelector('.plasticSurgImg3');

    plasticSurgImage3.addEventListener('mouseover', () => {
        servicesText3.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    plasticSurgImage3.addEventListener('click', () => {
        servicesText3.style.display = 'block';
        plasticSurgImage3.removeEventListener('mouseout', hideServicesText3);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText3 = () => {
        servicesText3.style.display = 'none';
    };

    plasticSurgImage3.addEventListener('mouseout', hideServicesText3);




    const servicesText4 = document.querySelector('.services-text4');
    const plasticSurgImage4 = document.querySelector('.plasticSurgImg4');

    plasticSurgImage4.addEventListener('mouseover', () => {
        servicesText4.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    plasticSurgImage4.addEventListener('click', () => {
        servicesText4.style.display = 'block';
        plasticSurgImage4.removeEventListener('mouseout', hideServicesText4);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText4 = () => {
        servicesText4.style.display = 'none';
    };

    plasticSurgImage4.addEventListener('mouseout', hideServicesText4);




    const servicesText5 = document.querySelector('.services-text5');
    const plasticSurgImage5 = document.querySelector('.plasticSurgImg5');

    plasticSurgImage5.addEventListener('mouseover', () => {
        servicesText5.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code


    });

    plasticSurgImage5.addEventListener('click', () => {
        servicesText5.style.display = 'block';
        plasticSurgImage5.removeEventListener('mouseout', hideServicesText5);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText6.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage6.addEventListener('mouseout', hideServicesText6);//they are delete code
    });

    const hideServicesText5 = () => {
        servicesText5.style.display = 'none';
    };

    plasticSurgImage5.addEventListener('mouseout', hideServicesText5);




    const servicesText6 = document.querySelector('.services-text6');
    const plasticSurgImage6 = document.querySelector('.plasticSurgImg6');

    plasticSurgImage6.addEventListener('mouseover', () => {
        servicesText6.style.display = 'block';

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code


    });

    plasticSurgImage6.addEventListener('click', () => {
        servicesText6.style.display = 'block';
        plasticSurgImage6.removeEventListener('mouseout', hideServicesText6);

        servicesText1.style.display = 'none';//they are delete code
        servicesText2.style.display = 'none';//they are delete code
        servicesText3.style.display = 'none';//they are delete code
        servicesText4.style.display = 'none';//they are delete code
        servicesText5.style.display = 'none';//they are delete code
        plasticSurgImage1.addEventListener('mouseout', hideServicesText1);//they are delete code
        plasticSurgImage2.addEventListener('mouseout', hideServicesText2);//they are delete code
        plasticSurgImage3.addEventListener('mouseout', hideServicesText3);//they are delete code
        plasticSurgImage4.addEventListener('mouseout', hideServicesText4);//they are delete code
        plasticSurgImage5.addEventListener('mouseout', hideServicesText5);//they are delete code
    });

    const hideServicesText6 = () => {
        servicesText6.style.display = 'none';
    };

    plasticSurgImage6.addEventListener('mouseout', hideServicesText6);


});


