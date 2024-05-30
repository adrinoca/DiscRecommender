export default function Footer() {
    return (
    <footer className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <span className="text-xl text-gray-600 font-bold">Logo</span>
          </div>
        </div>
        <hr className="my-2 mx-auto w-11/12 border-t-2 border-black" />
        <div className="flex text-grey-600 justify-center items-center space-x-4 mb-4">
          © 2024 Relume. All rights reserved. 
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">Privacy Policy</a> 
            <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">Terms and Conditions</a> 
            <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">Cookie Policy</a>
          </div>
        </div>
    </footer>
    );
  }  