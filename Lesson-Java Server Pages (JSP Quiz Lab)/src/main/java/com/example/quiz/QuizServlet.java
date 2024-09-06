package com.example.quiz;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class QuizServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }

        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        // Default values
        request.setAttribute("hint", null);
        request.setAttribute("correctAnswer", null);
        request.setAttribute("error", null);

        if (quiz != null) {
            if ("hint".equals(action)) {
                request.setAttribute("hint", quiz.getCurrentHint());
            } else if ("submit".equals(action)) {
                // Handle answer submission
                String answer = request.getParameter("answer");
                String ageStr = request.getParameter("age");

                try {
                    int age = Integer.parseInt(ageStr);
                    if (age < 4 || age > 100) {
                        request.setAttribute("error", "Age must be between 4 and 100.");
                    } else {
                        request.setAttribute("age", age);  // Remember the user's age
                        int userAnswer = Integer.parseInt(answer);
                        if (!quiz.checkAnswer(userAnswer)) {
                            request.setAttribute("correctAnswer", quiz.getCurrentAnswer());
                        }
                    }
                } catch (NumberFormatException e) {
                    request.setAttribute("error", "Please enter a valid number.");
                }
            }
        }

        // Check if quiz is over
        if (!quiz.hasMoreQuestions()) {
            request.setAttribute("score", quiz.getScore());
            request.setAttribute("finalScore", quiz.getScore());
            request.setAttribute("totalQuestions", SequenceDatabase.getTotalSequences());

            int score = quiz.getScore();
            String grade = (score >= 45) ? "A" : (score >= 35) ? "B" : (score >= 25) ? "C" : "NC";
            request.setAttribute("grade", grade);

            request.getRequestDispatcher("/pages/result.jsp").forward(request, response);
            session.setAttribute("quiz", null);
        } else {
            request.setAttribute("question", quiz.getCurrentQuestion());
            request.setAttribute("score", quiz.getScore());
            request.getRequestDispatcher("/pages/quiz.jsp").forward(request, response);
        }
    }
}
