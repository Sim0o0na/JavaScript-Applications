<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Bus Stop</title>
<style>
#stopName {
    font-size: 1.5em;
    font-weight: 400;
    padding: 0.25em;
    background-color: aquamarine;
}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    </head>
    <body>
    <div id="stopInfo" style="width:20em">
    <div>
    <label for="stopId">Stop ID: </label>
<input id="stopId" type="text">
    <input id="submit" type="button" value="Check" onclick="getInfo()"></div>
    <div id="result">
    <div id="stopName"></div>
    <ul id="buses"></ul>
    </div>
    </div>
    <script>
    function getInfo() {
        // TODO ...
    }
    </script>
    </body>
    </html>
