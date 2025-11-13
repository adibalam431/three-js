//scene

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100);
camera.position.z=5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color:"red"});
let mesh = new THREE.Mesh(box,material);
mesh.position.x=2
scene.add(mesh);

const canvas = document.querySelector("canvas")
let renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene,camera)