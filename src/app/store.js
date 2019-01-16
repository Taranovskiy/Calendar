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
  }
};
