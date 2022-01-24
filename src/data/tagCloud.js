export default function createCloud() {

  const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'React', 'Python', 'NPM Scripts', 'Java', 'Git',
    'NPM', 'HTTP','JSON', 'AJAX', 'Node.js',
    'RESTful APIs', 'Express.js',
    'Postman', 'APIs', 'Bootstrap', 'Selenium', 'PostgreSQL',
    'Pip'
  ];

  let tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: 350,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 315,

    // interact with cursor move on mouse out
    keep: true,

  });
}
