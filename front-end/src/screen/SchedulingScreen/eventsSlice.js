import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  institutions: [],
  types: [],
  events: [],
  status: '',
  addOpen: false,
  editOpen: false,
  changeId: -1,
  filterInsitution: '',
  filterActive: '',
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    changeInstitutions(state, action) {
      state.institutions = action.payload;
    },
    changeEvents(state, action) {
      state.events = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeTypes(state, action) {
      state.types = action.payload;
    },
    changeAddOpen(state) {
      state.addOpen = !state.addOpen;
    },
    changeEditOpen(state) {
      state.editOpen = !state.editOpen;
    },
    changeId(state, action) {
      state.changeId = action.payload;
    },
    changeFilterInstitution(state, action) {
      state.filterInsitution = action.payload;
    },
    changeFilterActive(state, action) {
      state.filterActive = action.payload
    }
  },
});

export const { changeEvents, changeInstitutions, changeStatus, changeTypes, changeAddOpen, changeEditOpen, changeId, changeFilterActive, changeFilterInstitution } = eventsSlice.actions;
export default eventsSlice.reducer;