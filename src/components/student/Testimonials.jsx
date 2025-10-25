import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    feedback:
      "The courses on this platform are amazing! The instructors are very clear and the projects helped me land my first developer job.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Data Scientist",
    feedback:
      "I learned Python and data science from scratch. The hands-on exercises made it super easy to understand complex concepts.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "UI/UX Designer",
    feedback:
      "The design courses are top-notch! I was able to create my portfolio and get freelance projects right after completing them.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4.8,
  },
];

// Function to render stars using SVGs
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars.push(<FaStar key={i} />);
    else if (i - rating <= 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return (
    <span className="text-yellow-500 flex justify-center gap-0.5">
      {stars}
    </span>
  );
};

function Testimonials() {
  return (
    <div className="bg-orange-50 py-16 px-6 md:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8">
        What Our Learners Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 mb-3">"{testimonial.feedback}"</p>
            <div className="mb-2">{renderStars(testimonial.rating)}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <span className="text-orange-500 text-sm">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
