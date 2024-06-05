"use client";

import {
  Box,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import {
  Celebration as CelebrationIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  Grade as GradeIcon,
} from "@mui/icons-material";
import ProgressMeter from "../components/progress-meter";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "What is the full form of HTML?",
    answers: [
      { text: "HighText Markup Language", correct: false },
      { text: "Hyperlink Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Multimedia Language", correct: false },
    ],
    points: 5,
  },
  {
    question: "Which HTML5 element is used to draw graphics on a web page?",
    answers: [
      { text: "<canvas>", correct: true },
      { text: "<paint>", correct: false },
      { text: "<draw>", correct: false },
      { text: "<graphic>", correct: false },
    ],
    points: 5,
  },
  {
    question:
      "Which of the following is a new form input type introduced in HTML5 for entering dates?",
    answers: [
      { text: "<datetime>", correct: false },
      { text: "<date>", correct: true },
      { text: "<time>", correct: false },
      { text: "<calendar>", correct: false },
    ],
    points: 5,
  },
  {
    question:
      "Which attribute is used to provide a short hint describing the content of an input element in HTML5?",
    answers: [
      { text: "hint", correct: false },
      { text: "description", correct: false },
      { text: "placeholder", correct: true },
      { text: "tooltip", correct: false },
    ],
    points: 5,
  },
];

interface Questions {
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
  points: number;
}

function Question({
  questionNumber,
  question,
  answers,
  points,
  totalQuestions,
  setProgressValue,
  setNextQuestionIndex,
}: Questions & {
  questionNumber: number;
  totalQuestions: number;
  setProgressValue: React.Dispatch<React.SetStateAction<number>>;
  setNextQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answerResponse, setAnswerResponse] = useState<number | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);
  const [radioGroupDisabled, setRadioGroupDisabled] = useState(false);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedAnswer(e.target.value);
    setButtonDisabled(false);
  }

  function handleCheck(e: React.MouseEvent<HTMLButtonElement>) {
    if (selectedAnswer === "") return;

    const found = Boolean(
      answers.find((answer) => answer.correct && answer.text === selectedAnswer)
    );

    if (found) {
      setAnswerResponse(1);
    } else {
      setAnswerResponse(0);
    }

    setToggleButton(false);
    setRadioGroupDisabled(true);

    const questionWeightage = Math.ceil(100 / totalQuestions);
    setProgressValue((prev) => prev + questionWeightage);
  }

  function handleNext() {
    setNextQuestionIndex((prev) => prev + 1);
  }

  return (
    <Box sx={{ mx: 2, mb: 4, pb: 3 }}>
      <FormControl>
        <Typography variant="body1">
          {questionNumber}. {question}
        </Typography>
        <RadioGroup
          name={`radio-question-${questionNumber}`}
          value={selectedAnswer}
          onChange={handleOnChange}
        >
          {answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              value={answer.text}
              control={<Radio />}
              disabled={radioGroupDisabled}
              label={answer.text}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Grid container alignItems="center" sx={{ mt: 2 }}>
        <Grid item sx={{ flexGrow: 1 }}>
          {answerResponse === 1 && (
            <Box sx={{ color: "green", display: "flex", alignItems: "center" }}>
              <CelebrationIcon sx={{ mr: 1 }} />{" "}
              <Box sx={{ flexGrow: 1 }}>Correct!</Box>
              <Box
                sx={{
                  mr: 1,
                  py: 0.5,
                  px: 1,
                  display: "flex",
                  background: "greenyellow",
                  borderRadius: 2,
                }}
              >
                <GradeIcon /> <Box>+{points}</Box>
              </Box>
            </Box>
          )}
          {answerResponse === 0 && (
            <Box
              sx={{
                color: "red",
                display: "flex",
              }}
            >
              <SentimentDissatisfiedIcon sx={{ mr: 1 }} /> <Box>Incorrect!</Box>
            </Box>
          )}
        </Grid>
        <Grid item>
          <>
            {toggleButton && (
              <Button
                variant="contained"
                onClick={handleCheck}
                disabled={buttonDisabled}
              >
                Check
              </Button>
            )}
            {answerResponse !== null && (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function DailyQuiz() {
  const router = useRouter();
  const [progressValue, setProgressValue] = useState(0);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [displayQuestions, setDisplayQuestions] = useState<Questions[]>([]);

  const questionRef = useRef<HTMLDivElement>(null);

  const question = questions[nextQuestionIndex];
  const normalizedProgressValue = Math.max(0, Math.min(100, progressValue)); // clamp between 0 and 100

  useEffect(() => {
    setDisplayQuestions([...displayQuestions, question]);
  }, [question, displayQuestions, nextQuestionIndex]);

  useEffect(() => {
    const el = questionRef.current as HTMLDivElement;
    const rect = el?.getBoundingClientRect();

    window.scrollTo({
      top:
        window.scrollY +
        rect?.height +
        rect?.top -
        (window.outerWidth > 600 ? 64 : 56),
      behavior: "smooth",
    });
  });

  const [remainingHeight, setRemainingHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - 200 : 0
  );

  useEffect(() => {
    const updateHeight = () => setRemainingHeight(window.innerHeight - 200);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Box>
      <ProgressMeter value={progressValue} />
      {displayQuestions.map((question, index) => (
        <Box key={index} ref={questionRef}>
          <Question
            questionNumber={index + 1}
            question={question.question}
            answers={question.answers}
            points={question.points}
            totalQuestions={questions.length}
            setProgressValue={setProgressValue}
            setNextQuestionIndex={setNextQuestionIndex}
          />
          {/* <div
            id="spacer"
            style={{ height: remainingHeight, background: "yellow" }}
          /> */}
        </Box>
      ))}

      {normalizedProgressValue === 100 && (
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            sx={{ mx: 2, width: "100%" }}
            onClick={() => router.push("/pwa/daily-test-completed")}
          >
            Finish
          </Button>
        </Box>
      )}
    </Box>
  );
}
