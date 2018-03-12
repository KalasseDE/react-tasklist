import React from 'react';
import {
	SortableContainer,
	arrayMove,
} from 'react-sortable-hoc';

import Item from './Item';

import './index.css';

const List = props => {
	const { dragging, items, onChange } = props;

	return <ul className={ `Tasklist ${ dragging ? 'Tasklist--dragging' : '' }` }>
		{ items.map( ( item, index ) =>
			<Item
				key={ item.id || item.label }
				checked={ item.checked }
				disableCheckbox={ item.disabled }
				index={ index }
				label={ item.label }
				onChange={ value => onChange( index, value ) }
			/>
		) }
	</ul>;
};

const SortableList = SortableContainer( List );

export default class Tasklist extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			dragging: null,
		};
	}

	onSortStart = item => {
		this.setState( { dragging: item.index } );
	}

	onSortEnd = change => {
		this.setState( {
			dragging: null,
		} );

		const nextItems = arrayMove( this.props.items, change.oldIndex, change.newIndex );

		this.props.onReorder( nextItems, change.oldIndex, change.newIndex );
	}

	render() {
		const { items } = this.props;

		return <SortableList
			dragging={ this.state.dragging }
			helperClass="Tasklist-Item--dragging"
			lockAxis="y"
			lockToContainerEdges={ true }
			items={ items }
			useDragHandle={ true }
			onChange={ this.props.onChange }
			onSortStart={ this.onSortStart }
			onSortEnd={ this.onSortEnd }
		/>;
	}
}
