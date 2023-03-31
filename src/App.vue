
<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="container">
      <img class="img-titre" src="./assets/logo3.png" alt="logo Genshin" />
      <div class="barre-separation" style=""></div>
      <router-view />
      <div class="barre-separation" style=""></div>
      <footer>
        <img
          class="img-footer"
          src="./assets/logofooter.png"
          alt="logo Genshin"
        />
      </footer>
    </div>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-image: url(https://images5.alphacoders.com/112/1123013.jpg);
  background-size: 1920px 1080px;
  background-attachment: fixed;
  background-blend-mode: multiply;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img-titre {
  max-width: 10cm;
  display: block;
  margin: 0 auto;
}
.img-footer {
  max-width: 3cm;
  margin-top: 10cm;
}

.card {
  height: 300px;
}

.container {
  background: linear-gradient(rgb(25, 25, 112), rgb(2, 1, 32));
  background-blend-mode: darken;
}

.barre-separation {
  border-top: 3px solid RGB(205, 185, 24);
  padding-top: 5px;
  border-radius: 100%;
}
</style>
