export default function Footer() {
    return (
      <footer className="w-full bg-white py-4">
        <hr className="my-2 mx-auto w-11/12 border-t-2 border-black" />
        <div className="flex justify-center items-center space-x-8 text-gray-600 text-sm">
          <span>© 2024 Relume. All rights reserved.</span>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600">Privacy Policy</a> 
            <a href="#" className="text-gray-600">Terms and Conditions</a> 
            <a href="#" className="text-gray-600">Cookie Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  