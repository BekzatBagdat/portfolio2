import image from '../img/me.jpg';
const HeroSection = () => {
  return (
    <section className="mt-24 p-8 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Bekzat"
            className="mt-8 w-40 h-40 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-gray-300 slide-in-left"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 slide-in-right">
            Hey There!👋
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed mb-6 fade-in2">
            I&apos;m <span className="font-semibold">Bekzat</span>, a passionate
            frontend developer who specializes in creating responsive,
            user-friendly websites. I craft intuitive, accessible, and visually
            appealing web experiences that focus on performance and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
