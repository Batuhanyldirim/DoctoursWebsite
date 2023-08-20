var blogPostsData = [
    {
        id: "post1",
        title: `Rhinoplasty: A New Nose, A New Confidence`,
        description: `Every individuae way that enhances the self-confidence and improves 
        the aesthetic appearanc`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post1",
        imageUrls: "images/nose-dummy.jpg",
    },
    {
        id: "post2",
        title: `What to Consider When Deciding on Rhinoplasty?`,
        description: `Doing thorough research: Gather information about rhinoplasty from reliable sources. Learn about the 
        rhinoplasty process,  
        changing...`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post2",
        imageUrls: "images/hair1.jpg"
    },
    {
        id: "post3",
        title: `What to Consider When Deciding on Rhinoplasty?`,
        description: `Doing thorough research: Gather information about rhinoplasty from reliable sources. Learn about the 
        rhinoplasty process, the recovery period, and potential risks. Conduct research to find a repu- table plastic surgeon 
        and evaluate their references. Setting realistic expectations: Rhinoplasty is a surgical procedure aimed at improving or 
        changing...`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post2",
        imageUrls: "images/dental1.jpg"
    },
    {
        id: "post4",
        title: `What to Consider When Deciding on Rhinoplasty?`,
        description: `Doing thorough research: Gather information about rhinoplasty from reliable sources. Learn about the 
        rhinoplasty process, the recovery period, and potential risks. Conduct research to find a repu- table plastic surgeon 
        and evaluate their references. Setting realistic expectations: Rhinoplasty is a surgical procedure aimed at improving or 
        changing...`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingle.html?id=post2",
        imageUrls: "images/hair1.jpg"
    }
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
