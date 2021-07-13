import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import './App.css';
import Xbox from "./assets/xbox.jpg";
import PS5 from "./assets/ps5.jpg"
import Switch from "./assets/nintendo.png";
import Stadia from "./assets/stadia.jpg";
import Welcome from "./components/HelloWorld";

const App = () => {
  return (
    <div>
    <Welcome />
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
          description: "The Xbox is for you. With two SKUs (Series S: $300. Series X: $500) and plenty of games to play on the Netflix-style service, Game Pass, the Xbox is one of the most flexible gaming options this generation.",
          resultID: 0,
          resultID: 1,
          resultImageSrc: Xbox,
          findProduct: "Xbox.com"
        },
        {
          title: "Playstation 5",
          description: "The PlayStation 5 is for you. The PS5 has two SKUs this generation. Digital edition at $400 and disc drive included, $500 edition. The PS5 is known for big, movie-like games. If you’re looking for the best single player experience this generation, the PS5 is a great option.",
          resultID: 2,
          resultImageSrc: PS5,
        },
        {
          title: "Nintendo Switch",
          description: "The Nintendo Switch is for you. The Switch is technically last generation. Don’t let that stop you. It’s an affordable console at $299 and a $199 SKU is available. Nintendo is famous for family friendly games. If you’re looking for a fun, casual, gaming experience then look no further than the switch. ",
          resultID: 3,
          resultImageSrc: Switch,
        },
        {
          title: "Google Stadia",
          description: "Google Stadia is for you. Google Stadia is an all-cloud gaming console. You’re going to need some decent internet speeds and likely unlimited data. However, for just $10 a month (plus the cost of games) you can play on just about any device. Cloud gaming is one of the newest innovations in gaming and getting started is low cost.",
          resultID: 4,
          resultImageSrc: Stadia,
        },
      ]}
    />
    </div>
  );
};

export default App;
