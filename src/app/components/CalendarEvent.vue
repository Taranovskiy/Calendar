<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon" @click="editEvent()"></i>
        <i class="fa fa-trash-o delete-icon" @click="deleteEvent()"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.detail" v-model="newEventDetails">
      <div class="has-text-centered icons">
        <i class="fa fa-check" @click="updateEvent()"></i>
      </div>

    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CalendarEvent",

  data() {
    return {
      newEventDetails: ''
    };
  },

  props: ["event", "day", "index"],

  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `backgroundColor: ${randomColor}`;
    }
  },

  methods: {
    editEvent() {
      store.editEvent(this.day.id, this.index);
    },

    updateEvent() {
      store.updateEvent(this.day.id, this.index, this.newEventDetails);
      this.newEventDetails = '';
    },

    deleteEvent() {
      store.deleteEvent(this.day.id, this.index, this.newEventDetails);
    }
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
