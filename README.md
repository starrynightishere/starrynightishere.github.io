<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>My GitHub Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2b8a3e;
        }
        a {
            color: #2b8a3e;
            text-decoration: none;
            transition: color 0.3s, text-shadow 0.3s, transform 0.3s;
            position: relative;
        }
        a:hover {
            color: #1f6b2c;
            text-shadow: 0 0 5px rgba(43, 138, 62, 0.6);
            transform: scale(1.05);
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .section {
            margin-bottom: 20px;
        }
        .projects {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .project {
            padding: 15px;
            border: 1px solid #eaeaea;
            border-radius: 8px;
            background: #f4f4f4;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .project:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .project i {
            margin-right: 10px;
            color: #2b8a3e;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            padding-top: 10px;
            border-top: 1px solid #eaeaea;
        }
        .social-links a {
            margin: 0 10px;
            color: #2b8a3e;
            transition: transform 0.3s, color 0.3s;
        }
        .social-links a:hover {
            transform: scale(1.1);
            color: #1f6b2c;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Welcome to My GitHub Portfolio!</h1>
    <p>Hi, I'm a <strong>Civil Engineering graduate</strong> who has transitioned into the exciting world of <strong>Artificial Intelligence</strong> and <strong>Software Engineering</strong>. My journey reflects a passion for problem-solving, automation, and leveraging AI to tackle real-world challenges.</p>

    <div class="section">
        <h2>Education</h2>
        <p><strong>Bachelor of Technology (B.Tech) in Civil Engineering</strong> | Jabalpur Engineering College, Jabalpur, India (May 2024)</p>
    </div>

    <div class="section">
        <h2>Work Experience</h2>
        <h3>Software Engineering Intern (AI) | Kursaha</h3>
        <p><em>Remote | Aug 2024 - Oct 2024</em></p>
        <ul>
            <li><strong>Media Optimization</strong>: Built a Marketing Mix Model (MMM) to optimize media spend, boosting ROI by 15%.</li>
            <li><strong>OpenAI Chatbot</strong>: Developed a chatbot using OpenAI's API, increasing customer engagement by 25% and handling 1,000+ queries weekly.</li>
            <li><strong>Automation</strong>: Automated media analysis workflows, saving 120+ hours per month through efficient process automation.</li>
            <li><strong>Backend Development</strong>: Integrated SMTP email channels into the backend using Java Spring Boot, reducing email delivery time by 30% for 5,000+ users.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Skills & Technologies</h2>
        <p><strong>Languages</strong>: Python, Java, C, SQL</p>
        <p><strong>Frameworks</strong>: Flask, Django, Java Spring Boot</p>
        <p><strong>Tools & Libraries</strong>: PyTorch, Docker, Numpy, Pandas, Matplotlib, Jupyter Notebook, Google Colab, Git</p>
    </div>

    <div class="section">
        <h2>Certifications</h2>
        <ul>
            <li><a href="https://www.linkedin.com/learning/data-science-foundations" target="_blank">Data Science Foundations</a> (LinkedIn, 2023)</li>
            <li><a href="https://www.linkedin.com/learning/nlp-with-python-for-machine-learning" target="_blank">NLP with Python for Machine Learning</a> (LinkedIn, 2023)</li>
            <li><a href="https://www.yourcertificate3.com" target="_blank">Certification 3</a> (Institution, Year)</li>
            <li><a href="https://www.yourcertificate4.com" target="_blank">Certification 4</a> (Institution, Year)</li>
        </ul>
    </div>

    <div class="section">
        <h2>My Projects</h2>
        <div class="projects">
            <div class="project">
                <i class="fas fa-microchip"></i> <strong><a href="https://github.com/yourusername/AudioFeedbackSystem" target="_blank">Audio Feedback System</a></strong> 
                <p>Developed an audio-to-audio feedback system using Transformers for speech-to-text conversion with 80% accuracy, integrated with real-time grammar correction and gTTS for audio feedback.</p>
            </div>
            <div class="project">
                <i class="fas fa-tasks"></i> <strong><a href="https://github.com/yourusername/TaskTracker" target="_blank">Task Tracker</a></strong> 
                <p>Created a web-based application enabling users to log over 100 daily tasks, assigning happiness scores from 1 to 10, revealing a 60% correlation between completed tasks and user-reported happiness.</p>
            </div>
            <div class="project">
                <i class="fas fa-vote-yea"></i> <strong><a href="https://github.com/yourusername/VotingSystem" target="_blank">Voting System GUI</a></strong> 
                <p>Developed a graphical voting application using Tkinter, featuring six cartoon candidates and a NOTA option, allowing real-time voting for over 50 participants with a responsive GUI.</p>
            </div>
            <div class="project">
                <i class="fas fa-image"></i> <strong><a href="https://github.com/yourusername/AestheticScorePrediction" target="_blank">Aesthetic Score Prediction</a></strong> 
                <p>Built a custom model using Xception architecture to predict aesthetic scores of images, achieving 78% accuracy with transfer learning to reduce training time by 30%.</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Currently Learning</h2>
        <p>I’m currently exploring more advanced concepts in AI and working with <strong>Spring Boot</strong> for backend development in Java. I'm always excited about opportunities that merge AI with practical, real-world applications!</p>
    </div>

    <div class="footer">
        <h3>Let’s Connect!</h3>
        <p class="social-links">
            LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">Your LinkedIn</a><br>
            Email: <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
        </p>
    </div>
</div>

</body>
</html>
