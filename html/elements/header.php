<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/assets/icons/favicon.svg" type="image/x-icon">
    <link rel="icon" href="/assets/icons/favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="/assets/styles/main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap" rel="stylesheet">

    <title>.blog Web-Application</title>
</head>

<body>

    <header>

        <div class="logo">
            <a href="/">
                <img src="/assets/icons/logo.svg" alt="logo">
            </a>
        </div>

        <nav id="navigation" class="navigation">


            <div class="menu">
                <div class="content">

                    <div class="logo">
                        <img src="/assets/icons/logo.svg" alt="logo">
                    </div>

                    <ul>
                        <li><a href="№!">Main</a></li>
                        <li><a href="№!">All posts</a></li>
                        <li><a href="№!">New post</a></li>
                        <li><a href="№!">About me</a></li>
                        <li><a href="№!">Contact me</a></li>
                    </ul>

                    <div class="bottom">
                        <div class="socials">
                            <a target="_blank" href="https://telegram.org/"><img src="/assets/icons/social-telegram.svg" alt="social icon"></a>
                            <a target="_blank" href="https://www.facebook.com/"><img src="/assets/icons/social-facebook.svg" alt="social icon"></a>
                            <a target="_blank" href="https://instagram.com/"><img src="/assets/icons/social-instagram.svg" alt="social icon"></a>
                        </div>

                        <p> This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service</p>
                        <a href="mailto:student00010613@gmail.com">00010613</a>
                    </div>
                </div>

                <div id="navButton" class="button">
                    <img src="/assets/icons/arrow.svg" alt="arrow">
                </div>
            </div>
        </nav>
    </header>


    <script>
        document.getElementById('navButton').onclick = function() {
            var nav = document.getElementById('navigation')
            var main = document.getElementById('main')

            nav.classList.toggle('opened');
            main.classList.toggle('opened');
        }
    </script>