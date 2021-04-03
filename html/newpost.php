<?php include "elements/header.php"; ?>

<main id="main" class="newpost">
    <div class="container">
        <h2>New Post</h2>

        <form action="#!" method="#!">
            <div class="input">
                <span>Title</span>
                <input type="text" name="title" required>
            </div>
            <div class="input">
                <span>Author</span>
                <input type="text" name="author" required>
            </div>
            <div class="input">
                <span>Date</span>
                <input type="date" name="date" required>
            </div>
            <div class="textarea">
                <span>Content</span>
                <textarea name="content" required></textarea>
            </div>
        </form>
    </div>
</main>