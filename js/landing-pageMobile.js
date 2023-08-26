window.addEventListener("scroll", function () {
    // Get the scroll position as a value between 0 and 1
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the desired opacity based on the scroll percentage
    const desiredOpacity = 1 - scrollPercentage * 2;
    const desiredTop = -1000 * scrollPercentage;
    const serviceAnimation = 400 * scrollPercentage;
    const servicesStart1 = -100;
    const servicesStart2 = -120;
    const servicesStart3 = -140;
    const servicesStart4 = -160;

    // Update the background color based on the scroll percentage
    const colorStart = 0.40;
    const backgroundColorR = 255 - Math.round(48 * 4 * (scrollPercentage - colorStart)); // Adjust the R component
    const backgroundColorG = 255 - Math.round(26 * 4 * (scrollPercentage - colorStart)); // Adjust the G component
    const backgroundColorB = 255 - Math.round(26 * 4 * (scrollPercentage - colorStart)); // Adjust the B component
    const backgroundColor = `rgb(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB})`;


    // Apply the calculated opacity to the video element
    document.querySelector(".video-bg").style.opacity = desiredOpacity;
    document.querySelector(".landing-page").style.top = `${desiredTop}px`;

    if (scrollPercentage > 0.4) {
        document.querySelector(".whyDoc").style.backgroundColor = backgroundColor;

        const ourServicesLinks = document.querySelectorAll(".our-services a");
        ourServicesLinks.forEach(link => {
            link.style.backgroundColor = backgroundColor;
        });
    }


    if (servicesStart1 + serviceAnimation < 0) document.querySelector(".service-container1").style.left = `${servicesStart1 + serviceAnimation}%`;
    if (servicesStart2 + serviceAnimation < 0) document.querySelector(".service-container2").style.left = `${servicesStart2 + serviceAnimation}%`;
    if (servicesStart3 + serviceAnimation < 0) document.querySelector(".service-container3").style.left = `${servicesStart3 + serviceAnimation}%`;
    if (servicesStart4 + serviceAnimation < 0) document.querySelector(".service-container4").style.left = `${servicesStart4 + serviceAnimation}%`;


    const whyScroll = -200 * scrollPercentage;
    const rowStart1 = 100;
    const rowStart2 = 150;
    const rowStart3 = 200;
    const rowStart4 = 250;
    const rowStart5 = 300;


    console.log({ whyScroll })


    if (whyScroll > -75) document.querySelector(".row1").style.top = `${rowStart1 + whyScroll}%`;
    else if (whyScroll < -90) document.querySelector(".row1").style.top = `${rowStart1 + whyScroll + 15}%`
    else console.log("Row 1 has stopped")

    if (whyScroll > -110) document.querySelector(".row2").style.top = `${rowStart2 + whyScroll}%`;
    else if (whyScroll < -125) document.querySelector(".row2").style.top = `${rowStart2 + whyScroll + 15}%`
    else console.log("Row 2 has stopped")

    if (whyScroll > -160) document.querySelector(".row3").style.top = `${rowStart3 + whyScroll}%`;
    else if (whyScroll < -175) document.querySelector(".row3").style.top = `${rowStart3 + whyScroll + 15}%`
    else console.log("Row 3 has stopped")

    if (whyScroll > -180) document.querySelector(".row4").style.top = `${rowStart4 + whyScroll}%`;
    else if (whyScroll < -195) document.querySelector(".row4").style.top = `${rowStart4 + whyScroll + 15}%`
    else console.log("Row 4 has stopped")

    if (whyScroll > -200) document.querySelector(".row5").style.top = `${rowStart5 + whyScroll}%`;
    else if (whyScroll < -215) document.querySelector(".row5").style.top = `${rowStart5 + whyScroll + 15}%`
    else console.log("Row 5 has stopped")






});