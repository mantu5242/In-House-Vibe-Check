// import React from 'react'
// import './Styles/ResultPage.css'
// import { useNavigate, useLocation } from 'react-router-dom';

// const ResultPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { score, total } = location.state || { score: 0, total: 0 };

//     const handleShare = () => {
//         const shareText = `I scored ${score}/${total} on the Vibe Check Quiz! Can you beat me? 👉 yourapp.com/quiz`;
//         navigator.clipboard.writeText(shareText);
//         alert('Result copied to clipboard! Share it with friends!');
//     };

//     const getMessage = () => {
//         const percentage = (score / total) * 100;
//         if (percentage === 100) return "Perfect Vibes! 🎯";
//         if (percentage >= 70) return "Great Vibes! ✨";
//         if (percentage >= 50) return "Decent Vibes 😎";
//         return "Low Vibes... Try Again 💫";
//     };

//   return (
//     <div className="result-container">
//       <h1>Quiz Results</h1>
//       <div className="score-card">
//         <p className="score-text">Your Score:</p>
//         <h2>{score} / {total}</h2>
//         <p className="message">{getMessage()}</p>
//         <button className="share-btn" onClick={handleShare}>Share Result</button>
//         <button className="home-btn" onClick={() => navigate('/')}>Back to Home</button>
//       </div>
//     </div>
//   )
// }

// export default ResultPage

import React from 'react';
import './Styles/ResultPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  const shareText = `I scored ${score}/${total} on the Vibe Check Quiz! Can you beat me? 👉 ${window.location.origin}/quiz`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    alert('Result copied to clipboard! Share it with friends!');
  };

  const handleWhatsAppShare = () => {
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappURL, '_blank');
  };

  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return 'Perfect Vibes! 🎯';
    if (percentage >= 70) return 'Great Vibes! ✨';
    if (percentage >= 50) return 'Decent Vibes 😎';
    return 'Low Vibes... Try Again 💫';
  };

  return (
    <div className="result-container">
      <h1>Quiz Results</h1>
      <div className="score-card">
        <p className="score-text">Your Score:</p>
        <h2>{score} / {total}</h2>
        <p className="message">{getMessage()}</p>
        <button className="share-btn" onClick={handleCopyShare}>📋 Copy Result</button>
        <button className="whatsapp-btn" onClick={handleWhatsAppShare}>🟢 Share on WhatsApp</button>
        <button className="home-btn" onClick={() => navigate('/')}>🏠 Back to Home</button>
      </div>
    </div>
  );
};

export default ResultPage;
