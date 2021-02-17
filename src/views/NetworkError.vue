<!-- Component to display Network errors -->
<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>

<!-- @click="$router.go(-1)"= go to prev page-->
<!-- @click="$router.go(-1)"= go to prev next-->