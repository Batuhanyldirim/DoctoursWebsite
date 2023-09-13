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
        imageUrls: "images/teeth op.jpg"
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
];

// Get the container element where the blog posts will be generated
var blogPostsContainer = document.getElementById("blogHtml");

blogPostsData.forEach(function (post, index) {

    // Create the elements for each blog post
    var postElement = document.createElement("div");
    postElement.classList.add("blogItem");


    // Create a container for the image and content
    var postLinkItem = document.createElement("a");
    postLinkItem.href = post.buttonUrl;
    postLinkItem.textContent = post.buttonLabel;

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


    var linkElement = document.createElement("a");
    linkElement.href = post.buttonUrl;

    // Append the elements to the blog post container
    textContainer.appendChild(itemTitle);
    linkElement.appendChild(imageElement);
    linkElement.appendChild(textContainer);
    postElement.appendChild(linkElement);
    blogPostsContainer.appendChild(postElement);


});

