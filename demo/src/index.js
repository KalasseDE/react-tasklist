import React from 'react';
import ReactDOM from 'react-dom';

import Tasklist from '../../src';

import styles from './index.css';

class Demo extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			items: [
				{
					label: 'Item one',
					checked: false,
				},
				{
					label: 'Item two',
					checked: false,
				},
				{
					label: 'Item three',
					checked: true,
				},
			],
		};
	}

	onChange = ( index, checked ) => {
		const { items } = this.state;

		this.setState( {
			items: [
				...items.slice( 0, index ),
				{ ...items[ index ], checked },
				...items.slice( index + 1 )
			],
		} );
	}

	render() {
		return <div id={ styles.demo }>
			<h1>react-tasklists Demo</h1>
			<Tasklist
				items={ this.state.items }
				onChange={ this.onChange }
				onReorder={ items => this.setState( { items } ) }
			/>
		</div>;
	}
}

ReactDOM.render( <Demo/>, document.getElementById( 'demo' ) );
