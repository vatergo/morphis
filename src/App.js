import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Cell } from '@vkontakte/vkui';

import Home from './panels/Home';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home',
			value: []
		};
		this.go = this.go.bind(this);
	}

	go() {
		let word = document.querySelector('input').value;
		if (word.length !== 0) {
			fetch(`https://morphis-server.herokuapp.com/api/${word}`, { method: 'GET' })
				.then(res => res.json())
				.then(data => {
					this.setState({
						value: data
					});
					console.log(data);
				});
		}
	};

	render() {
		const list = this.state.value
			.map(function (item, i) {
				return <Cell multiline key={i}>Часть речи: {item['Часть речи']}, Прочее: {item['Прочее']}</Cell>
			});
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" go={this.go} list={list} />
			</View>
		);
	}
}

export default App;
