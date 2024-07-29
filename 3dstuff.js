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

const shpere_size = 25;

const geometry = new THREE.IcosahedronGeometry( shpere_size, 1);  
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );

sphere.position.x = 22;
sphere.position.y = -10;

//---------------------

const geometry2 = new THREE.OctahedronGeometry( 16, 0 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere2 = new THREE.Mesh( geometry2, material2 ); scene.add( sphere2 );

sphere2.position.x = -18;
sphere2.position.z = -48;
sphere2.position.y = 30;

//------------------------
const geometry3 = new THREE.TetrahedronGeometry( 5, 0 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ); 
const sphere3 = new THREE.Mesh( geometry3, material3 ); scene.add( sphere3 );

sphere3.position.x = -22;
sphere3.position.z = 10;
sphere3.position.y = -8;
//---------------------

renderer.shadowMap.enabled = false;



const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {
	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );
}

const geometry4 = new THREE.IcosahedronGeometry( 9, 6);  
geometry4.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
const material4 = new THREE.PointsMaterial( { color: 0x93D3FF } );
const points = new THREE.Points( geometry4, material4 ); 
scene.add( points );


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

	points.rotation.x += 0.0001;
	points.rotation.y += 0.001;
	points.rotation.z += 0.001;

	renderer.render( scene, camera );
}

animate();

//----------------------------------------


window.addEventListener( 'resize', onWindowResize );


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}


addEventListener('scroll', scrollAnimate);

function scrollAnimate(){
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	sphere.rotation.z += 0.01;

	sphere2.rotation.x += 0.01;
	sphere2.rotation.y += 0.01;
	sphere2.rotation.z += 0.01;

	sphere3.rotation.x += 0.01;
	sphere3.rotation.y += 0.01;
	sphere3.rotation.z += 0.01;
}



const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
	sphere2.position.x = -60;
	sphere2.position.z = -48;
	sphere2.position.y = 30;

}



