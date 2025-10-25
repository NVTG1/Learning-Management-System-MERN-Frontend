import Logo from "./Logo.jpeg";
import user_icon from "./user_icon.jpeg";
import search_icon from "./search_icon.jpeg";
import microsoft_logo from "./microsoft_logo.jpeg";
import adobe_logo from "./adobe_logo.jpeg";
import google_logo from "./google_logo.jpeg";
import walmart_logo from "./walmart_logo.jpeg";
import cross_icon from "./cross_icon.jpeg";
import star from './star.jpg'
import star_blank from './star_blank.png'

// Educator Dashboard Icons
import dashboard_icon from './dashboard_icon.png';
import add_icon from './add_icon.png';
import course_icon from './course_icon.png';
import students_icon from './students_icon.png';
import revenue_icon from './revenue_icon.png';

// Optional Icons
import play_icon from './play_icon.png';
import check_icon from './check_icon.png';
import clock_icon from './clock_icon.png';
import certificate_icon from './certificate_icon.png';
import mobile_icon from './mobile_icon.png';

export const dummyCourses = [
  {
    "_id": "605c72efb3f1c2b1f8e4e1a1",
    "courseTitle": "Introduction to JavaScript",
    "courseDescription":
      "<h2>Learn the Basics of JavaScript</h2><p>Javascript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JS, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JS.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
    "coursePrice": 49.99,
    "isPublished": true,
    "discount": 20,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Getting started with JavaScript",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is JavaScript?",
            "lectureDuration": 16,
            "lectureUrl": "https://youtu.be/CBWnBi-awSA",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Setting Up Your Environment",
            "lectureDuration": 19,
            "lectureUrl": "https://youtu.be/4187c2aeB4I",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "Variables and Data Types",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Understanding Variables",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Data Types in JavaScript",
            "lectureDuration": 10,
            "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_3aRtYu89pLmNbVcXzAsD12efG4h",
      "user_4bStZv90qMnOcWdYaBtE23fgH5i",
      "user_5cTuAw01rNoOdXeZbCuF34ghI6j",
      "user_6dUvBx12sOpPeYfaCvG45hiJ7k",
      "user_7eVwCy23tPqQfZgbDwH56ijK8l",
    ],
    "courseRatings": [
      {
        "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        "rating": 5,
        "_id": "6773e37360cb0ab974342314",
      },
      {
        "userId": "user_3aRtYu89pLmNbVcXzAsD12efG4h",
        "rating": 4,
        "_id": "6773e37360cb0ab974342315",
      },
      {
        "userId": "user_4bStZv90qMnOcWdYaBtE23fgH5i",
        "rating": 5,
        "_id": "6773e37360cb0ab974342316",
      },
      {
        "userId": "user_5cTuAw01rNoOdXeZbCuF34ghI6j",
        "rating": 4,
        "_id": "6773e37360cb0ab974342317",
      },
    ],
    "createdAt": "2024-12-17T08:16:53.622Z",
    "updatedAt": "2025-01-02T04:47:44.701Z",
    "_v": 4,
    "courseThumbnail": "https://tse3.mm.bing.net/th/id/OIP.qgMc0wmgnVSyT6E2rAjDQwHaDV?pid=Api&P=0&h=180"
  },
  {
    "_id": "course001",
    "courseTitle": "Python for Beginners",
    "courseDescription":
        "<h2>Learn Python from Scratch</h2><p>Python is one of the most popular and beginner-friendly programming languages. This course covers basic syntax, data types, and control flow.</p><ul><li>Learn Python fundamentals</li><li>Write simple programs</li><li>Understand indentation and error handling</li></ul>",
    "coursePrice": 59.99,
    "isPublished": true,
    "discount": 15,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Introduction to Python",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is Python?",
            "lectureDuration": 10,
            "lectureUrl": "https://youtu.be/kqtD5dpn9C8",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Installing Python & Code Editor",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/Y8Tko2YC5hA",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "Python Basics",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Variables and Data Types",
            "lectureDuration": 12,
            "lectureUrl": "https://youtu.be/khKv-8q7YmY",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Basic Input and Output",
            "lectureDuration": 14,
            "lectureUrl": "https://youtu.be/_uQrJ0TkZlc",
            "isPreviewFree": false,
            "lectureOrder": 2,
          }
        ],
      },
    ],  
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_8fXwDz34uQrRgAhcExI67jkL9m",
      "user_9gYxEa45vRsSgBidFyJ78klM0n",
      "user_0hZyFb56wStThCjeFzK89lmN1o",
      "user_1iAzGc67xTuUiDkfGaL90mnO2p",
      "user_2jBaHd78yUvVjEkgHbM01noP3q",
    ],
    "courseRatings": [
      {
        "userId": "user_8fXwDz34uQrRgAhcExI67jkL9m",
        "rating": 5,
        "_id": "6773e37360cb0ab974342318",
      },
      {
        "userId": "user_9gYxEa45vRsSgBidFyJ78klM0n",
        "rating": 5,
        "_id": "6773e37360cb0ab974342319",
      },
      {
        "userId": "user_0hZyFb56wStThCjeFzK89lmN1o",
        "rating": 4,
        "_id": "6773e37360cb0ab974342320",
      },
    ],
    "createdAt": "2025-01-25T08:00:00.000Z",
    "updatedAt": "2025-01-25T08:00:00.000Z",
    "_v": 0,
    "courseThumbnail": "https://tse1.mm.bing.net/th/id/OIP.wXn88A-eYmSm0hx-bbsh6AHaEK?pid=Api&P=0&h=180"
  },
  {
    "_id": "course002",
    "courseTitle": "React JS Crash Course",
    "courseDescription":
      "<h2>Build Dynamic Web Apps</h2><p>This course introduces React, a powerful library for building user interfaces.</p><ul><li>Learn React fundamentals</li><li>Create reusable components</li><li>Manage state effectively</li></ul>",
    "coursePrice": 79.99,
    "isPublished": true,
    "discount": 25,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Getting Started with React",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "React Introduction",
            "lectureDuration": 18,
            "lectureUrl": "https://youtu.be/SqcY0GlETPk",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Setting Up React Environment",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/w7ejDZ8SWv8",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "React Fundamentals",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "JSX and Components",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/Ke90Tje7VS0",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "State and Props",
            "lectureDuration": 22,
            "lectureUrl": "https://youtu.be/5Y1C1S0jN5w",
            "isPreviewFree": false,
            "lectureOrder": 2,
        },
      ],
    },
  ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_3kCbIe89zVwWkFlhIcN12opQ4r",
      "user_4lDcJf90aWxXlGmiJdO23pqR5s",
      "user_5mEdKg01bXyYmHnjKeP34qrS6t",
      "user_6nFeLh12cYzZnIokLfQ45rsT7u",
      "user_7oGfMi23dZaAoJplMgR56stU8v",
      "user_8pHgNj34eAbBpKqmNhS67tuV9w",
      "user_9qIhOk45fBcCqLrnOiT78uvW0x",
      "user_0rJiPl56gCdDrMsoOjU89vwX1y",
      "user_1sKjQm67hDeEsNtpPkV90wxY2z",
    ],
    "courseRatings": [
      {
        "userId": "user_3kCbIe89zVwWkFlhIcN12opQ4r",
        "rating": 5,
        "_id": "6773e37360cb0ab974342321",
      },
      {
        "userId": "user_4lDcJf90aWxXlGmiJdO23pqR5s",
        "rating": 4,
        "_id": "6773e37360cb0ab974342322",
      },
      {
        "userId": "user_5mEdKg01bXyYmHnjKeP34qrS6t",
        "rating": 5,
        "_id": "6773e37360cb0ab974342323",
      },
      {
        "userId": "user_6nFeLh12cYzZnIokLfQ45rsT7u",
        "rating": 5,
        "_id": "6773e37360cb0ab974342324",
      },
      {
        "userId": "user_7oGfMi23dZaAoJplMgR56stU8v",
        "rating": 4,
        "_id": "6773e37360cb0ab974342325",
      },
    ],
    "createdAt": "2025-01-25T08:00:00.000Z",
    "updatedAt": "2025-01-25T08:00:00.000Z",
    "_v": 0,
    "courseThumbnail": "https://i.ytimg.com/vi/cdOt5e53t7I/maxresdefault.jpg"
  },
  {
    "_id": "course003",
    "courseTitle": "HTML & CSS for Beginners",
    "courseDescription":
      "<h2>Build Your First Website</h2><p>Learn how to create modern webpages using HTML & CSS.</p><ul><li>Understand HTML structure</li><li>Style your pages with CSS</li><li>Create responsive layouts</li></ul>",
    "coursePrice": 39.99,
    "isPublished": true,
    "discount": 10,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "HTML Basics",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "Introduction to HTML",
            "lectureDuration": 12,
            "lectureUrl": "https://youtu.be/qz0aGYrrlhU",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "HTML Elements and Tags",
            "lectureDuration": 14,
            "lectureUrl": "https://youtu.be/pQN-pnXPaVg",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "CSS Basics",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Introduction to CSS",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/yfoY53QXEnI",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Styling Text and Layouts",
            "lectureDuration": 17,
            "lectureUrl": "https://youtu.be/1Rs2ND1ryYc",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2tLkRn78iFfFtOuqQlW01xyZ3a",
      "user_3uMlSo89jGgGuPvrRmX12yzA4b",
      "user_4vNmTp90kHhHvQwsSnY23zaB5c",
      "user_5wOnUq01lIiIwRxtToZ34abC6d",
    ],
    "courseRatings": [
      {
        "userId": "user_2tLkRn78iFfFtOuqQlW01xyZ3a",
        "rating": 4,
        "_id": "6773e37360cb0ab974342326",
      },
      {
        "userId": "user_3uMlSo89jGgGuPvrRmX12yzA4b",
        "rating": 5,
        "_id": "6773e37360cb0ab974342327",
      },
      {
        "userId": "user_4vNmTp90kHhHvQwsSnY23zaB5c",
        "rating": 4,
        "_id": "6773e37360cb0ab974342328",
      },
    ],
    "createdAt": "2025-01-25T08:00:00.000Z",
    "updatedAt": "2025-01-25T08:00:00.000Z",
    "_v": 0,
    "courseThumbnail": "https://blog.pwskills.com/wp-content/uploads/2024/02/Beginner-HTML-And-CSS-Projects.jpg"
  },
  {
    "_id": "course004",
    "courseTitle": "Java Programming Essentials",
    "courseDescription":
      "<h2>Get Started with Java</h2><p>Perfect for beginners starting with object-oriented programming.</p><ul><li>Understand Java basics</li><li>Learn object-oriented concepts</li><li>Write simple Java programs</li></ul>",
    "coursePrice": 69.99,
    "isPublished": true,
    "discount": 30,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Java Basics",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is Java?",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/grEKMHGYyns",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Setting Up Java Environment",
            "lectureDuration": 12,
            "lectureUrl": "https://youtu.be/eIrMbAQSU34",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "Java Fundamentals",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Variables and Data Types",
            "lectureDuration": 14,
            "lectureUrl": "https://youtu.be/GoXwIVyNvX0",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Basic Input and Output",
            "lectureDuration": 16,
            "lectureUrl": "https://youtu.be/8cm1x4bC610",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_6xPoVr12mJjJxSyuUpA45bcD7e",
      "user_7yQpWs23nKkKyTzvVqB56cdE8f",
      "user_8zRqXt34oLlLzUawWrC67deF9g",
      "user_9aSrYu45pMmMaVbxXsD78efG0h",
      "user_0bTsZv56qNnNbWcyYtE89fgH1i",
      "user_1cUtAw67rOoOcXdzZuF90ghI2j",
    ],
    "courseRatings": [
      {
        "userId": "user_6xPoVr12mJjJxSyuUpA45bcD7e",
        "rating": 5,
        "_id": "6773e37360cb0ab974342329",
      },
      {
        "userId": "user_7yQpWs23nKkKyTzvVqB56cdE8f",
        "rating": 4,
        "_id": "6773e37360cb0ab974342330",
      },
      {
        "userId": "user_8zRqXt34oLlLzUawWrC67deF9g",
        "rating": 3,
        "_id": "6773e37360cb0ab974342331",
      },
      {
        "userId": "user_9aSrYu45pMmMaVbxXsD78efG0h",
        "rating": 4,
        "_id": "6773e37360cb0ab974342332",
      },
    ],
    "createdAt": "2025-01-25T08:00:00.000Z",
    "updatedAt": "2025-01-25T08:00:00.000Z",
    "_v": 0,
    "courseThumbnail": "https://d502jbuhuh9wk.cloudfront.net/courses/64099d34e4b08c1ca0812fea/64099d34e4b08c1ca0812fea_scaled_cover.jpg?v=3"
  },
  {
    "_id": "course005",
    "courseTitle": "Node.js Basics",
    "courseDescription":
      "<h2>Backend with JavaScript</h2><p>Learn how to build backend applications using Node.js.</p><ul><li>Understand Node.js fundamentals</li><li>Create a basic server</li><li>Work with modules and npm</li></ul>",
    "coursePrice": 79.99,
    "isPublished": true,
    "discount": 20,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Node Overview",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is Node.js?",
            "lectureDuration": 14,
            "lectureUrl": "https://youtu.be/TlB_eWDSMt4",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Installing Node.js & NPM",
            "lectureDuration": 12,
            "lectureUrl": "https://youtu.be/JHGkaShoyNs",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "Node.js Fundamentals",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Creating a Basic Server",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/L72fhGm1tfE",
            "isPreviewFree": true,
            "lectureOrder": 1,
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Working with Modules",
            "lectureDuration": 18,
            "lectureUrl": "https://youtu.be/4mIsZtWnYkA",
            "isPreviewFree": false,
            "lectureOrder": 2,
          },
        ],
      },
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2dVuBx78sPpPdYeaAvG01hiJ3k",
      "user_3eWvCy89tQqQeZfbBwH12ijK4l",
      "user_4fXwDz90uRrRfAgcCxI23jkL5m",
    ],
    "courseRatings": [
      {
        "userId": "user_2dVuBx78sPpPdYeaAvG01hiJ3k",
        "rating": 5,
        "_id": "6773e37360cb0ab974342333",
      },
      {
        "userId": "user_3eWvCy89tQqQeZfbBwH12ijK4l",
        "rating": 5,
        "_id": "6773e37360cb0ab974342334",
      },
    ],
    "createdAt": "2025-01-25T08:00:00.000Z",
    "updatedAt": "2025-01-25T08:00:00.000Z",
    "_v": 0,
    "courseThumbnail": "https://tse1.mm.bing.net/th/id/OIP.4Rv-09OdPrDknojTjRO-qAHaEK?pid=Api&P=0&h=180"
  }
];

export const assets = {
  Logo,
  user_icon,
  search_icon,
  microsoft_logo,
  adobe_logo,
  google_logo,
  walmart_logo,
  cross_icon,
  star,
  star_blank,
  dashboard_icon,
  add_icon,
  course_icon,
  students_icon,
  revenue_icon,
  play_icon,
  check_icon,
  clock_icon,
  certificate_icon,
  mobile_icon
};