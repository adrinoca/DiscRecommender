// app/terms/page.js
export default function TermsAndConditions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900">Terms and Conditions</h1>
        <div className="bg-white p-8 shadow-lg rounded-lg text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">Welcome to [Your Website Name]. By accessing and using our website, you agree to comply with the following terms and conditions, which apply to all visitors and users of the site. If you do not agree with these terms, please do not use our website.</p>
          
          <h2 className="text-2xl font-semibold mb-4">2. Use of the Website</h2>
          <p className="mb-2"><strong>Eligibility:</strong> To use our website, you must be at least 18 years old or have the permission of your parents or guardians.</p>
          <p className="mb-2"><strong>User Account:</strong> You may need to create an account to access certain features of our website. You must provide accurate information and maintain the confidentiality of your account.</p>
          <p className="mb-4"><strong>Permitted Use:</strong> You may use our website only for lawful purposes and in accordance with these terms. You must not use the site for any illegal or unauthorized activities.</p>
          
          <h2 className="text-2xl font-semibold mb-4">3. Content</h2>
          <p className="mb-2"><strong>Ownership of Content:</strong> All content on the website, including text, graphics, logos, images, and software, is the property of [Your Website Name] or its content providers and is protected by copyright and other intellectual property laws.</p>
          <p className="mb-4"><strong>Use of Content:</strong> You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from our site without our prior written permission.</p>
          
          <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
          <p className="mb-2"><strong>Prohibitions:</strong> You must not:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Use the website in any way that violates any applicable local, national, or international law or regulation.</li>
            <li>Use the website to send unsolicited or unauthorized advertising.</li>
            <li>Engage in any conduct that could damage, disable, overburden, or impair the website.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">5. Links to Third-Party Sites</h2>
          <p className="mb-4">Our website may contain links to other websites that are not operated by us. We have no control over the content, privacy policies, or practices of third-party sites and assume no responsibility for them. We recommend that you review the terms and conditions of these sites.</p>
          
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="mb-2"><strong>Use of the Site:</strong> The use of the website is at your own risk. The website is provided "as is" and "as available" without any warranties of any kind.</p>
          <p className="mb-4"><strong>Damages:</strong> To the maximum extent permitted by law, [Your Website Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website.</p>
          
          <h2 className="text-2xl font-semibold mb-4">7. Changes to the Terms</h2>
          <p className="mb-4">We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on our website. It is your responsibility to review these terms periodically.</p>
          
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">These terms shall be governed and construed in accordance with the laws of the country where [Your Website Name] is located, without regard to its conflict of law principles.</p>
          
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>If you have any questions about these terms, please contact us at [Contact Information, such as an email address or contact form].</p>
        </div>
      </div>
    </div>
  );
}
