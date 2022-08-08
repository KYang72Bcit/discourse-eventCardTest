import Component from "@ember/component";

// const months = [
//   "January","February","March","April","May","June",
//   "July","August","September","October","November","December",];

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    fetch(`/c/static/14.json`)
      .then((response) => response.json())
      .then(data => data.topic_list.topics)
      .then(filteredEvents => {
        console.log(filteredEvents);
        // const reorderedEvents = filteredEvents.sort((a, b) => a.date - b.date).slice(0, 3);
        this.set("events", filteredEvents);
      });

      this.set("name", "hello world");

  },
});