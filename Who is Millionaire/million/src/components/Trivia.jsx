import { useState, useEffect } from "react";


function Trivia({data, setStop, questionNumber, setQuestionNumber}){
    const [question, setQuestion] = useState(null);
    const [className, setClassName] = useState("answer");
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        }, 3000);
        delay(6000, () => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1);
            } else {
                setStop(true);
            }
        });
    }

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((q) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={selectedAnswer === q ? className : "answer"} onClick={() => handleClick(q)}>{q.text}</div>
                ))}
            </div>
        </div>
    );
}

export default Trivia;