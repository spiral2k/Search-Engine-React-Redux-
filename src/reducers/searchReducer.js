import actions from '../actions/index';
import config from '../config.json';

export default (state={}, action) => {
  switch (action.type) {
    case actions.PIXABAY_FETCHING: {
        return {...state, pixabay: { fetching:true, fetched: false, error: false } };
    }
    case actions.PIXABAY_FETCHED: {
        return {...state, pixabay: { fetching:false, fetched: true, error: false } };
    }
    case actions.PIXABAY_ERROR: {
        return {...state, pixabay: { fetching:false, fetched: false, error: true } };
    }
    case actions.FLICKR_FETCHING: {
        return {...state, flickr: { fetching:true, fetched: false, error: false } };
    }
    case actions.FLICKR_FETCHED: {
        return {...state, flickr: { fetching:false, fetched: true, error: false } };
    }
    case actions.FLICKR_ERROR: {
        return {...state, flickr: { fetching:false, fetched: false, error: true } };
    }
    case actions.ADD_IMAGES: {
            return {...state, imagesArr: [...state.imagesArr, ...action.payload] };    
    }
    case actions.ADD_HISTORY_ITEM: {
            return {...state, history: [action.payload, ...state.history] };    
    }
    case actions.NEW_SEARCH: {
            return {...state, imagesArr: [], imageRenderCount: config.renderCount, pixabay: { fetching: false, fetched: false, error: false }, flickr: { fetching: false, fetched: false, error: false } };    
    }
    case actions.CLEAR_HISTORY: {
        return {...state, history: []}
    }
    case actions.BACK_HOME: {
        return {...state, imagesArr: [], imageRenderCount: config.renderCount, pixabay: { fetching: false, fetched: false, error: false }, flickr: { fetching: false, fetched: false, error: false } };
    }
    case actions.ADD_RENDER_COUNT: {
        if((state.imageRenderCount + action.payload) > state.imagesArr.length)
            return { ...state, imageRenderCount: state.imagesArr.length }   

        return { ...state, imageRenderCount: state.imageRenderCount + action.payload }
    }

    default: 
        return state;
    }
}