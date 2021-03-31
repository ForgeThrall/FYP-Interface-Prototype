import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initialData from './initialData';
import Column from './column';
import logo from './UCM logo darkmode.png';
import userIcon from './user.svg';
import { DragDropContext } from 'react-beautiful-dnd';

const generateState = () => {
	const state = initialData;
	// state.semesters.courselist.courseIds = Object.keys(state.courses);

	return state;
}

class App extends React.PureComponent {
	state = generateState();

	onDragEnd = result => {
		const { destination, source, draggableId } = result;

		if(!destination) return;

		const sourceSem = this.state.semesters[source.droppableId];
		const destSem = this.state.semesters[destination.droppableId];
		const newSourceCourseIds = Array.from(sourceSem.courseIds);

		newSourceCourseIds.splice(source.index, 1);

		// Allows for reording within the same column
		const newDestCourseIds =
			(destination.droppableId === source.droppableId) ?
			newSourceCourseIds :
			Array.from(destSem.courseIds);

		newDestCourseIds.splice(destination.index, 0, draggableId);

		const newState = this.state;
		newState.semesters[sourceSem.id].courseIds = newSourceCourseIds;
		newState.semesters[destSem.id].courseIds = newDestCourseIds;

		this.setState(newState);
	}

	render() { return (
		<DragDropContext onDragEnd={this.onDragEnd}>
			<div className="gridContainer">
				<div className="ribbon">
					<img src={logo} alt="UCM Logo" height='100%'/>
					<div className="ribbonFiller"/>
					<div style={{'padding': '8px'}}>John Doe</div>
					<img src={userIcon} alt="User Icon" height='80%' style={{'-webkit-filter': 'invert(1)'}}/>
				</div>
				{/*<Courselist courseIds={this.state.availableCourses} courses={this.state.courses} />*/}
				{Object.values(this.state.semesters).map((sem, index) => {
					return <Column key={sem.id} sem={sem} courses={this.state.courses} />
				})}
				<div className="catalog">Major catalog placeholder</div>
			</div>
		</DragDropContext>
	)}
}

ReactDOM.render(<App />, document.getElementById('root'));
