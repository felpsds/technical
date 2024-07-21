import { toast } from "react-toastify";

const { default: store } = require("@/redux/store");
const { changeInstitutions, changeTypes, changeEvents } = require("@/screen/SchedulingScreen/eventsSlice");
const { default: api } = require("@/utils/api");

const getInstitutions = async () => {
  try {
    const { data, status } = await api.get("/list/institutions");
    if (status === 200) {
      store.dispatch(changeInstitutions(data));
    }
  } catch (error) {
    console.error(error);
    store.dispatch(changeInstitutions([]));
  }
}

const getTypes = async () => {
  try {
    const { data, status } = await api.get("/list/types");
    if (status === 200) {
      store.dispatch(changeTypes(data));
    }
  } catch (error) {
    console.error(error);
    store.dispatch(changeTypes([]));
  }
}

const getEvents = async () => {
  try {
    const { data, status } = await api.get("/list/events");
    if (status === 200) {
      store.dispatch(changeEvents(data));
    }
  } catch (error) {
    console.error(error);
    store.dispatch(changeEvents([]));
  }
}

const createEvent = async (event) => {
  let id = toast.loading("Adicionando evento...");
  try {
    const { status } = await api.post("/event/new", event);
    if (status === 201) {
      toast.update(id, {
        render: "Evento adicionado com sucesso!",
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 3000
      });
    }
  } catch (error) {
    toast.update("Erro ao adicionar evento!", {
      type: toast.TYPE.ERROR,
      isLoading: false,
      autoClose: 3000
    });
  }
}

const updateEvent = async (event) => {
  let id = toast.loading("Atualizando evento...");
  try {
    const { status } = await api.put("/event/update", event);
    if (status === 200) {
      toast.update(id, {
        render: "Evento atualizado com sucesso!",
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 3000
      });
    }
  } catch (error) {
    toast.update(id, {
      render: "Erro ao atualizar evento!",
      type: toast.TYPE.ERROR,
      isLoading: false,
      autoClose: 3000
    });
  } finally {
    getEvents();
  }
}

const deleteEvent = async (id) => {
  let idToast = toast.loading("Deletando evento...");
  try {
    const { status } = await api.delete(`/event/delete/${id}`);
    if (status === 204) {
      toast.update(idToast, {
        render: "Evento deletado com sucesso!",
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 3000
      });
    }
  } catch (error) {
    toast.update(idToast, {
      render: "Erro ao deletar evento!",
      type: toast.TYPE.ERROR,
      isLoading: false,
      autoClose: 3000
    });
  } finally {
    getEvents();
  }
}

const getEventsFilter = async () => {
  let id = toast.loading("Filtrando eventos...");
  try {
    const { data, status } = await api.get("/list/eventsFilter", {
      params: {
        institution: store.getState().events.filterInsitution,
        active: store.getState().events.filterActive,
      }
    });
    if (status === 200) {
      store.dispatch(changeEvents(data));
      toast.update(id, {
        render: "Eventos filtrados com sucesso!",
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 3000
      });
    }
  } catch (error) {
    console.error(error);
    store.dispatch(changeEvents([]));
    toast.update(id, {
      render: "Erro ao filtrar eventos!",
      type: toast.TYPE.ERROR,
      isLoading: false,
      autoClose: 3000
    });
  }
}

export {
  getInstitutions,
  getTypes,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsFilter
}