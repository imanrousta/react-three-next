import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

function YellowRing(props) {
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<ringGeometry args={[.2, 2, 32]} />
			<meshPhysicalMaterial
				color={'#F75D02'}
			/>
		</mesh>
	);
}

function BlackRing(props) {
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<ringGeometry args={[2, 8, 128]} />
			<meshPhysicalMaterial
				color={'#040303'}
			/>
		</mesh>
	);
}

function OuterRing(props) {
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<ringGeometry args={[7.8, 8, 128]} />
			<meshPhysicalMaterial
				color={'darkviolet'}
			/>
		</mesh>
	);
}

function Ring(props) {
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<ringGeometry args={[props.inner, props.outer, 128]} />
			<meshPhysicalMaterial
				color={'#green'}
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
			<YellowRing />
			<BlackRing />
			<OuterRing />
			<Ring inner={2.9} outer={3} />
			<Ring inner={4.4} outer={4.5} />
			<Ring inner={5} outer={5.1} />
			<Ring inner={6} outer={6.1} />
			<Ring inner={7} outer={7.1} />
			<Ring inner={7.5} outer={7.6} />
		</>
	);
};

const Rings = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default Rings;

export async function getStaticProps() {
	return {
		props: {
			title: 'Rings',
		},
	};
}
