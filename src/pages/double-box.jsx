import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function Box(props) {
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
			<boxGeometry args={[1, 5, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

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
			<sphereGeometry args={[1, 32, 16]} />
			<meshPhysicalMaterial color={hovered ? 'darkviolet' : 'green'} />
		</mesh>
	);
}

const R3F = (props) => {

	return (
		<>
			<ambientLight intensity={0.7} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Box position={[0, 0, 0]} />
			<Sphere position={[0, 0, 0]} />
		</>
	);
};

const DoubleBox = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default DoubleBox;

export async function getStaticProps() {
	return {
		props: {
			title: 'Double Box',
		},
	};
}
