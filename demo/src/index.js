import React from 'react';
import ReactDOM from 'react-dom';

import Tasklist from '../../src';

import '../../css/index.css';

import styles from './index.css';

class Demo extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			enabled: true,
			items: [
				{
					label: 'Item one',
					checked: false,
				},
				{
					label: 'Item two',
					checked: false,
					disabled: true,
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
			<h1>react-tasklist Demo</h1>
			<Tasklist
				disableSort={ ! this.state.enabled }
				items={ this.state.items }
				onChange={ this.onChange }
				onReorder={ items => this.setState( { items } ) }
			/>
			<label>
				<input
					checked={ this.state.enabled }
					type="checkbox"
					onChange={ e => this.setState( { enabled: e.target.checked } ) }
				/>

				Enable sorting
			</label>
		</div>;
	}
}

ReactDOM.render( <Demo/>, document.getElementById( 'demo' ) );
