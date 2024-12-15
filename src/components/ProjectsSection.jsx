const ProjectsSection = () => {
  return (
    <section className="mt-24 p-8">
      <h3 className="text-2xl font-bold text-black mb-4">Projects</h3>
      <div className="flex flex-wrap gap-8">
        {/* Project 1 */}
        <div className="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 1"
            className="w-full h-64 object-cover mb-4"
          />
          <h4 className="text-xl font-bold">Project 1</h4>
          <p className="text-lg text-gray-700">Description of project 1.</p>
        </div>
        {/* Project 2 */}
        <div className="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 2"
            className="w-full h-64 object-cover mb-4"
          />
          <h4 className="text-xl font-bold">Project 2</h4>
          <p className="text-lg text-gray-700">Description of project 2.</p>
        </div>
        {/* Project 3 */}
        <div className="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 3"
            className="w-full h-64 object-cover mb-4"
          />
          <h4 className="text-xl font-bold">Project 3</h4>
          <p className="text-lg text-gray-700">Description of project 3.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
