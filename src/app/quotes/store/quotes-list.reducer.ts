import { Quote } from '../models/quote.model';
import * as QuotesListActions from './quotes-list.actions';

const initialState: State = {
  quotes: [
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Mark', lastName: 'Twain' }
    } ),
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Theodore', lastName: 'Dreiser' }
    } ),
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Mark', lastName: 'Twain' }
    } ),
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Mark', lastName: 'Twain' }
    } ),
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Mark', lastName: 'Twain' }
    } ),
    new Quote( {
      description: 'Don\'t cry because it\'s over, smile because it happened',
      author: { firstName: 'Mark', lastName: 'Twain' }
    } ),
  ]
};

export interface State {
  quotes: Quote[];
}

export function quotesListReducer( state = initialState, action: QuotesListActions.QuotesListActions ) {
  switch (action.type) {
    default:
      return state;
  }
}
