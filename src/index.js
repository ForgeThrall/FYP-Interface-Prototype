import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initialData from './initialData';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
	state = initialData;

	onDragEnd = result => { /* todo */ }

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div class="gridContainer">
					<div class="ribbon">This is the ribbon</div>
					<div class="courses">Course list here</div>
					<div class="sem-1">Semester 1</div>
					<div class="sem-2">Semester 2</div>
					<div class="sem-3">Semester 3</div>
					<div class="sem-4">Semester 4</div>
					<div class="sem-5">Semester 5</div>
					<div class="sem-6">Semester 6</div>
					<div class="sem-7">Semester 7</div>
					<div class="sem-8">Semester 8</div>
				</div>
			</DragDropContext>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
