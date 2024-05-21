/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';

/**
 * Create our Slot and Fill components
 */
const { Fill, Slot } = createSlotFill( 'CQLControlsInheritedQuery' );

const CQLControlsInheritedQuery = ( { children } ) => <Fill>{ children }</Fill>;

CQLControlsInheritedQuery.Slot = Slot;

export default CQLControlsInheritedQuery;
