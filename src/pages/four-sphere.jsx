import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function Sphere(props) {
	const ref = useRef();

	const [hovered, setHovered] = useState(false);

	useFrame(
		(state, delta) => (ref.current.rotation.z = ref.current.rotation.x += 0.01)
	);

	useFrame(
		(state, delta) => (ref.current.rotation.y = ref.current.rotation.x += 0.01)
	);

	return (
		<mesh
			{...props}
			ref={ref}
			scale={hovered ? 1.5 : 1}
			onPointerOver={(event) => setHovered(true)}
			onPointerOut={(event) => setHovered(false)}
		>
			<sphereGeometry args={[2, 64, 32]} />
			<meshPhysicalMaterial
				color={hovered ? 'darkviolet' : 'green'}
				clearcoat={1}
				roughness={1}
			/>
		</mesh>
	);
}

const R3F = (props) => {

	return (
		<>
			<ambientLight intensity={0.7} />
			<spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Sphere position={[4, 4, 0]} />
			<Sphere position={[-4, -4, 0]} />
			<Sphere position={[-4, 4, 0]} />
			<Sphere position={[+4, -4, 0]} />
		</>
	);
};

const FourSphere = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default FourSphere;

export async function getStaticProps() {
	return {
		props: {
			title: 'Four Sphere',
		},
	};
}
