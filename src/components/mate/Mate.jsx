import './Mate.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { onSnapshot, doc, arrayRemove, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

export const Mate = ({ mateId, currUser }) => {
	const [mate, setMate] = useState({});

	useEffect(() => {
		const getMateData = onSnapshot(doc(db, 'users', mateId), (doc) => {
			setMate(doc.data());
		});
		console.log(mateId);
		return () => {
			getMateData();
		};
	}, [mateId]);

	const removeFromMatesList = async () => {
		console.log(currUser);
		console.log(mateId);
		await updateDoc(doc(db, 'users', currUser.uid), {
			matesList: arrayRemove(mateId),
		});
	};

	return (
		<div className="Mate">
			<div className="card">
				<div className="cover-photo">
					<img className="w-100 h-100" src={mate.coverURL} alt="coverPhoto" />
				</div>
				<div className="profile-photo text-center">
					<img src={mate.photoURL} alt="profilePhoto" />
				</div>
				<div className="text-wrapper text-center">
					<Link to={`/eduMates/profile/${mate.displayName}/${mate.uid}`}>
						<p className="fw-bold">{mate.displayName}</p>
					</Link>

					<p className="description">{mate.description}</p>
				</div>
				<div className="text-center mb-4 mt-3">
					<button className="btn btn-outline-danger" onClick={removeFromMatesList}>
						Remove from list
					</button>
				</div>
			</div>
		</div>
	);
};