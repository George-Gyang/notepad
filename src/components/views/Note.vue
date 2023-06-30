<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

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

const router = useRouter();

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

const deleteNote = (id) => {
  const index = noteCards.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    noteCards.value.splice(index, 1);
  }
};

// const showNote = (id) => {
//   const item = noteCards.value.findIndex((note) => note.id === id);
//   console.log(item)
//   if (item !== -1) {
//     router.push(`/note/${item}`);
//   }
// };

// this.ddddd = noteCards;
</script>

<template>
  <div class="container">
    <div class="">
      <h1 class="text-center text-success fw-bolder mt-4 animate_charcter">Jotting App</h1>
      <div class="d-flex justify-content-between align-items-center p-2">
        <p class="text-black fw-bold">Always take note as you study</p>

        <!-- conditional alert -->
        <button
          @click="dismissModal = true"
          class="btn round_btn rounded-circle btn-success h1"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5 9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z"
              /></svg
          ></span>
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
          class="card pb-0 card-shadow"
        >
          <div class="card-header">{{ noteCard.subject }}</div>
          <div class="card-body">
            <h5 class="card-title">{{ noteCard.topic }}</h5>
            <p class="card-text">
              {{ noteCard.note }}
            </p>
            <div class="d-flex justify-content-between">
              <!-- <RouterLink :to="`/note/${noteCard.id}`"> -->
              <RouterLink
                :to="`note/${noteCard.id}`"
                class="rounded-5 fs-6 btn-sm"
              >
                View
              </RouterLink>
              <!-- </RouterLink> -->
              <button
                @click="deleteNote(noteCard.id)"
                class="btn bg-black text-light rounded-5 fs-6 btn-sm"
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
              >{{ noteCard.date.getHours() }} :
              {{ noteCard.date.getMinutes() }}</small
            >
            <small class="text-center me-3">
              {{ noteCard.date.getDate() }}/{{
                noteCard.date.getMonth() + 1
              }}/{{ noteCard.date.getFullYear() }}</small
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

<style scoped>
.round_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
}
.animate_charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #000000 0%,
    #277927 20%,
    #79eb79 40%,
    #44107a 60%,
    #ff1361 80%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: block;
      font-size: 2rem;
}

@keyframes textclip {
  to {
    background-position: 70% center;
  }
}


.h1 {
  margin: 0;
  z-index: 1;
  font-family: "Teko", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  animation: glow 1s ease-in-out infinite alternate;
  text-align: center;
}

@keyframes glow {
  from {
    box-shadow: 0 0 20px #212529;
  }
  to {
    box-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
  }
  to {
    box-shadow: 0 0 30px #ffc107, 0 0 10px #4dbbc7;
  }
}
</style>
