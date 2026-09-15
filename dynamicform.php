<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=100, initial-scale=1.0">
    <title>Dynamic Form</title>
</head>
<body>
    <section id="dynamic-form">
        <form action="" method="post">
            <div id="form-container">
            <label for="products">Dodaj produkt</label>
            <input type="text" name="products[]" id="products">
            <label for="add-next">Dodaj kolejny:</label>
            <button name="add-next" id="add-next">+</button>
            <submit name="submit">Wyślij</submit>
</div>
        </form>
    </section>
    <script src="js/code.js"></script>
</body>
</html>