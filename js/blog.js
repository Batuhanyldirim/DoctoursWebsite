var blogPostsData = [
    {
        id: "post1",
        title: `What is facial aesthetics?`,
        description: `Facial aesthetics encompasses various services such as facelift, eyelid surgery, forehead lift, 
        facial fillers, Botox injections, chin augmentation, and ear surgery.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post1",
        imageUrls: "images/foto001-2.jpg",
    },
    {
        id: "post2",
        title: `What is a Botox injection?`,
        description: `A Botox injection is a cosmetic treatment method that uses a protein called botulinum toxin type A. 
        Botulinum toxin temporarily relaxes muscles by blocking nerve signals from nerves to muscles.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post2",
        imageUrls: "images/botox2.jpg"
    },
    {
        id: "post3",
        title: `Learn More About Chemical Peeling`,
        description: `Chemical peel is a cosmetic treatment method that involves controlled exfoliation of the skin's outer layer (epidermis) 
        using a chemical solution. This procedure aims to rejuvenate the skin by improving skin tone, reducing pigmentation, 
        lightening acne scars, smoothing fine wrinkles, and addressing sun damage and other skin issues.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post3",
        imageUrls: "images/pexels-polina-kovaleva-6543489.jpg"
    },
    {
        id: "post4",
        title: `Blepharoplasty (Eyelid Aesthetics)`,
        description: `Eyelids may sag and loosen during the aging process, resulting in a tired, older, and melancholic appearance.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post4",
        imageUrls: "images/sagging eyelid.png"
    },
    {
        id: "post5",
        title: `A New Nose, A New Confidence`,
        description: `Every individual has their own unique sense of beauty. For many people, one way to enhance their self-confidence and 
        improve their aesthetic appearance is through rhinoplasty, also known as a nose job.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post5",
        imageUrls: "images/nose-dummy.jpg"
    },
    {
        id: "post6",
        title: `Face and Forehead Lift (French Lift)`,
        description: `Face and forehead lift is a surgical procedure performed to correct the signs of aging in the face and forehead region. 
        The face lift procedure aims to reposition the sagging skin and muscle tissues of the face to achieve a younger 
        appearance.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post6",
        imageUrls: "images/nose-dummy.jpg"
    },
    {
        id: "post7",
        title: `What is Dental Implant Treatment?`,
        description: `Dental implant treatment involves the placement of an artificial tooth root to replace a missing tooth. It is performed 
        to restore a lost tooth both aesthetically and functionally. Dental implants are typically made of biocompatible materials 
        such as titanium and are integrated into the jawbone.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post7",
        imageUrls: "images/teeth op.jpg"
    },
    {
        id: "post8",
        title: `Dermal Filler`,
        description: `Dermal filler is a cosmetic treatment involving injections under the skin. This treatment is used to correct 
        wrinkles on the skin, enhance facial contours, or restore volume to areas experiencing loss. Dermal filler substances are 
        typically made of biologically compatible materials such as hyaluronic acid, calcium hydroxylapatite, or polylactic acid.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post8",
        imageUrls: "images/skin.jpg"
    },
    {
        id: "post9",
        title: `In-vitro fertilization (IVF)`,
        description: `In-vitro fertilization (IVF) is a medical procedure and one of the most commonly used assisted reproductive 
        technologies for couples facing infertility issues.It is a fertility treatment method where an egg and sperm are 
        combined outside the body in a laboratory dish (in vitro) to create an embryo.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post9",
        imageUrls: "images/baby.jpg"
    },
    {
        id: "post10",
        title: `Learn More About Liposuction`,
        description: `Liposuction is a surgical procedure performed to remove excess fat tissue from the body. It involves using a vacuum ,
        device and a thin cannula to suction out fat cells. This reduces unwanted fat deposits and reshapes the body. Liposuction can be applied to areas such as the abdomen, waist, hips, thighs, knees, upper arms, neck, and chin. It is 
        commonly chosen to reduce excess fat deposits in these areas and improve body contours.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post10",
        imageUrls: "images/liposux2.jpg"
    },
    {
        id: "post11",
        title: `What are Arm and Leg Lift Surgeries`,
        description: `Arm-leg lift surgery" typically refers to a surgical procedure performed to correct skin sagging caused by bariatric
        surgery or aging. Bariatric surgery involves surgical interventions aimed at weight loss for individuals who are 
        severely overweight or obese. Significant weight loss resulting from such surgeries can lead to substantial skin 
        sagging. Skin sagging is particularly common in the arm, leg, and abdominal areas. The surgical procedure aims to 
        address these issues and tighten the sagging skin, resulting in a more toned appearance.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post11",
        imageUrls: "images/armlift.jpg"
    },
    {
        id: "post12",
        title: `Otoplasty`,
        description: `Otoplasty is a surgical procedure performed to correct abnormalities in the shape or position of the outer ear, 
        either congenital or resulting from trauma. Otoplasty is commonly performed on individuals with issues such as 
        "protruding ears" or "lop ears. The purpose of otoplasty is to bring the ear into a more symmetrical position, prevent ears from protruding too far 
        from the head, or correct abnormal folds or deformities in the ear's shape.`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post12",
        imageUrls: "images/cauliflower-ear1.jpg"
    },
];

