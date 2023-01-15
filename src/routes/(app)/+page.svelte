<script>
    export let data;
</script>

<h1 class="text-3xl font-bold p-2 text-center">
    Welcome, {data.user.name}!
  </h1>
  <div class="buttons">
  <button href="/login" class="btn btn-primary m-2">Login</button>
  <button href="/register" class="btn btn-primary m-2">Register</button>
</div>

<style>
    .buttons {
        text-align: center;
    }
    button {
        min-width: 100px;
    }

</style>