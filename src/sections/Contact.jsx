import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import Lottie from "lottie-react";
import lotties from "../assets/lottie.json";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState("");
  const [lottieLoaded, setLottieLoaded] = useState(false);

  // Load Lottie after initial render to avoid main thread blocking
  useEffect(() => {
    setLottieLoaded(true);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Let's Work Together!" sub="Have questions or ideas?" />

        <div className="grid-12-cols mt-16">
          {/* Left Side - Form & Info */}
          <div className="xl:col-span-6 card-border rounded-xl p-4 relative z-[100]">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your good name?"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button type="submit" className="md:w-8/12">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">{loading ? "Sending..." : "Send Message"}</p>
                  <div className="arrow-wrapper">
                    <img src="/assets/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-5 space-y-4 text-lg">
              {/* Location */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={22} />
                <span>Chittagong, Bangladesh</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 relative">
                <FaWhatsapp size={22} />
                <span>+880 1709341256</span>
                <button
                  onClick={() => handleCopy("+880 1709341256")}
                  className="text-gray-400 hover:text-white"
                >
                  <FiClipboard />
                </button>
                <span
                  className={`absolute right-0 text-sm text-green-400 transition-opacity ${
                    copied === "+880 1709341256" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Copied!
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 relative">
                <MdEmail size={22} />
                <span className="text-sm md:text-base">masadrayan2002@gmail.com</span>
                <button
                  onClick={() => handleCopy("masadrayan2002@gmail.com")}
                  className="text-gray-400 hover:text-white"
                >
                  <FiClipboard />
                </button>
                <span
                  className={`absolute right-0 text-sm text-green-400 transition-opacity ${
                    copied === "masadrayan2002@gmail.com" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Copied!
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="xl:col-span-6 min-h-96 flex justify-center items-center">
            {lottieLoaded && (
              <div className="w-[300px] sm:w-[400px] md:w-[600px] aspect-[1/1]">
                <Lottie animationData={lotties} loop={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;