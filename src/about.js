import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Hum ek modern web development team hain jo scalable aur
            user-friendly applications banate hain. Hamara focus clean UI, fast
            performance aur best user experience par hota hai.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Hamara mission hai high-quality digital products banana jo users ki
            life ko easy banaye aur businesses ko grow karne me help kare.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">🚀 Fast</h3>
            <p className="text-sm text-gray-500">Optimized performance</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">🎨 Design</h3>
            <p className="text-sm text-gray-500">Modern UI/UX</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">🔒 Secure</h3>
            <p className="text-sm text-gray-500">Best security practices</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2026 My Website
      </footer>
    </div>
  );
}
