const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function moveCubeLeft() {
    camera.position.x += 0.1;
}
const colorButton = document.getElementById('cubeColor')
colorButton.addEventListener('input', function(){
    cube.material = new THREE.MeshBasicMaterial({ color: colorButton.value });
})

function resetCube() {
    scene.remove(cube)
    let newColor = colorButton.value
    const material = new THREE.MeshBasicMaterial({ color: newColor });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}
animate();