import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Input, Button, Group, Div, PanelHeader, List } from '@vkontakte/vkui';

const Home = ({ id, go, list }) => (
	<Panel id={id}>
		<PanelHeader>Morphis</PanelHeader>
		<Group title="Морфологический разбор слова">
			<Div>
				<Input type="text" placeholder="Введите слово" />
				<Button size="xl" level="2" onClick={go}>Искать</Button>
			</Div>
		</Group>
		{list.length !== 0 && <Group title="Результат">
			<List>
				{list}
			</List>
		</Group>}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
