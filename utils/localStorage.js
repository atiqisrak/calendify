export const loadEventsFromStorage = () => {
  if (typeof window !== "undefined") {
    const events = localStorage.getItem("events");
    return events ? JSON.parse(events) : [];
  }
  return [];
};

export const saveEventsToStorage = (events) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("events", JSON.stringify(events));
  }
};
