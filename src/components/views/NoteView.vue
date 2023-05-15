<script setup>
import { useRoute, useRouter, RouterLink } from "vue-router";
import Note from "./Note.vue";

const route = useRoute();

const router = useRouter();

// console.log(route.params)

// console.log(this.ddddd);
</script>

<template>
  <div>
    <div class="p-5">
      <div class="card pb-0 card-shadow">
        <div class="card-header">noteCard.subject</div>
        <div class="card-body">
          <h5 class="card-title">noteCard.topic</h5>
          <p class="card-text">noteCard.note</p>
          <div class="d-flex justify-content-between">
            <!-- <RouterLink to="/note"> -->
              <button @click="router.push('/note')" class="btn btn-dark rounded-5 fs-6 btn-sm" type="button">
                back
              </button>
            <!-- </RouterLink> -->
            <button
              @click="deleteNote"
              class="btn bg-black text-light rounded-5 fs-6 btn-sm"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="my-2 border-top d-flex justify-content-between border-dark">
          <small class="ms-3">
            noteCard.date.getHours() : noteCard.date.getMinutes()
          </small>
          <small class="text-center me-3">
            noteCard.date.getDate() / noteCard.date.getMonth() + 1 /
            noteCard.date.getFullYear()
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
