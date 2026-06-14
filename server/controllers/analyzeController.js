const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

exports.analyzeProfile = async (req, res) => {
  try {

    const {
      name,
      state,
      gender,
      course,
      year,
      cgpa,
      income,
      careerGoal
    } = req.body;

    console.log(req.body);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
    You are EduGuide AI, an expert Indian Scholarship, Career and Education Guidance Assistant.

    Student Profile:

    - Name: ${name}
    - State: ${state}
    - Gender: ${gender}
    - Course: ${course}
    - Year: ${year}
    - CGPA: ${cgpa}
    - Family Income: ₹${income}
    - Career Goal: ${careerGoal}

    Instructions:

    1. Recommend ONLY real Indian scholarships.
    2. Include both National and State-specific scholarships relevant to the student's state.
    3. Do NOT generate fake scholarships.
    4. Mention official scholarship websites whenever possible.
    5. Rank scholarships from highest priority to lowest priority.
    6. Explain why the student is eligible.
    7. Suggest skills according to the student's career goal.
    8. Create a practical 6-month roadmap.
    9. Give actionable career advice.
    10. Keep recommendations personalized to the student's profile.

    Return response in STRICT MARKDOWN format.

    # 🎓 Scholarship Recommendations

    For each scholarship provide:

    ## Scholarship Name

    **Benefit:** Amount/Benefits

    **Eligibility Match:** Why this student qualifies

    **Official Website:** [Apply Here](website-link)

    **Priority:** High / Medium / Low

    ---

    # ✅ Eligibility Analysis

    Explain:

    - Academic Strength
    - Income-Based Eligibility
    - State-Based Opportunities
    - Improvement Areas

    ---

    # 🚀 Career Recommendation

    Recommend the most suitable career path based on the student's profile and explain why.

    ---

    # 📚 Skills To Learn

    Provide 5-8 skills with short explanations.

    Example:

    - Skill Name → Why it is important

    ---

    # 🗺️ 6-Month Roadmap

    ## Month 1-2
    - Tasks

    ## Month 3-4
    - Tasks

    ## Month 5-6
    - Tasks

    ---

    # 📈 Profile Evaluation

    Give scores out of 10 for:

    - Academic Profile
    - Scholarship Potential
    - Career Readiness
    - Overall Profile Strength

    ---

    # 💡 Final Advice

    Provide a concise personalized action plan for the next 30 days.

    Important:
    - Recommend only real scholarships.
    - Use markdown links whenever possible.
    - Keep the response professional, practical and student-friendly.
    `;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    let score = 0;

    const cgpaNum = Number(cgpa);
    const incomeNum = Number(income);

    if (cgpaNum >= 9) score += 40;
    else if (cgpaNum >= 8) score += 30;
    else if (cgpaNum >= 7) score += 20;
    else score += 10;

    if (incomeNum <= 300000) score += 20;

    if (careerGoal) score += 20;

    if (
      year === "3rd Year" ||
      year === "4th Year"
    ) {
      score += 20;
    }

    score = Math.min(score, 100);

    res.status(200).json({
      analysis: response,
      profileScore: score
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Something went wrong"
    });

  }
};