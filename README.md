<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feynman Notebook Portfolio</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: "Courier New", monospace;
        background: repeating-linear-gradient(
            0deg,
            #fdfdfd,
            #fdfdfd 24px,
            #e4f6e4 25px
        );
        color: #222;
        line-height: 1.6;
    }

    .container {
        max-width: 900px;
        margin: 30px auto;
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid #b8d8b8;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 0 15px rgba(0,0,0,0.07);
        position: relative;
    }

    h1, h2, h3 {
        font-family: "Comic Sans MS", "Marker Felt", cursive;
        color: #2b8a3e;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 2.2rem;
        border-bottom: 2px dashed #75c975;
        padding-bottom: 8px;
    }

    a {
        color: #2b8a3e;
        text-decoration: none;
        border-bottom: 1px dotted #2b8a3e;
        transition: 0.2s;
    }

    a:hover {
        color: #1a6024;
        text-shadow: 0 0 3px rgba(43, 138, 62, 0.4);
    }

    .section {
        margin-bottom: 25px;
        padding-left: 20px;
        border-left: 3px dashed #98c998;
        position: relative;
    }

    .section:before {
        content: "↳";
        position: absolute;
        left: -15px;
        top: 5px;
        color: #7eba7e;
        font-size: 20px;
    }

    .project {
        background: #f4fff4;
        padding: 15px;
        border-radius: 10px;
        border: 1px dashed #a6d4a6;
        margin-bottom: 15px;
        transition: 0.3s;
    }

    .project:hover {
        transform: translateX(8px);
        background: #edffed;
        box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }

    .project i {
        color: #2b8a3e;
        margin-right: 8px;
    }

    .margin-note {
        position: absolute;
        right: -160px;
        width: 140px;
        font-size: 0.8rem;
        color: #4a7f4a;
        opacity: 0.8;
        font-family: "Comic Sans MS", "Marker Felt", cursive;
    }

    .footer {
        text-align: center;
        margin-top: 40px;
        border-top: 2px dashed #b8d8b8;
        padding-top: 10px;
    }
</style>
</head>

<body>

<div class="container">

    <h1>My Notebook of Curiosity</h1>
    <p class="margin-note" style="top: 40px;">Feynman rule: If you can't explain it simply, you don't understand it.</p>

    <p>
        Hi! I'm Anurag — a Civil Engineer who got pulled (quite willingly) into the worlds of
        <strong>Artificial Intelligence</strong> and <strong>Software Engineering</strong>.
        I like cracking open complicated systems, figuring out what's really going on,
        and building things that make ideas easier to see.
    </p>

    <div class="section">
        <h2>Education</h2>
        <p><strong>B.Tech in Civil Engineering</strong> — Jabalpur Engineering College (2024)</p>
        <p>I learned why buildings stand and bridges don't fall — turns out the same logic helps software stay upright.</p>
    </div>

    <div class="section">
        <h2>Work Experience</h2>
        <h3>Software Engineering Intern (AI) | Kursaha</h3>
        <p><em>Remote | Aug 2024 – Oct 2024</em></p>

        <ul>
            <li><strong>Media Optimization</strong>: Built models that improved ROI by 15% simply by paying attention to the data.</li>
            <li><strong>OpenAI Chatbot</strong>: A chatbot that answered 1,000+ questions weekly. It never got tired — numbers don’t.</li>
            <li><strong>Automation</strong>: Saved 120+ human hours/month by letting computers do the boring parts.</li>
            <li><strong>Backend Engineering</strong>: SMTP integration in Spring Boot. Email delivery got 30% faster.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Skills</h2>
        <p><strong>Languages:</strong> Python, Java, C, SQL</p>
        <p><strong>Frameworks:</strong> Flask, Django, Spring Boot</p>
        <p><strong>Libraries:</strong> PyTorch, Pandas, NumPy, Matplotlib</p>
        <p><strong>Tools:</strong> Docker, Git, Jupyter Notebook</p>
    </div>

    <div class="section">
        <h2>Certifications</h2>
        <ul>
            <li><a href="#">Data Science Foundations</a></li>
            <li><a href="#">NLP with Python</a></li>
            <li><a href="#">Python Essential Training</a></li>
        </ul>
    </div>

    <div class="section">
        <h2>Projects</h2>

        <div class="project">
            <i class="fas fa-microchip"></i>
            <strong><a href="https://github.com/starrynightishere/Audio-Feedback-System-" target="_blank">Audio Feedback System</a></strong>
            <p>A machine that listens and talks back using Transformer models — built just to understand how they really work.</p>
        </div>

        <div class="project">
            <i class="fas fa-tasks"></i>
            <strong><a href="https://github.com/starrynightishere/TaskTracker" target="_blank">Task Tracker</a></strong>
            <p>A tool for tracking tasks and the happiness they bring. Humans are odd, but their data is fascinating.</p>
        </div>

        <div class="project">
            <i class="fas fa-vote-yea"></i>
            <strong><a href="https://github.com/starrynightishere/VotingSystem" target="_blank">Voting System GUI</a></strong>
            <p>A Tkinter voting app with cartoon candidates — because serious things can still be fun.</p>
        </div>

        <div class="project">
            <i class="fas fa-image"></i>
            <strong><a href="https://github.com/starrynightishere/beautyClassifier" target="_blank">Aesthetic Score Prediction</a></strong>
            <p>A deep-learning model that “judges” images using Xception. Humans don’t agree on beauty anyway — so 78% accuracy is pretty good.</p>
        </div>
    </div>

    <div class="section">
        <h2>Currently Learning</h2>
        <p>Digging deeper into AI and Spring Boot — and practicing the art of explaining complicated things simply. It's harder than it sounds.</p>
    </div>

    <div class="footer">
        <h3>Let’s Connect!</h3>
        LinkedIn: <a href="https://www.linkedin.com/in/anurag-mishra-007724205" target="_blank">Profile</a><br>
        Email: <a href="mailto:mishraanurag.pro@gmail.com">Send a message</a>
    </div>

</div>
</body>
</html>
