<template>
  <div class="events">
    <h1>Events for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id:5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time:'12:00',
          petsAllowed: true,
          organizer: 'Kat Lady'
        },
        {
          id:5928102,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time:'12:00',
          petsAllowed: true,
          organizer: 'Kat Lady'
        },
        {
          id:5928103,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time:'12:00',
          petsAllowed: true,
          organizer: 'Kat Lady'
        }
      ]
    }
  },
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