// Get the container element where the blog posts will be generated
var blogPostsContainer = document.getElementById("blogPosts");
var imageElement = document.querySelector(".blogBack");
var leftTextElement = document.querySelector(".leftText");

// Calculate the initial top position of the image and leftText
var initialTopPosition = imageElement.offsetTop;
var initialLeftPosition = leftTextElement.offsetTop;

// Update the position of the image and leftText based on the scroll position
window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;

    // Calculate the new top position of the image and leftText
    var newTopPosition = initialTopPosition;
    var newLeftPosition = initialLeftPosition;

    // Update the top and left positions of the image and leftText
    imageElement.style.top = newTopPosition + "px";
    leftTextElement.style.top = newLeftPosition + "px";
});

blogPostsData.forEach(function (post, index) {
    // Create the elements for each blog post
    var postElement = document.createElement("div");

    // Add a special class for even-indexed posts
    if (index % 2 === 0) {
        if (index == blogPostsData.length - 1) postElement.classList.add("lastEvenPost");
        else postElement.classList.add("evenPost");
    } else {
        if (index == blogPostsData.length - 1) postElement.classList.add("lastOddPost");
        else postElement.classList.add("oddPost");
    }

    // Create a container for the image and content
    var imageAndContentContainer = document.createElement("div");
    imageAndContentContainer.classList.add("imageAndContentContainer");

    // Create the image element and set its source
    var imageElement = document.createElement("img");
    imageElement.src = post.imageUrls;
    imageElement.classList.add("postImage");

    // Create a container for the blog post content
    var contentContainer = document.createElement("div");
    contentContainer.classList.add("postContent");

    var titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = post.description;

    var linkElement = document.createElement("a");
    linkElement.href = post.buttonUrl;
    linkElement.textContent = post.buttonLabel;

    // Append the elements to the blog post container
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(descriptionElement);
    contentContainer.appendChild(linkElement);

    // Determine the order of the image and content based on post index
    if (index % 2 === 1) {
        imageAndContentContainer.appendChild(contentContainer);
        imageAndContentContainer.appendChild(imageElement);
    } else {
        imageAndContentContainer.appendChild(imageElement);
        imageAndContentContainer.appendChild(contentContainer);
    }

    postElement.appendChild(imageAndContentContainer);
    blogPostsContainer.appendChild(postElement);
});


// Adjust the height of the blog parent container to cover all blog posts
var blogParentContainer = document.getElementById("blogHtml");
blogParentContainer.style.height = blogPostsContainer.offsetHeight + "px";
