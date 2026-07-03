import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      questionText: "In which year was Mahatma Gandhi born?",
      answerOptions: [
        { answerText: "1869", isCorrect: true },
        { answerText: "1879", isCorrect: false },
        { answerText: "1889", isCorrect: false },
        { answerText: "1859", isCorrect: false },
      ],
    },
    {
      questionText: "Which movement was launched in 1942?",
      answerOptions: [
        { answerText: "Salt March", isCorrect: false },
        { answerText: "Non-Cooperation", isCorrect: false },
        { answerText: "Quit India", isCorrect: true },
        { answerText: "Khilafat Movement", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'Satyagraha' mean?",
      answerOptions: [
        { answerText: "Physical Force", isCorrect: false },
        { answerText: "Truth Force", isCorrect: true },
        { answerText: "Political Power", isCorrect: false },
        { answerText: "Silent Protest", isCorrect: false },
      ],
    }
  ];

  const handleAnswerOptionClick = (isCorrect: boolean, index: number) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <section id="quiz" className="py-20 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-4">Gandhian Knowledge Quiz</h2>
          <p className="text-brand-600 text-lg">Test your knowledge about the life and teachings of Mahatma Gandhi.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 p-8 md:p-12">
          {showScore ? (
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-brand-700">{score}/{questions.length}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">Quiz Completed!</h3>
              <p className="text-brand-600 mb-8">
                {score === questions.length ? "Excellent! You are a true scholar of Gandhian philosophy." : "Good effort! Keep exploring our resources to learn more."}
              </p>
              <button 
                onClick={resetQuiz}
                className="bg-brand-600 text-white px-8 py-3 rounded-md font-bold hover:bg-brand-700 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-brand-500 uppercase tracking-wider">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-brand-400">
                    Score: {score}
                  </span>
                </div>
                <div className="w-full bg-brand-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-8">
                {questions[currentQuestion].questionText}
              </h3>
              
              <div className="space-y-4">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => {
                  let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ";
                  
                  if (selectedAnswer === index) {
                    if (answerOption.isCorrect) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    }
                  } else if (selectedAnswer !== null && answerOption.isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800";
                  } else {
                    buttonClass += "border-brand-200 bg-white hover:border-brand-400 hover:bg-brand-50 text-brand-800";
                  }

                  return (
                    <button
                      key={index}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                      className={buttonClass}
                    >
                      <span className="font-medium text-lg">{answerOption.answerText}</span>
                      {selectedAnswer !== null && answerOption.isCorrect && <CheckCircle className="text-green-500" />}
                      {selectedAnswer === index && !answerOption.isCorrect && <XCircle className="text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};