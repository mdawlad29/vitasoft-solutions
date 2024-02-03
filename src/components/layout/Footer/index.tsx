const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-300 hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-blue-300 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
