import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import c1 from "../assests/c1.jpg";
import c2 from "../assests/c2.jpg";
import logo from "../assests/Logo.svg";

const Input = ({ children, ...props }) => (
  <div className="relative w-full mb-4">
    <input
      {...props}
      className={`w-full px-3 py-2 border rounded-md ${props.className || ""}`}
    />
    {children}
  </div>
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
      props.className || ""
    }`}
  >
    {children}
  </button>
);

const Card = ({ children, ...props }) => (
  <div
    {...props}
    className={`bg-white shadow-md rounded-md flex ${props.className || ""}`}
    style={{ height: "370px" }} // Changed to flex
  >
    {children}
  </div>
);

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {" "}
      {/* Set height to full */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold">{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailReadOnly, setEmailReadOnly] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNextClick = (e) => {
    e.preventDefault(); // Prevent form submission
    if (email) {
      setEmailReadOnly(true);
      setShowPassword(true);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevent form submission
    if (password) {
      // Add form validation if necessary
      navigate("/home"); // Redirect to the Home page
    }
  };

  const handleChangeClick = () => {
    setEmailReadOnly(false);
    setShowPassword(false);
    setPassword(""); // Reset password field
  };

  const carouselImages = [
    {
      src: c1,
      alt: "Sustainable wealth",
      title: "Sustainable wealth",
      description: "Creating long term sustainable wealth",
    },
    {
      src: c2,
      alt: "Sustainable wealth",
      title: "Sustainable wealth",
      description: "Creating long term sustainable wealth",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex items-center justify-center w-full p-8">
        <div className="max-w-4xl w-full">
          {" "}
          {/* Increased max width for better layout */}
          <Card className="flex flex-row">
            {" "}
            {/* Changed to flex-row for side-by-side layout */}
            <div className="flex-1 p-6 mt-8 justify-center items-center">
              {" "}
              {/* Sign-in section */}
              <div className="flex justify-between mb-4">
                {" "}
                {/* Changed to flex for side-by-side layout */}
                <img src={logo} alt="Logo" className="w-32 mr-2" />{" "}
                {/* Added margin to the right */}
                <div className="flex flex-col">
                  {" "}
                  {/* Keep text in a vertical layout */}
                  <h2 className="text-2xl font-bold">Sign in</h2>
                  <p className="text-gray-600">to access Inventory</p>
                </div>
              </div>
              <form
                onSubmit={showPassword ? handleSubmitClick : handleNextClick}
              >
                <Input
                  type="text"
                  placeholder="Email address or mobile number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={isEmailReadOnly} // Set readOnly based on state
                  className={`transition-colors duration-200 ${
                    isEmailReadOnly
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white"
                  }`} // Change background color based on readOnly state
                >
                  {isEmailReadOnly && (
                    <Button
                      type="button"
                      onClick={handleChangeClick}
                      className="absolute right-2 top-1 text-xs" // Adjusted position and size
                    >
                      Change
                    </Button>
                  )}
                </Input>

                {showPassword && (
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"
                  />
                )}
                <Button type="submit" className="w-full mb-4">
                  {showPassword ? "Submit" : "Next"}
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500">
                  Sign up now
                </a>
              </p>
            </div>
            <div className="flex-1 h-74 border-l border-gray-300">
              {" "}
              {/* Carousel section */}
              <Carousel images={carouselImages} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
