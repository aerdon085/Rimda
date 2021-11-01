Sounds.js
=========

Small library for playing sounds in games (like those written in 3D Game Programming for Kids!)

Support several sounds:

````javascript
Sounds.bubble.play();
Sounds.buzz.play();
Sounds.click.play();
Sounds.donk.play();
Sounds.drip.play();
Sounds.guitar.play();
Sounds.knock.play();
Sounds.scratch.play();
Sounds.snick.play();
Sounds.spring.play();
Sounds.swish.play();
````

In addition to `play()`, each sound can be repeated (and stopped):

````javascript
Sounds.click.repeat();
setTimeout(function() {Sounds.click.stop();}, 1000);
````

Can be imported from the gamingjs.com site with:

````html
<script src="http://gamingjs.com/Sounds.js"></script>
````
