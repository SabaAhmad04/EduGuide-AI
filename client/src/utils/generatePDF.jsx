import jsPDF from "jspdf";

export const generatePDF = (
  result,
  profileScore,
  formData
) => {

  const doc = new jsPDF();

  let y = 20;

  // Header
  doc.setFontSize(24);
  doc.setTextColor(0, 102, 255);

  doc.text("EduGuide AI Report", 20, y);

  y += 15;

  doc.setDrawColor(220);
  doc.line(20, y, 190, y);

  y += 15;

  // Student Details

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);

  doc.text("Student Information", 20, y);

  y += 10;

  doc.setFontSize(11);

  doc.text(`Name: ${formData.name}`, 20, y);
  y += 7;

  doc.text(`State: ${formData.state}`, 20, y);
  y += 7;

  doc.text(`Course: ${formData.course}`, 20, y);
  y += 7;

  doc.text(`CGPA: ${formData.cgpa}`, 20, y);
  y += 7;

  doc.text(`Career Goal: ${formData.careerGoal}`, 20, y);

  y += 15;

  // Score Box

  doc.setFillColor(0, 153, 255);

  doc.roundedRect(
    20,
    y,
    170,
    25,
    3,
    3,
    "F"
  );

  doc.setTextColor(255, 255, 255);

  doc.setFontSize(20);

  doc.text(
    `AI Profile Score: ${profileScore}/100`,
    30,
    y + 16
  );

  y += 40;

  // Clean markdown

  const cleaned = result
    .replace(/#/g, "")
    .replace(/\*\*/g, "")
    .replace(/---/g, "")
    .replace(/🎓|✅|🚀|📚|🗺️|📊|💡/g, "");

  const lines = doc.splitTextToSize(
    cleaned,
    165
  );

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);

  lines.forEach((line) => {

    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.text(line, 20, y);

    y += 7;
  });

  doc.save("EduGuide_AI_Report.pdf");
};