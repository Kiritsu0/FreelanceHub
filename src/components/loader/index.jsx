import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Audio } from "react-loader-spinner";

function Loader() {
  const location = useLocation(); // Detect route changes
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when the location changes
    setLoading(true);

    // Set a timer to hide the loader after a certain time (e.g., 2 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change time as per your requirement

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location]);

  // Display the loader if loading is true
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 z-50">
          {/* Replace with your spinner or loader */}
          <Audio
            height="100"
            width="100"
            color="#1e3a8a"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default Loader;
