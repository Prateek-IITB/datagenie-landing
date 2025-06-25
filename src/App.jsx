import React, { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    setSubmittedEmail(email);

    try {
      const res = await fetch("https://sheetdb.io/api/v1/89ntre318c5uf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ email }] })
      });

      if (res.ok) {
        e.target.reset();
        setShowModal(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const mobile = e.target.elements.mobile.value;
    const feedback = e.target.elements.feedback.value;

    try {
      await fetch("https://sheetdb.io/api/v1/89ntre318c5uf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{ email: submittedEmail, name, mobile, feedback }]
        })
      });
      setShowModal(false);
    } catch (err) {
      alert("Error saving additional info.");
    }
  };

  return (
    <div className="font-inter text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="DataGenie Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">DataGenie</span>
        </div>
        <a href="#waitlist" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Join Waitlist
        </a>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 py-24 bg-gradient-to-br from-white to-gray-50 border-b">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Get Insights From Your Data in Plain English
          </h1>
          <p className="text-lg text-gray-600">
            Ask questions about your data in simple words and get instant results — no SQL, no hassle.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img src="/hero-image.png" alt="Hero Visual" className="max-w-full h-auto rounded-xl shadow-md" />
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-24 bg-white border-b">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">How DataGenie Works</h2>
          <p className="text-gray-600 text-lg">
            Type a question like "What were our top 5 selling products last month?" and DataGenie will generate SQL, run the query, and show you the answer in seconds.
          </p>
        </div>
        <div className="md:w-1/2">
          <video
            controls
            className="w-full rounded-xl shadow-lg"
            poster="/video-preview.png"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="bg-gray-50 py-24 px-6 border-b">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Is It For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Founders</h3>
            <p className="text-gray-600">Quickly understand product metrics without needing a tech team.</p>
            <img src="/founders.png" alt="Founders" className="mx-auto h-40" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Analysts</h3>
            <p className="text-gray-600">Speed up your data discovery and reduce SQL writing time.</p>
            <img src="/analysts.png" alt="Analysts" className="mx-auto h-40" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Marketing Teams</h3>
            <p className="text-gray-600">Get campaign and customer insights instantly without SQL.</p>
            <img src="/marketing.png" alt="Marketing" className="mx-auto h-40" />
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="waitlist" className="py-24 px-6 bg-white text-center border-b">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get Notified When We Launch</h2>
        <p className="text-gray-600 mb-6 text-lg">Join our mailing list and be the first to access DataGenie.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2">You're on the waitlist 🎉</h3>
            <p className="mb-4 text-sm text-gray-600">Would you like to share more information or feedback?</p>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                name="mobile"
                type="text"
                placeholder="Mobile Number (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                name="feedback"
                placeholder="Any feedback? (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={() => setShowModal(false)}
                >
                  Skip
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Us Section */}
      <footer className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Have questions or feedback?</h3>
        <p className="text-gray-600 text-lg">
          Reach out to us at <a href="mailto:hello@datagenie.ai" className="text-indigo-600 font-medium">hello@datagenie.ai</a>
        </p>
      </footer>
    </div>
  );
}
