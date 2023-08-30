var blogPostsData = [
    {
        id: "post1",
        title: `Rhinoplasty: A New Nose, A New Confidence`,
        description: `Every individuae way that enhances the self-confidence and improves 
        the aesthetic appearanc`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post1",
        imageUrls: "images/nose-dummy.jpg",
    },
    {
        id: "post2",
        title: `What to Consider When Deciding on Rhinoplasty?`,
        description: `Doing thorough research: Gather information about rhinoplasty from reliable sources. Learn about the 
        rhinoplasty process,  
        changing...`,
        buttonLabel: `More >>`,
        buttonUrl: "blogSingleMobile.html?id=post2",
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
        buttonUrl: "blogSingleMobile.html?id=post2",
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
        buttonUrl: "blogSingleMobile.html?id=post2",
        imageUrls: "images/hair1.jpg"
    }
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


