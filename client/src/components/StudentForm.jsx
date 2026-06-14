import {
  GraduationCap,
  User,
  BadgeInfo,
  IndianRupee,
} from "lucide-react";

function StudentForm({
  formData,
  handleChange,
  handleSubmit,
  loading,
  states,
  courses,
}) {
  return (
    <div
      className="
      bg-slate-900/70
      backdrop-blur-xl
      border border-slate-800
      rounded-3xl
      p-8
      shadow-2xl
      "
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="flex items-center gap-3 text-3xl font-bold">
            <GraduationCap
              size={34}
              className="text-cyan-400"
            />
            Student Profile
          </h2>

          <p className="text-slate-400 mt-2">
            Fill your academic details for AI-powered guidance
          </p>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-400 text-sm">
          EduGuide AI
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Name */}

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-xl
            bg-slate-800/80
            border border-slate-700
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/30
            outline-none
            transition-all
            "
          />
        </div>

        {/* State */}

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800/80
          border border-slate-700
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/30
          outline-none
          "
        >
          <option value="">
            Select State
          </option>

          {states.map((state) => (
            <option
              key={state}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>

        {/* Gender */}

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800/80
          border border-slate-700
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/30
          outline-none
          "
        >
          <option value="">
            Select Gender
          </option>

          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Course */}

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800/80
          border border-slate-700
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/30
          outline-none
          "
        >
          <option value="">
            Select Course
          </option>

          {courses.map((course) => (
            <option
              key={course}
              value={course}
            >
              {course}
            </option>
          ))}
        </select>

        {/* Year */}

        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800/80
          border border-slate-700
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/30
          outline-none
          "
        >
          <option value="">
            Select Year
          </option>

          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>

        {/* CGPA */}

        <div className="relative">
          <BadgeInfo
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="number"
            step="0.1"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            placeholder="Current CGPA"
            className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-xl
            bg-slate-800/80
            border border-slate-700
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/30
            outline-none
            "
          />
        </div>

        {/* Income */}

        <div className="relative">
          <IndianRupee
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Annual Family Income"
            className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-xl
            bg-slate-800/80
            border border-slate-700
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/30
            outline-none
            "
          />
        </div>

        {/* Career Goal */}

        <select
          name="careerGoal"
          value={formData.careerGoal}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800/80
          border border-slate-700
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/30
          outline-none
          "
        >
          <option value="">
            Select Career Goal
          </option>

          <option value="Software Engineer">
            Software Engineer
          </option>

          <option value="Data Scientist">
            Data Scientist
          </option>

          <option value="AI Engineer">
            AI Engineer
          </option>

          <option value="Civil Engineer">
            Civil Engineer
          </option>

          <option value="Government Job">
            Government Job
          </option>

          <option value="Researcher">
            Researcher
          </option>

          <option value="Entrepreneur">
            Entrepreneur
          </option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="
          w-full
          py-4
          rounded-2xl
          font-bold
          text-lg
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-600
          hover:scale-[1.02]
          hover:shadow-lg
          hover:shadow-cyan-500/20
          transition-all
          duration-300
          disabled:opacity-60
          "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating AI Report...
            </div>
          ) : (
            "🚀 Analyze My Profile"
          )}
        </button>
      </form>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <h4 className="text-cyan-400 font-bold">
            Scholarships
          </h4>

          <p className="text-xs text-slate-400">
            AI Search
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <h4 className="text-cyan-400 font-bold">
            Roadmap
          </h4>

          <p className="text-xs text-slate-400">
            6 Months
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <h4 className="text-cyan-400 font-bold">
            Skills
          </h4>

          <p className="text-xs text-slate-400">
            Career Ready
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;