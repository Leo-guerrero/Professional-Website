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
const geometry2 = new THREE.OctahedronGeometry( 14, 0 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere2 = new THREE.Mesh( geometry2, material2 ); scene.add( sphere2 );

sphere2.position.x = -72;
sphere2.position.z = -40;
sphere2.position.y = -20;

//------------------------
const geometry3 = new THREE.TetrahedronGeometry( 5, 0 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere3 = new THREE.Mesh( geometry3, material3 ); scene.add( sphere3 );

sphere3.position.x = 22;
sphere3.position.z = 10;
sphere3.position.y = 5;
//---------------------

renderer.shadowMap.enabled = false;


function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.x += 0.001;
	sphere.rotation.y += 0.001;
	sphere.rotation.z += 0.003;

	sphere2.rotation.x += 0.001;
	sphere2.rotation.y += 0.001;
	sphere2.rotation.z += 0.008;

	sphere3.rotation.x += 0.008;
	sphere3.rotation.y += 0.001;
	sphere3.rotation.z += 0.005;
	renderer.render( scene, camera );
}

animate();

//----------------------------------------

const canvas = document.querySelector('#bg');

function getWidth() {
	return parseInt(window.getComputedStyle(canvas).width);
  }
  
  function getHeight() {
	return parseInt(window.getComputedStyle(canvas).height);
  }

/*
addEventListener("resize",() => {
    camera.aspect = getWidth() / getHeight();
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
},false);
*/

window.addEventListener("resize", () => {
	camera.aspect = getWidth() / getHeight();
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
})


const loop = () => {
	renderer.render(scene, camera)
	window.requestAnimationFrame(loop)
}
loop();