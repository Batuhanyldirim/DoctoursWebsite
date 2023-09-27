var blogPostsData = [
    {
        id: "post1",
        title: `What is facial aesthetics?`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post1",
        imageUrls: "images/foto001-2.jpg",
    },
    {
        id: "post2",
        title: `What is a Botox injection?`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post2",
        imageUrls: "images/botox2.jpg"
    },
    {
        id: "post3",
        title: `Learn More About Chemical Peeling`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post3",
        imageUrls: "images/pexels-polina-kovaleva-6543489.jpg"
    },
    {
        id: "post4",
        title: `Blepharoplasty (Eyelid Aesthetics)`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post4",
        imageUrls: "images/sagging eyelid.png"
    },
    {
        id: "post5",
        title: `A New Nose, A New Confidence`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post5",
        imageUrls: "images/nose-dummy.jpg"
    },
    {
        id: "post6",
        title: `Face and Forehead Lift (French Lift)`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post6",
        imageUrls: "images/nose-dummy.jpg"
    },
    {
        id: "post7",
        title: `What is Dental Implant Treatment?`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post7",
        imageUrls: "images/teeth-aesth1.jpg"
    },
    {
        id: "post8",
        title: `Dermal Filler`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post8",
        imageUrls: "images/skin.jpg"
    },
    {
        id: "post9",
        title: `In-vitro fertilization (IVF)`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post9",
        imageUrls: "images/baby.jpg"
    },
    {
        id: "post10",
        title: `Learn More About Liposuction`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post10",
        imageUrls: "images/liposux2.jpg"
    },
    {
        id: "post11",
        title: `What are Arm and Leg Lift Surgeries`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post11",
        imageUrls: "images/armlift.jpg"
    },
    {
        id: "post12",
        title: `Otoplasty`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post12",
        imageUrls: "images/cauliflower-ear1.jpg"
    },
    {
        id: "post13",
        title: `TEETH WHITENING`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post13",
        imageUrls: "images/teeth-aesth1.jpg"
    },
    {
        id: "post14",
        title: `ORTHODONTY`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post14",
        imageUrls: "images/ortho4.png"
    },
    {
        id: "post15",
        title: `PERIDONTOLOGY`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post15",
        imageUrls: "images/periodont1.png"
    },
    {
        id: "post16",
        title: `ORAL ODORS`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post16",
        imageUrls: "images/halitosis3.png"
    },
    {
        id: "post17",
        title: `DENTAL IMPLANT`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post17",
        imageUrls: "images/dental-implant5.png"
    },
    {
        id: "post18",
        title: `ENDODONTICS`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post17",
        imageUrls: "images/endodontics2.png"
    },
    {
        id: "post19",
        title: `Liposuction`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post19",
        imageUrls: "images/liposux2.jpg"
    },
    {
        id: "post20",
        title: `Facial Aesthetics`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post20",
        imageUrls: "images/foto001-2.jpg"
    },
    {
        id: "post21",
        title: `Abdominoplasty`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post21",
        imageUrls: "images/tummy2.png"
    },
    {
        id: "post22",
        title: `Arm-Leg Lift Surgery`,
        description: ``,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post22",
        imageUrls: "images/armlift.jpg"
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
