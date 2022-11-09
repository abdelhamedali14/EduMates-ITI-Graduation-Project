import React, { useContext, useEffect, useRef } from 'react';
import { BsBoxArrowInDown } from 'react-icons/bs';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';

export const Message = ({ message }) => {
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);
	const ref = useRef();

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const getTimeDiff = () => {
		if (message.date) {
			const diff = new Date() - message.date.toDate();
			var days = Math.floor(diff / 86400000); // days
			var hours = Math.floor((diff % 86400000) / 3600000); // hours
			var mins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
			return days > 0 ? (days === 1 ? `Yesterday` : `${days} day ago`) : hours > 0 ? (hours === 1 ? `Last hour` : `${hours} hrs ago`) : mins > 1 ? `${mins} mins ago` : `Just Now`;
		}
	};
	if (message.file) console.log(message.file);
	return (
		<div ref={ref} className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
			<div className="messageInfo">
				<img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="ProfilePic" />
			</div>
			<div className="messageContent">
				{message.text && <p>{message.text}</p>}
				{message.img && <img src={message.img} alt="SentPic" />}
				{message.file && (
					// <a href={message.file} download>
					// 	<BsBoxArrowInDown />
					// 	Download Please!
					// </a>
					<iframe src={message.file} width="100%" height="500px"></iframe>
				)}
				{message.video && (
					<video width="100%" controls>
						<source src={message.video} type="" />
						Your browser does not support HTML video.
					</video>
				)}
				<span className="d-block text-muted">{getTimeDiff()}</span>
			</div>
		</div>
	);
};