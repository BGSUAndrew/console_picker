import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import './App.css';


const App = () => {
  return (
    <BuzzFeedQuiz
      title={"Choose your console quiz"}
      autoScroll={true}
      questions={[
        {
          question: "What's the most you're willing to spend?",
          answers: [
            {
              answer: "$300",
              resultID: 0,
              resultID: 3,
            },
            {
              answer: "$500",
              resultID: 1,
              resultID: 2,
            },
            {
              answer: "I'd rather pay a monthly cost",
              resultID: 4,
            },
          ],
        },
        {
          question: "What game characters are important to you?",
          answers: [
            {
              answer: "I don't care",
              resultID: 4,
            },
            {
              answer: "Mario!",
              resultID: 3,
            },
            {
              answer: "Master Chief",
              resultID: 0,
              resultID: 1,
            },
            {
              answer: "Kratos",
              resultID: 2,
            },
          ],
        },
        {
          question: "Which feature is the most important?",
          answers: [
            {
              answer: "I want big, movie-like games",
              resultID: 2,
            },
            {
              answer: "I want family friendly games",
              resultID: 3,
            },
            {
              answer: "I'd like a Netflix-type service to play a lot of games for a montly fee",
              resultID: 0,
              resultID: 1,
            },
            {
              answer: "I like trying the newest tech. Who knows what it will become?!",
              resultID: 4,
            },
          ],
        },
        {
          question: "Of all these, what's your favorite color?",
          answers: [
            {
              answer: "Green",
              resultID: 0,
              resultID: 1,
            },
            {
              answer: "Blue",
              resultID: 2,
            },
            {
              answer: "You want me to pick just one color?!",
              resultID: 3,
            },
            {
              answer: "Orange",
              resultID: 3,
            },
          ],
        },
        {
          question: "Which phrase means the most to you?",
          answers: [
            {
              answer: "Switch and Play",
              resultID: 3,
            },
            {
              answer: "Play has no limits",
              resultID: 2,
            },
            {
              answer: "Play for everyone",
              resultID: 4,
            },
            {
              answer: "Power your dreams",
              resultID: 0,
              resultID: 1,
            },
          ],
        },
      ]}
      results={[
        {
          title: "Xbox Series S or X",
          resultID: 0,
          resultID: 1,
        },
        {
          title: "Playstation 5",
          description: "Your second result description goes here",
          resultID: 2,
        },
        {
          title: "Nintendo Switch",
          description: "Result images and attributions are optional!",
          resultID: 3,
        },
        {
          title: "Google Stadia",
          description: "Result images and attributions are optional!",
          resultID: 4,
        },
      ]}
    />
  );
};

export default App;
