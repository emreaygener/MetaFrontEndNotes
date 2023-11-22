import { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceHolder = isDisabled
    ? "Please provide a comment explaining why the experience was poor. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });

    setScore("10");
    setComment("");
  };

  //This is the final version of the Feedback Form
  // If the score is less than or equal to 5, the comment is mandatory. We check it as a part of the validation.

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label htmlFor="scoreInput">Score: {score} ⭐</label>
            <input
              id="scoreInput"
              name="scoreInput"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea
              placeholder={textAreaPlaceHolder}
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedbackForm;
