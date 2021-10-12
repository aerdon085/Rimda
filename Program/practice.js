// scene
var scene = new THREE.Scene();
var flat = {flatShading: true};
var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);
// camera
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
scene.add(camera);
// renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CODE HERE
var shape = new THREE.SphereGeometry(200, 10, 10);
var cover = new THREE.MeshNormalMaterial(flat);
var ball = new THREE.Mesh(shape, cover);
scene.add(ball);

// what we see
renderer.render(scene, camera);