<script setup>
import { ref } from "vue";

const datas = [
  {
    id: 1,
    subject: "argiculture",
    title: "Animal husbandry",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 2,
    subject: "Mathamatics",
    title: "Fraction",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 3,
    subject: "English",
    title: "Parts of speech",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 4,
    subject: "Commerce",
    title: "Factors of Production",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 5,
    subject: "Economics",
    title: "Demand and Supply",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 6,
    subject: "Biology",
    title: "Digestive System",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
  {
    id: 7,
    subject: "Accounting",
    title: "Book Keeping",
    note: "Some quick example text to build on the card title and make up thebulk of the card's content.",
  },
];

const subject = ref("");
const topic = ref("");
const note = ref("");
const alert = ref("");

const noteCards = ref([]);

function background() {
  return "hsl(" + Math.random() * 360 + " , 100%, 75%)";
}

const makeNote = () => {
  if (note.value.length < 10 || topic.value < 1 || subject.value < 1) {
    return (alert.value =
      "form is incompletely, or note is less than 10 characters!!!");
  }
  noteCards.value.unshift({
    subject: subject.value,
    topic: topic.value,
    note: note.value,
    id: Math.floor(Math.random() * 1000000),
    backgroundColor: background(),
    date: new Date(),
  });
  subject.value = "";
  topic.value = "";
  note.value = "";
  alert.value = "";
};

// console.log(noteCards.value.splice(noteCard.id, 1))

const deleteNote = () => {
  noteCards.value.splice(noteCards.id, 1);
};
</script>

<template>
  <div class="container">
    <div class="">
      <h1 class="text-center">Jotting App</h1>
      <div class="d-flex justify-content-between p-2">
        <p>Always take note as you study</p>

        <!-- conditional alert -->
        <button
          @click="dismissModal = true"
          class="btn btn-success"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          Add Note
        </button>
      </div>
    </div>
    <div class="container row">
      <div
        v-for="noteCard in noteCards"
        :key="noteCard.id"
        class="p-2 col-md-4"
      >
        <div
          :style="{ backgroundColor: noteCard.backgroundColor }"
          class="card card-shadow"
        >
          <div class="card-header">{{ noteCard.subject }}</div>
          <div class="card-body">
            <h5 class="card-title">{{ noteCard.topic }}</h5>
            <p class="card-text">
              {{ noteCard.note }}
            </p>
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-dark rounded-0 me-2" type="button">
                Edit
              </button>
              <button
                @click="deleteNote"
                class="btn bg-black text-light rounded-0"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            class="my-2 border-top d-flex justify-content-between border-dark"
          >
            <small class="ms-3"
              >{{ noteCard.date.getMinutes() }} :
              {{ noteCard.date.getHours() }}</small
            >
            <small class="text-center me-3">
              {{ noteCard.date.getDay() }}/{{ noteCard.date.getMonth() }}/{{
                noteCard.date.getFullYear()
              }}</small
            >
          </div>
        </div>
      </div>

      <div
        v-if="alert"
        class="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Danger:"
        >
          <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div>{{ alert }}</div>
      </div>
    </div>

    <!-- Modal  -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Make a New Note
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Subject:</label
                >
                <input
                  v-model="subject"
                  type="text"
                  class="form-control form-control-sm"
                  id="recipient-name"
                  name="subject"
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Topic:</label
                >
                <input
                  v-model="topic"
                  type="text"
                  class="form-control form-control-sm"
                  id="recipient-name"
                  name="topic"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Note:</label>
                <textarea
                  v-model.trim="note"
                  class="form-control"
                  id="message-text"
                  name="newNote"
                ></textarea>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  @click.prevent="makeNote"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
