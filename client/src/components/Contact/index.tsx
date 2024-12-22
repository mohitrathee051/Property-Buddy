import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team for expert assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2c7a7b]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#2c7a7b]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a365d]">Email</h3>
                  <p className="text-gray-600">info@propertybuddy.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2c7a7b]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#2c7a7b]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a365d]">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2c7a7b]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#2c7a7b]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a365d]">Address</h3>
                  <p className="text-gray-600">123 Real Estate Ave, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                  placeholder="Your message"
                />
              </div>

              <button className="w-full flex items-center justify-center px-6 py-3 bg-[#2c7a7b] text-white rounded-lg hover:bg-[#2c7a7b]/90 transition-colors duration-300">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}