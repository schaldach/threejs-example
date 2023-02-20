const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const edges = new THREE.EdgesGeometry(geometry);
let line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
scene.add(line);

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function moveCube(deltaX, deltaY) {
    camera.position.x += deltaX;
    camera.position.y += deltaY;
}
const cubeColorButton = document.getElementById('cubeColor')
cubeColorButton.addEventListener('input', function () {
    cube.material = new THREE.MeshBasicMaterial({ color: cubeColorButton.value });
})
const lineColorButton = document.getElementById('lineColor')
lineColorButton.addEventListener('input', function () {
    line.material = new THREE.LineBasicMaterial({ color: lineColorButton.value })
})
function resetCube() {
    camera.position.z = 5
    camera.position.x = 0
    camera.position.y = 0
    scene.remove(cube)
    scene.remove(line)
    let newCubeColor = cubeColorButton.value
    let material = new THREE.MeshBasicMaterial({ color: newCubeColor });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    let newLineColor = lineColorButton.value
    line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: newLineColor }));
    scene.add(line);
}
animate();