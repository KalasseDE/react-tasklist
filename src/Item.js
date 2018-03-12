import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import './Item.css';

const Handle = SortableHandle( () =>
	<span className="Tasklist-Item_handle">
		<svg viewBox="0 0 15 15">
			<rect
				height="3"
				width="15"
				x="0"
				y="0"
			/>
			<rect
				height="3"
				width="15"
				x="0"
				y="6"
			/>
			<rect
				height="3"
				width="15"
				x="0"
				y="12"
			/>
		</svg>
	</span>
);

export class Item extends React.Component {
	render() {
		const { checked, disableCheckbox, disableSort, label, onChange } = this.props;

		return <li key={ label } className={ `Tasklist-Item ${ disableSort ? 'Tasklist-Item--sort-disabled' : '' }` }>
			{ disableSort || <Handle /> }
			<label>
				<input
					checked={ checked }
					disabled={ !! disableCheckbox }
					type="checkbox"
					onChange={ e => onChange( e.target.checked ) }
				/>
				{ label }
			</label>
		</li>;
	}
}

export default SortableElement( Item );
