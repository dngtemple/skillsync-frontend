import { useState, useRef, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import logo from "/logo.png";

import { ClipLoader } from "react-spinners";

export default function SkillSyncStepper() {
  const { user } = useUser();
  const navigate = useNavigate();
  const logoRef = useRef(null);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    username: "",
    bio: "",
    goals: "",
    courses: [],
    preferences: "",
  });

  useEffect(() => {
    gsap.to(logoRef.current, {
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  if (!user) return <div className="flex justify-center items-center h-screen"><ClipLoader  color="#3498db" size={50} /></div>;

  const handleNext = () => setStep((s) => Math.min(s + 1, 5));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const handleFinish = () => {
    console.log("User Data:", formData);
    navigate("/"); // Redirect to dashboard
  };

  const courseOptions = [
    "React",
    "Node.js",
    "Python",
    "UI/UX",
    "Flutter",
    "Cybersecurity",
    "React",
    "Node.js",
    "Python",
    "UI/UX",
    "Flutter",
    "Cybersecurity",
    "React",
    "Node.js",
    "Python",
    "UI/UX",
    "Flutter",
    "Cybersecurity",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
      {/* Logo */}
      <div className="flex items-center mb-6 space-x-3">
        <img
          ref={logoRef}
          src={logo}
          alt="SkillSync Logo"
          className="w-20 h-20 rounded-full border-2 border-blue-400 shadow-sm"
        />
      </div>

      {/* Stepper Card */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-gray-100"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-indigo-600">
            Step {step} of 5
          </h2>
          <p className="text-gray-500 text-sm">
            Complete your profile to personalize your SkillSync experience
          </p>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="block font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="e.g. clintontempleton"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="block font-medium text-gray-700">Bio</label>
            <textarea
              rows="3"
              placeholder="Tell us a bit about yourself..."
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* Step 2: Goals */}
        {step === 2 && (
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              What’s your learning goal?
            </label>
            <textarea
              rows="4"
              placeholder="e.g. I want to master React and build SaaS products..."
              value={formData.goals}
              onChange={(e) =>
                setFormData({ ...formData, goals: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* Step 3: Courses */}
        {step === 3 && (
          <div className="min-w-[50%]">
            <p className="font-medium text-gray-700 mb-3">
              What are you currently learning?
            </p>
            <div className="grid grid-cols-4 gap-3">
              {courseOptions.map((course) => (
                <label
                  key={course}
                  className={`cursor-pointer border rounded-lg p-3 text-center transition font-medium text-sm ${
                    formData.courses.includes(course)
                      ? "bg-indigo-100 border-indigo-500 text-indigo-600"
                      : "hover:bg-gray-50 border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={course}
                    checked={formData.courses.includes(course)}
                    onChange={(e) => {
                      const newCourses = e.target.checked
                        ? [...formData.courses, course]
                        : formData.courses.filter((c) => c !== course);
                      setFormData({ ...formData, courses: newCourses });
                    }}
                    className="hidden"
                  />
                  {course}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Preferences */}
        {step === 4 && (
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              How do you prefer learning?
            </label>
            <select
              value={formData.preferences}
              onChange={(e) =>
                setFormData({ ...formData, preferences: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select preference</option>
              <option value="group">Group Learning</option>
              <option value="accountability">
                With Accountability Partner
              </option>
            </select>
          </div>
        )}

        {/* Step 5: Summary */}
        {step === 5 && (
          <div className="space-y-2 text-gray-700">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Review your details
            </h3>
            <p>
              <strong>Name:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Username:</strong> {formData.username}
            </p>
            <p>
              <strong>Goal:</strong> {formData.goals}
            </p>
            <p>
              <strong>Courses:</strong> {formData.courses.join(", ")}
            </p>
            <p>
              <strong>Preference:</strong> {formData.preferences}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-green-700 shadow-sm"
            >
              Finish
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
