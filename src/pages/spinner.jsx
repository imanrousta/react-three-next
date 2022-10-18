import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function Circle(props) {
	const ref = useRef();

	useFrame((state, delta) => {
		let theta = 100 * (Date.now() / 1000);

		ref.current.position.x = 5.75 * Math.sin((theta * Math.PI) / 180);

		ref.current.position.y = Math.sqrt(
			33.0625 - Math.pow(ref.current.position.x, 2)
		);
	});

	return (
		<mesh {...props} ref={ref}>
			<circleGeometry args={[1.25, 32]} />
			<meshPhysicalMaterial color={'#854f1d'} />
		</mesh>
	);
}

function SecondCircle(props) {
	const ref = useRef();

	useFrame((state, delta) => {
		let theta = 100 * (Date.now() / 1000);

		ref.current.position.x = -5.75 * Math.sin((theta * Math.PI) / 180);

		ref.current.position.y = -Math.sqrt(
			33.0625 - Math.pow(ref.current.position.x, 2)
		);
	});

	return (
		<mesh {...props} ref={ref}>
			<circleGeometry args={[1.25, 32]} />
			<meshPhysicalMaterial color={'#854f1d'} />
		</mesh>
	);
}

function ThirdCircle(props) {
	const ref = useRef();

	useFrame((state, delta) => {
		let theta = 100 * (Date.now() / 1000);

		ref.current.position.x = -5.75 * Math.sin((theta * Math.PI) / 180);
	});

	return (
		<mesh {...props} ref={ref}>
			<circleGeometry args={[1.25, 32]} />
			<meshPhysicalMaterial color={'#854f1d'} />
		</mesh>
	);
}

function FourthCircle(props) {
	const ref = useRef();

	useFrame((state, delta) => {
		let theta = 100 * (Date.now() / 1000);

		ref.current.position.y = 5.75 * Math.sin((theta * Math.PI) / 180);
	});

	return (
		<mesh {...props} ref={ref}>
			<circleGeometry args={[1.25, 32]} />
			<meshPhysicalMaterial color={'#854f1d'} />
		</mesh>
	);
}

function Ring(props) {
	const ref = useRef();

	return (
		<mesh {...props} ref={ref}>
			<ringGeometry args={[props.inner, props.outer, 128]} />
			<meshPhysicalMaterial color={'#green'} />
		</mesh>
	);
}

const R3F = (props) => {
	return (
		<>
			<ambientLight intensity={0.7} />
			<spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Ring inner={4.5} outer={7} />
			<Circle position={[5.75, 0, 0]} />
			<SecondCircle position={[-5.75, 0, 0]} />
			<ThirdCircle position={[-5.75, 0, 0]} />
			<FourthCircle position={[0, 5.75, 0]} />
		</>
	);
};

const Spinner = () => {
	return (
		<>
			<R3F r3f />
		</>
	);
};

export default Spinner;

export async function getStaticProps() {
	return {
		props: {
			title: 'Spinner',
		},
	};
}
