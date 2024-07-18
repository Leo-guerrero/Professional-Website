import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera);

const geometry = new THREE.IcosahedronGeometry( 18, 1);  
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );

//---------------------

//---------------------

renderer.shadowMap.enabled = false;


function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.x += 0.001;
	sphere.rotation.y += 0.001;
	sphere.rotation.z += 0.003;
	renderer.render( scene, camera );

}

animate();

window.addEventListener('resize', onWindowResize, false);
onWindowResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};


