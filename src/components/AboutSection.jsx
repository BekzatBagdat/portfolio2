import image from '../img/aboutme.png';

const AboutSection = () => {
  return (
    <section className="mt-24 p-8 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-bold text-black mb-4 fade-in4">
          About Me ✨
        </h3>
        <p className="text-lg text-black mb-6 fade-in">
          I am a passionate Frontend Developer dedicated to crafting responsive
          and interactive web applications.
        </p>
        <p className="text-lg text-black mb-6 fade-in">
          My expertise lies in integrating data from RESTful APIs using modern
          technologies like JavaScript and React. I ensure that every
          application I build is universally accessible and SEO-optimized,
          leveraging tools like WAVE and W3C for accessibility and compliance.
        </p>
        <p className="text-lg text-black fade-in">
          I have hands-on experience with Git and GitHub for effective version
          control, and I thrive on building user-friendly, visually appealing
          interfaces based on solid UI/UX principles. Whether working
          independently or as part of a collaborative team, I am committed to
          delivering high-quality projects that excel across various devices and
          platforms.
        </p>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={image}
          alt="Developer"
          className="w-full h-auto max-w-xs mx-auto lg:max-w-md  slide-in-right"
        />
      </div>
    </section>
  );
};

export default AboutSection;
