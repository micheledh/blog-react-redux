import {ActionType, DialogType} from '../actions/actionUtils';

export default function(state = null, action) {
    switch(action.type) {
        case ActionType.OPEN_NEW_POST:
            return {type: DialogType.NEW_POST};
        case ActionType.OPEN_NEW_COMMENT:
            return {type: DialogType.NEW_COMMENT, postId: action.postId};
        case ActionType.CLOSE_DIALOG:
            return null;
        default:
            return state;
    }
}
