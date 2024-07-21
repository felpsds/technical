import menuSlice from "@/components/Header/menuSlice";
import eventsSlice from "@/screen/SchedulingScreen/eventsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        events: eventsSlice,
    },
});

export default store;