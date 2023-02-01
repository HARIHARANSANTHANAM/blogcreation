<template>
  <div class="column">
    <button @click="vote(1)" class="btn btn-info"><i class="fa-sharp fa-solid fa-thumbs-up"></i></button>
    <p>{{ initialCounter }}</p>
    <button @click="vote(-1)" class="btn btn-dark"><i class="fa-sharp fa-solid fa-thumbs-down"></i></button>
  </div>
</template>

<script src="./js/voting"/>
<style scoped>
.column{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>