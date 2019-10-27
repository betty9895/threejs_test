var camera, scene, renderer;

var num=50;
var geo=new Array(num);
var mesh=new Array(num);

init();
animate();

function fibonacci(){

}

function modelIncrement(){
	for(var i=0;i<num-1;i++){
		geo[i]=new THREE.BoxGeometry(0.05,0.05,0.02*(i+1));
		mesh[i]= new THREE.Mesh( geo[i], mat );
		scene.add(mesh[i]);
		mesh[i].position.set(0, 1-0.05*i, -1);
		console.log(mesh[i].position)
	}
}

function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 1;
	
	mat = new THREE.MeshNormalMaterial();
	modelIncrement();
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );
	for(var i=0;i<num-1;i++){
		mesh[i].rotation.y += (i+1)/1000;
	}
	renderer.render( scene, camera );

}