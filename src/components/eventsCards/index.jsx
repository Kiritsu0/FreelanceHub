const Eventcard = ({ image, title, desc }) => {
  return (
    <div className="flex h-full w-full justify-center pt-4 px-2">
      <div className="flex md:flex-row flex-col h-68 w-[40rem] items-center rounded-md border-2 bg-gray-200 shadow-xl">
        <div className="md:h-full md:w-2/5 w-1/1">
          <img
            src={image}
            alt="Description of the image"
            className="object-cover w-full obje h-full md:rounded-l-md rounded-md"
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col px-6 pb-5">
          <h1 className="text-lg line-clamp-2 sm:text-xl font-semibold">
            {title}
          </h1>
          <article className="sm:text-base text-sm line-clamp-3 mb-3">
            {desc}
          </article>
          <div className="mt-2 flex justify-between">
            <h3 className="sm:text-sm font-semibold">Place: New York</h3>
            <h3 className="sm:text-sm font-semibold">Date: 1/1/2024</h3>
          </div>
          <div className="flex justify-end">
            <button className="mt-2 w-4/12 rounded-md bg-green-600 p-2 text-white hover:bg-green-700">
              Join Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
