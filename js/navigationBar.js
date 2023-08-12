

// navigationBar.js

$(document).ready(function () {
    // Function to handle scroll events
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();

        // Loop through each section to find the active one
        $(".navbar li").each(function () {
            var sectionId = $(this).find("a").attr("href");
            /*             console.log("$(this).scrollTop());", scrollPosition)
                        console.log({ sectionId });
                        console.log("offset", $(sectionId).offset()); */
            var sectionTop = $(sectionId).offset().top - 400; // Adjust the offset to fit your design

            // Check if the current section is in view
            if (scrollPosition >= sectionTop) {
                // Remove the 'active' class from all list items
                $(".navbar li").removeClass("active");
                // Add the 'active' class to the corresponding list item
                $(this).addClass("active");

                // Store the active section in local storage
                localStorage.setItem("activeSection", sectionId);
            }
            else if ($('#our-services').offset().top - 100 >= sectionTop) {
                $(".navbar li").removeClass("active");
            }
        });
    });

    // On page load, check the stored active section and add the 'active' class to the corresponding list item
    var activeSection = localStorage.getItem("activeSection");
    if (activeSection) {
        $(".navbar li").removeClass("active");
        $('a[href="' + activeSection + '"]').closest("li").addClass("active");
    }
});
