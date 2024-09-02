import { useState, useEffect, useRef } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

// Sample user data
const users = [
  { id: 1, name: 'John Doe', image: 'image_2.jpg', earnings: '$5000', other: 'Top Rated' },
  { id: 2, name: 'Michael Smith', image: 'image_1.jpg', earnings: '$3500', other: 'Expert' },
  { id: 3, name: 'Robert Johnson', image: 'image_3.jpg', earnings: '$4500', other: 'Experienced' },
  { id: 4, name: 'James Brown', image: 'image_4.jpg', earnings: '$4200', other: 'Top Rated' },
  { id: 5, name: 'William Davis', image: 'image_5.jpg', earnings: '$3800', other: 'Expert' },
  { id: 6, name: 'David Wilson', image: 'image_6.jpg', earnings: '$4000', other: 'Experienced' },
  { id: 7, name: 'Daniel Taylor', image: 'image_7.jpg', earnings: '$3700', other: 'Top Rated' },
  { id: 8, name: 'James Martinez', image: 'image_8.jpg', earnings: '$3900', other: 'Expert' },
];


const TopUsers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const setCarouselInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 5000); // Change user every 5 seconds
  };

  useEffect(() => {
    setCarouselInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + users.length) % users.length;
      setCarouselInterval(); // Reset interval after changing index
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % users.length;
      setCarouselInterval(); // Reset interval after changing index
      return newIndex;
    });
  };

  return (
    <div className="relative overflow-hidden max-w-[25rem]">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {users.map((user) => (
          <div key={user.id} className="flex-shrink-0 w-full">
            <div className="flex flex-col items-center text-center p-4">
              <img
                src={`${process.env.PUBLIC_URL}/${user.image}`}
                alt={user.name}
                className="rounded-full w-40 h-40 object-cover mb-4"
              />
              <div className="text-xl font-bold text-white">{user.name}</div>
              <div className="text-white">{user.earnings}</div>
              <div className="text-blue-500 font-bold">{user.other}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
      >
        <MdArrowBack className="text-3xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
      >
        <MdArrowForward className="text-3xl" />
      </button>
    </div>
  );
};

export default TopUsers;
