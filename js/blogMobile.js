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
        imageUrls: "images/forehead-lift1.png"
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
        imageUrls: "images/teeth-aesth2.png"
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
var blogPostsContainer = document.getElementById("blogContainer");

blogPostsData.forEach(function (post, index) {

    // Create the elements for each blog post
    var postElement = document.createElement("div");
    postElement.classList.add("blogItem");


    // Create a container for the image and content
    var postLinkItem = document.createElement("a");
    postLinkItem.href = post.buttonUrl;
    //spostLinkItem.textContent = post.buttonLabel;

    // Create an image container
    var iamgeContainer = document.createElement("div");
    iamgeContainer.classList.add("imageContainer");

    // Create the image element and set its source
    var imageElement = document.createElement("img");
    imageElement.src = post.imageUrls;
    imageElement.classList.add("postImage");

    // Create a container for the blog post content
    var textContainer = document.createElement("div");
    textContainer.classList.add("blogTexts");

    var itemTitle = document.createElement("div");
    itemTitle.classList.add("itemTitle");
    itemTitle.textContent = post.title;



    // Append the elements to the blog post container
    textContainer.appendChild(itemTitle);
    iamgeContainer.appendChild(imageElement);
    iamgeContainer.appendChild(textContainer);
    postLinkItem.appendChild(iamgeContainer);
    postElement.appendChild(postLinkItem);
    blogPostsContainer.appendChild(postElement);


});


