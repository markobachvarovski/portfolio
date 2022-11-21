export default function createCloud(radius) {
  const myTags = [
    "JavaScript",
    "CSS",
    "PostgreSQL",
    "C++",
    "React",
    "Python",
    "NPM Scripts",
    "Java",
    "Git",
    "NPM",
    "RESTful APIs",
    "HTTP",
    "JSON",
    "AJAX",
    "Node.js",
    "Express.js",
    "C",
    "Postman",
    "APIs",
    "Bootstrap",
    "Selenium",
    "HTML",
    "MongoDB",
    "GraphQL",
    "JSON RPCs",
  ];

  let tagCloud = TagCloud(".tagcloud", myTags, {
    // radius in px
    radius: radius,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "normal",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 315,

    // interact with cursor move on mouse out
    keep: true,
  });
}
