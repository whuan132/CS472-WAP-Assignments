<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz - The Number Quiz</title>
</head>
<body>
<h2>The Number Quiz</h2>
<p>Your current sore is <strong>${score}.</strong></p>
<p>Guess the next number in the sequence:</p>
<p>${question}</p>

<form action="quiz" method="post">
    <p>Your answer:
        <input type="text" name="answer" required>
    </p>
    <input type="submit" value="Submit">
</form>
</body>
</html>
