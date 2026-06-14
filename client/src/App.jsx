import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import StudentForm from "./components/StudentForm";
import AnalysisPanel from "./components/AnalysisPanel";
import {
  GraduationCap,
  User,
  MapPin,
  BadgeInfo,
  BookOpen,
  IndianRupee,
  Target,
} from "lucide-react";
import { generatePDF } from "./utils/generatePDF";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [profileScore, setProfileScore] = useState(null);
  const [loadingText, setLoadingText] = useState("");

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

    const courses = [
      "B.Tech",
      "BCA",
      "B.Sc",
      "B.Com",
      "BA",
      "M.Tech",
      "MBA",
      "MCA",
      "M.Sc"
    ];

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    gender: "",
    course: "",
    year: "",
    cgpa: "",
    income: "",
    careerGoal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     let interval;

    try {
      setLoading(true);

      const steps = [
        "🔍 Finding Scholarships...",
        "📊 Checking Eligibility...",
        "🎯 Calculating Profile Score...",
        "🚀 Creating Career Roadmap...",
        "🤖 Generating AI Report..."
      ];

      let index = 0;

      setLoadingText(steps[0]);

      interval = setInterval(() => {
        index++;

        if (index < steps.length) {
          setLoadingText(steps[index]);
        }
      }, 1200);

      const response = await axios.post(
        "/api/analyze",
        formData
      );

      setResult(response.data.analysis);
      setProfileScore(response.data.profileScore);

      setFormData({
        name: "",
        state: "",
        gender: "",
        course: "",
        year: "",
        cgpa: "",
        income: "",
        careerGoal: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      clearInterval(interval);
      setLoadingText("");
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-4 md:p-6">
      <div className="w-full max-w-7xl mx-auto overflow-x-hidden">

        <div className="text-center mb-14">

  <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
    🚀 AI Powered Scholarship & Career Assistant
  </div>

  <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
    EduGuide AI
  </h1>

  <p className="text-slate-300 mt-5 text-xl max-w-3xl mx-auto">
    Discover Scholarships, Evaluate Eligibility, Generate Career Roadmaps
    and receive personalized AI guidance in seconds.
  </p>

        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">

          <div className="
            bg-slate-900/60
            backdrop-blur-md
            rounded-2xl
            p-5
            border border-slate-800
            hover:border-cyan-500/40
            hover:-translate-y-1
            transition-all
          ">
            <div className="text-4xl mb-3">
              🎓
            </div>

            <h3 className="font-bold text-lg text-white">
              Scholarship Matching
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              AI finds scholarships based on CGPA, income, state and profile.
            </p>
          </div>

          <div className="
            bg-slate-900/60
            backdrop-blur-md
            rounded-2xl
            p-5
            border border-slate-800
            hover:border-green-500/40
            hover:-translate-y-1
            transition-all
          ">
            <div className="text-4xl mb-3">
              🤖
            </div>

            <h3 className="font-bold text-lg text-white">
              AI Career Guidance
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Personalized career recommendations and skill analysis.
            </p>
          </div>

          <div className="
            bg-slate-900/60
            backdrop-blur-md
            rounded-2xl
            p-5
            border border-slate-800
            hover:border-purple-500/40
            hover:-translate-y-1
            transition-all
          ">
            <div className="text-4xl mb-3">
              🗺️
            </div>

            <h3 className="font-bold text-lg text-white">
              6-Month Roadmap
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Structured monthly roadmap to achieve your career goals.
            </p>
          </div>

        </div>

        {/* <div className="grid lg:grid-cols-2 gap-8"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* FORM */}
        <div className="space-y-4">

          <button
            type="button"
            onClick={() =>
              setFormData({
                name: "Saba Ahmad",
                state: "Jharkhand",
                gender: "Male",
                course: "B.Tech",
                year: "4th",
                cgpa: "8.04",
                income: "300000",
                careerGoal: "Software Engineer",
              })
            }
            className="
            w-full
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500/10
            to-blue-500/10
            border
            border-cyan-500/20
            text-cyan-400
            font-semibold
            hover:scale-[1.01]
            transition-all
            "
          >
            ⚡ Try Demo Profile
          </button>

          <StudentForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            states={states}
            courses={courses}
            loadingText={loadingText}
          />

        </div>

          {/* RESULT */}

          <AnalysisPanel
            result={result}
            profileScore={profileScore}
            formData={formData}
            generatePDF={generatePDF}
            loading={loading}
            loadingText={loadingText}
          />

        </div>
      </div>
    </div>
  );
}

export default App;