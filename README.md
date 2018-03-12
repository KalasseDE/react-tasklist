# react-tasklist

Simple task lists in React.

![Demo GIF](https://user-images.githubusercontent.com/21655/37268389-620dc798-2611-11e8-91bf-8b257b4f814a.gif)

## Installation

```sh
npm install --save @humanmade/react-tasklist
```

## Usage

```js
import Tasklist from '@humanmade/react-tasklist';

class MyComponent extends React.Component {
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
		const { items } = this.state;

		return <Tasklist
			items={ items }
			onChange={ this.onChange }
			onReorder={ items => this.setState( { items } ) }
		/>
	}
```

## Props API

### `items`

A sorted list of items to display on the list. Each item is an object with the following properties:

* `label` (required, `string|ReactElement`): Label for the item. May be a React element.
* `checked` (required, `boolean`): Checkbox state.
* `disabled` (`boolean`, default `false`): Is the checkbox disabled?
* `id` (`string`, default `label`): Unique ID for the item. Value of `label` by default.


### `onChange`

`( index: Number, checked: Boolean ) => void`

Callback function for when the checked state of an item changes. Passed following parameters:

* `index` (`Number`): Index of the item which changed.
* `checked` (`Boolean`): True if the new state is checked, false if the new state is unchecked.


### `onReorder`

`( items: Array, oldIndex: Number, newIndex: Number ) => void`

Callback function for when items are reordered. This receives the reordered items for convenience, but you can use the `oldIndex` and `newIndex` parameters to manually reorder your items if you'd prefer.

Passed following parameters:

* `items` (`Array`): Reordered list of items.
* `oldIndex` (`Number`): Index of the item in the original array.
* `newIndex` (`Number`): Index of the item in the new array.
