import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

const Cuboid = () => {
	const ref = useRef(null);

	return (
		<mesh ref={ref}>
			<boxBufferGeometry args={[6, 3, 6]} />
			<meshPhysicalMaterial color={'#FF9A0F'} />
		</mesh>
	);
};

const Cylinder = (props) => {
	const ref = useRef(null);

	return (
		<mesh {...props} ref={ref}>
			<cylinderGeometry args={[1, 1, 2,32]} />
			<meshPhysicalMaterial color={'#FF9A0F'} />
		</mesh>
	);
};

const R3F = (props) => {
	return (
		<>
			<ambientLight intensity={0.7} />
			<spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Cuboid />
			<Cylinder position={[1.5, 2, 1.5]} />
			<Cylinder position={[1.5, 2, -1.5]} />
			<Cylinder position={[-1.5, 2, 1.5]} />
			<Cylinder position={[-1.5, 2, -1.5]} />
		</>
	);
};

const Lego = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default Lego;

export async function getStaticProps() {
	return {
		props: {
			title: 'Lego',
		},
	};
}
