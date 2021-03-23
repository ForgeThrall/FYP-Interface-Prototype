import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initialData from './initialData';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
	state = initialData;

	onDragEnd = result => {
		// const { destination, source, draggableId } = result;

		/* todo */
	}

	render() { return (
		<DragDropContext onDragEnd={this.onDragEnd}>
			<div className="gridContainer">
				<div className="ribbon">This is the ribbon</div>
				<div className="courses">Course list here</div>
				{this.state.semesters.map((sem, index) => {
					return <Column key={sem.id} sem={sem} courses={this.state.courses} />
				})}
			</div>
		</DragDropContext>
	)}
}

ReactDOM.render(<App />, document.getElementById('root'));
