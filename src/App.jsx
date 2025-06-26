import React, { useState } from "react";
import Lottie from "lottie-react";
import heroAnimation from "./assets/heroAnimation.json";
import decisionMaker from "./assets/decisionMaker.png" ;
import dataAnalyst from "./assets/dataAnalyst.png" ;
import askData from "./assets/step1_askData.png" ;
import ai from "./assets/step2_ai.png" ;
import result from "./assets/step3_results.png" ;





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
          <span className="text-base sm:text-2xl md:text-xl lg:text-2xl font-poppins font-semibold tracking-wide">DataGenie</span>
        </div>
        <a href="#waitlist" className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
          Get Early Access
        </a>
      </header>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between px-12 py-8 bg-gradient-to-br from-white to-gray-50 border-b">
        <div className="w-full md:w-[70%] md:ml-auto md:mr-auto text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-center md:text-left">
          <span className="block md:inline">Ask a question.</span>
          <span className="block md:inline md:ml-2">Get data instantly.</span>
          <br className="hidden md:block" />
          <span className="block mt-0 md:mt-4">No SQL needed.</span>
        </h1>



        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mt-6">
          Get business-ready data answers using plain English.
        </p>
        </div>
        <div className="md:w-[30%] flex justify-center mb-0 md:mb-0">
          <Lottie 
          animationData={heroAnimation}
          loop={true}
          className="w-full max-w-md h-auto"
          />
        </div>
      </section>

      {/* How it works */}
          <section className="py-24 px-6 bg-white border-b">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How DataGenie Works</h2>
            <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
              From question to data in seconds — here’s how we make it effortless.
            </p>

            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-3 gap-10 text-center">
              {/* Step 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Step 1: Ask your question</h3>
                <p className="text-gray-600">Type a question like “Top 5 cities by revenue and their MoM growth over the last year” — just like you’d ask an analyst.</p>
                <img src={askData} alt="Step 1" className="mx-auto h-64" />
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Step 2: We get the data for you</h3>
                <p className="text-gray-600">DataGenie understands your question, learns from your database schema and past verified queries, and generates precise queries to fetch the right data.</p>
                <img src={ai} alt="Step 2" className="mx-auto h-64" />
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Step 3: You get the answer</h3>
                <p className="text-gray-600">Ask follow-up questions, download data, explore charts and summaries — ready to act on instantly.</p>
                <img src={result} alt="Step 3" className="mx-auto h-64" />
              </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden space-y-12 mt-10">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="w-3/4">
                  <h3 className="text-lg font-semibold text-gray-800">Step 1: Ask your question</h3>
                  <p className="text-gray-600 text-sm">Type a question like “Top 5 cities by revenue and their MoM growth over the last year” — just like you’d ask an analyst.</p>
                </div>
                <img src={askData} alt="Step 1" className="w-1/2 h-28 object-contain" />
              </div>

              {/* Step 2 - reverse */}
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="w-3/4">
                  <h3 className="text-lg font-semibold text-gray-800">Step 2: We get the data for you</h3>
                  <p className="text-gray-600 text-sm">DataGenie understands your question, learns from your database schema and past verified queries, and generates precise queries to fetch the right data.</p>
                </div>
                <img src={ai} alt="Step 2" className="w-1/2 h-28 object-contain" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div className="w-3/4">
                  <h3 className="text-lg font-semibold text-gray-800">Step 3: You get the answer</h3>
                  <p className="text-gray-600 text-sm">Ask follow-up questions, download data, explore charts and summaries — ready to act on instantly.</p>
                </div>
                <img src={result} alt="Step 3" className="w-1/2 h-28 object-contain" />
              </div>
            </div>
          </section>


      {/* Who is it for? */}
      <section className="bg-gray-50 py-24 px-4 md:px-6 border-b">
        <h2 className="text-3xl font-bold text-center text-gray-900">Who’s DataGenie For?</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mt-2 mb-12">
          Built for the Ones Who Move Fast
        </p>

        {/* Added max-w-5xl to contain grid width and reduce horizontal spacing */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 text-center mt-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">Decision Makers</h3>
            <p className="text-gray-600">
              For people who run things — founders, PMs, marketers.<br />
              You ask. We deliver the data. Simple.
            </p>
            <img src={decisionMaker} alt="Founders" className="mx-auto h-32" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">Analysts</h3>
            <p className="text-gray-600">Spend less time writing queries more time discovering insights.</p>
            <img src={dataAnalyst} alt="Analysts" className="mx-auto h-32" />
          </div>
        </div>
      </section>



      {/* Subscription Section */}
      <section id="waitlist" className="py-24 px-6 bg-white text-center border-b">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Be Among the First to Use DataGenie</h2>
        <p className="text-gray-600 mb-6 text-lg">Get notified when we launch. Join the early access list now.</p>
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
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition"
          >
            Sign Me Up
          </button>
        </form>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md sm:max-w-sm">
            <h3 className="text-xl font-semibold mb-2">Thanks for signing up!</h3>
            <p className="mb-4 text-sm text-gray-600">
              We’d love to stay in touch and learn more about your needs. Drop your details and any thoughts you’d like to share.
            </p>
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
                  className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800"
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
