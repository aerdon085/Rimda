// scene
var scene = new THREE.Scene();
var flat = {flatShading: true};
var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);
// camera
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
camera.position.y = 500;
camera.rotation.x = 150;
scene.add(camera);
// renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CODE HERE
// circle
var shape = new THREE.SphereGeometry(200, 10, 10);
var cover = new THREE.MeshNormalMaterial(flat);
var ball = new THREE.Mesh(shape, cover);
ball.position.set(250, 250, -250);
scene.add(ball);

// box
var shape = new THREE.BoxGeometry(200, 200, 200);
var box = new THREE.Mesh(shape, cover);
box.position.set(-250, 250, -250);
scene.add(box);

// cylinder

// what we see
var time = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    var t = time.getElapsedTime();

    ball.rotation.set(0, 1*t, 0);
    box.rotation.set(0, -1*t, 0);

    renderer.render(scene, camera);
}

animate();