const successStories = [
    { image: 'img/story/story1_image1.jpg', text: 'Story 1 description...' },
    { image: 'img/story/story1_image2.jpg', text: 'Story 2 description...' },
    { image: 'img/story/story1_image3.jpg', text: 'Story 3 description...' },
    { image: 'img/story/story1_image4.jpg', text: 'Story 4 description...' },
    { image: 'img/story/story1_image5.jpg', text: 'Story 5 description...' },
    { image: 'img/story/story1_image6.jpg', text: 'Story 6 description...' },
    { image: 'img/story/story1_image7.jpg', text: 'Story 7 description...' },
    { image: 'img/story/story1_image8.jpg', text: 'Story 8 description...' },
    { image: 'img/story/story1_image9.jpg', text: 'Story 9 description...' },
    { image: 'img/story/story1_image10.jpg', text: 'Story 10 description...' },
    { image: 'img/story/story1_image11.jpg', text: 'Story 11 description...' },
    { image: 'img/story/story1_image12.jpg', text: 'Story 12 description...' },
    { image: 'img/story/story1_image13.jpg', text: 'Story 13 description...' },
    { image: 'img/story/story1_image14.jpg', text: 'Story 14 description...' },
    { image: 'img/story/story1_image15.jpg', text: 'Story 15 description...' },
    { image: 'img/story/story1_image16.jpg', text: 'Story 16 description...' },
    { image: 'img/story/story1_image17.jpg', text: 'Story 17 description...' },
    { image: 'img/story/story1_image18.jpg', text: 'Story 18 description...' },
    { image: 'img/story/story1_image19.jpg', text: 'Story 19 description...' },
    { image: 'img/story/story1_image20.jpg', text: 'Story 20 description...' },
    { image: 'img/story/story1_image21.jpg', text: 'Story 21 description...' },
    { image: 'img/story/story1_image22.jpg', text: 'Story 22 description...' },
    { image: 'img/story/story1_image23.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image24.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image25.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image26.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image27.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image28.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image29.jpg', text: 'Story 23 description...' },
    { image: 'img/story/story1_image30.jpg', text: 'Story 23 description...' }
];

const blogPosts = [
    { image: 'img/d-blog/blog1_image.jpg', text: 'Blog post 1 description...' },
    { image: 'img/d-blog/blog2_image.jpg', text: 'Blog post 2 description...' },
    { image: 'img/d-blog/blog3_image.jpg', text: 'Blog post 3 description...' },
    { image: 'img/d-blog/blog4_image.jpg', text: 'Blog post 4 description...' },
    { image: 'img/d-blog/blog5_image.jpg', text: 'Blog post 5 description...' },
    { image: 'img/d-blog/blog6_image.jpg', text: 'Blog post 6 description...' },
    { image: 'img/d-blog/blog7_image.jpg', text: 'Blog post 7 description...' },
    { image: 'img/d-blog/blog8_image.jpg', text: 'Blog post 8 description...' },
    { image: 'img/d-blog/blog9_image.jpg', text: 'Blog post 9 description...' },
    { image: 'img/d-blog/blog10_image.jpg', text: 'Blog post 10 description...' },
    { image: 'img/d-blog/blog11_image.jpg', text: 'Blog post 11 description...' },
    { image: 'img/d-blog/blog12_image.jpg', text: 'Blog post 12 description...' },
    { image: 'img/d-blog/blog13_image.jpg', text: 'Blog post 13 description...' },
    { image: 'img/d-blog/blog14_image.jpg', text: 'Blog post 14 description...' },
    { image: 'img/d-blog/blog15_image.jpg', text: 'Blog post 15 description...' },
    { image: 'img/d-blog/blog16_image.jpg', text: 'Blog post 16 description...' },
    { image: 'img/d-blog/blog17_image.jpg', text: 'Blog post 17 description...' },
    { image: 'img/d-blog/blog18_image18.jpg', text: 'Blog post 18 description...' },
    { image: 'img/d-blog/blog19_image19.jpg', text: 'Blog post 19 description...' },
    { image: 'img/d-blog/blog20_image20.jpg', text: 'Blog post 20 description...' },
    { image: 'img/d-blog/blog21_image21.jpg', text: 'Blog post 21 description...' },
    { image: 'img/d-blog/blog22_image22.jpg', text: 'Blog post 22 description...' },
    { image: 'img/d-blog/blog23_image23.jpg', text: 'Blog post 23 description...' },
    { image: 'img/d-blog/blog24_image24.jpg', text: 'Blog post 24 description...' },
    { image: 'img/d-blog/blog25_image25.jpg', text: 'Blog post 25 description...' },
    { image: 'img/d-blog/blog26_image26.jpg', text: 'Blog post 26 description...' },
    { image: 'img/d-blog/blog27_image27.jpg', text: 'Blog post 27 description...' },
    { image: 'img/d-blog/blog28_image28.jpg', text: 'Blog post 28 description...' },
    { image: 'img/d-blog/blog29_image29.jpg', text: 'Blog post 29 description...' },
    { image: 'img/d-blog/blog30_image30.jpg', text: 'Blog post 30 description...' }
];

let currentSuccessIndex = 0;
let currentBlogIndex = 0;

function displaySuccessStories() {
    const storyContainer = document.querySelector('.story-container');
    storyContainer.innerHTML = '';

    for (let i = currentSuccessIndex; i < currentSuccessIndex + 2 && i < successStories.length; i++) {
        const story = document.createElement('div');
        story.className = 'story';
        story.innerHTML = `
            <img src="${successStories[i].image}" alt="Success Story">
            <p>${successStories[i].text}</p>
        `;
        storyContainer.appendChild(story);
    }
}

function displayBlogPosts() {
    const blogContainer = document.querySelector('.blog-container-content');
    blogContainer.innerHTML = '';

    for (let i = currentBlogIndex; i < currentBlogIndex + 6 && i < blogPosts.length; i++) {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <img src="${blogPosts[i].image}" alt="Blog Post">
            <p>${blogPosts[i].text}</p>
        `;
        blogContainer.appendChild(blogPost);
    }
}

document.getElementById('nextSuccess').addEventListener('click', () => {
    if (currentSuccessIndex + 2 < successStories.length) {
        currentSuccessIndex += 2;
        displaySuccessStories();
    }
});

document.getElementById('prevSuccess').addEventListener('click', () => {
    if (currentSuccessIndex - 2 >= 0) {
        currentSuccessIndex -= 2;
        displaySuccessStories();
    }
});

document.getElementById('nextBlog').addEventListener('click', () => {
    if (currentBlogIndex + 6 < blogPosts.length) {
        currentBlogIndex += 6;
        displayBlogPosts();
    }
});

document.getElementById('prevBlog').addEventListener('click', () => {
    if (currentBlogIndex - 6 >= 0) {
        currentBlogIndex -= 6;
        displayBlogPosts();
    }
});

// Initial display
displaySuccessStories();
displayBlogPosts();
