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
    const backgroundColorR = 255 - Math.round(48 * 3 * (scrollPercentage - colorStart)); // Adjust the R component
    const backgroundColorG = 255 - Math.round(26 * 3 * (scrollPercentage - colorStart)); // Adjust the G component
    const backgroundColorB = 255 - Math.round(26 * 3 * (scrollPercentage - colorStart)); // Adjust the B component
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
});