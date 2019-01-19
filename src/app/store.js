import { seedData } from './seed';

export const store = {
  state: {
    days: seedData
  },

  getActiveDay() {
    return this.state.days.find(day => day.active);
  },

  setActiveDay(dayId) {
    this.state.days.forEach(day => {
      day.active = day.id === dayId ? true : false;
    });
  },

  submitEvent(details) {
    const activeDay = this.getActiveDay();

    activeDay.events.push({ details, edit: false });
  },

  editEvent(dayId, eventIndex) {
    const targetDay = this.state.days.find(day => day.id === dayId);
    const targetEvent = targetDay.events[eventIndex];
    
    targetEvent.edit = true;
  },
  
  updateEvent(dayId, eventIndex, newEventDetails) {
    const targetDay = this.state.days.find(day => day.id === dayId);
    const targetEvent = targetDay.events[eventIndex];

    targetEvent.details = newEventDetails;
    targetEvent.edit = false;
  },
};
