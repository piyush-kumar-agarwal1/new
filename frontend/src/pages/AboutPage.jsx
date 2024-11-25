import React from 'react';

const AboutPage = () => {
  return (
    <div className="sm:w-4/5 w-full mx-auto h-full my-4 shadow-lg p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">About Saras Vidyalaya</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            At Saras Vidyalaya, our mission is to provide high-quality education that empowers students to achieve their full potential. We are committed to fostering a nurturing and inclusive environment where every student can thrive academically, socially, and emotionally.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is to be a leading educational institution that inspires and prepares students to be lifelong learners and responsible global citizens. We aim to cultivate a passion for learning and a spirit of inquiry in our students.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">About Our School Education</h2>
          <p className="text-gray-700">
            Saras Vidyalaya, situated in Camp 1, Bhilai, Chhattisgarh, offers a comprehensive curriculum that caters to the diverse needs of our students. Our dedicated faculty and staff work tirelessly to create a supportive and stimulating learning environment. We emphasize holistic development, ensuring that students excel not only in academics but also in extracurricular activities.
          </p>
          <p className="text-gray-700">
            Our school education program includes a wide range of subjects and activities designed to foster critical thinking, creativity, and collaboration. We believe in the importance of a well-rounded education that prepares students for the challenges of the future.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">About Our Online Learning</h2>
          <p className="text-gray-700">
            In addition to our traditional school education, Saras Vidyalaya offers a robust online learning platform. Our online courses are designed to provide flexibility and accessibility to students who prefer or require remote learning options. We leverage the latest technology to deliver interactive and engaging lessons that can be accessed from anywhere.
          </p>
          <p className="text-gray-700">
            Our online learning program includes a variety of courses across different subjects, ensuring that students have access to quality education regardless of their location. We are committed to maintaining the same high standards of education in our online offerings as we do in our physical classrooms.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Excellence in Education</li>
            <li>Integrity and Respect</li>
            <li>Inclusivity and Diversity</li>
            <li>Innovation and Creativity</li>
            <li>Community Engagement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;