import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function Sphere(props) {
	const ref = useRef();

	const viewport = useThree();

	useFrame(
		(state, delta) =>
			(ref.current.position.z = ref.current.position.x +=
				0.1 * Math.sin(Date.now() / 250))
	);

	return (
		<mesh {...props} ref={ref}>
			<sphereGeometry args={[2, 64, 32]} />
			<meshPhysicalMaterial color={'darkviolet'} clearcoat={1} roughness={1} />
		</mesh>
	);
}

const R3F = (props) => {
	return (
		<>
			<ambientLight intensity={0.7} />
			<spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Sphere />
			<Sphere position={[0, 3, 1]} />
			<Sphere position={[0, 5, 1]} />
			<Sphere position={[0, -3, 1]} />
			<Sphere position={[2, 0, 3]} />
			<Sphere position={[-2, 0, 2]} />
		</>
	);
};

const AnimateSphere = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default AnimateSphere;

export async function getStaticProps() {
	return {
		props: {
			title: 'Oscilating Spheres',
		},
	};
}
