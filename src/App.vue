<template>
  <div id="app" class="container">
    <header>
      <div>
        <div style="font-style: italic; text-align: center">
          <div
            style="
              display: inline-block;
              width: 180px;
              background-color: red;
              background: url(/img/logo.png) center center no-repeat;
              width: 180px;
              height: 90px;
            "
          ></div>
          <div style="display: inline-block">
            <h1 style="margin: 0 auto 2px; font-size: 42px">
              Sin Trabajo Social
              <small style="font-size: 16px; vertical-align: top">BETA</small>
            </h1>
            <tittle style="font-size: 1.2em; font-weight: bolder"
              >Buscador de Empleo.</tittle
            >
            <br />
            <span style="bottom: -5px; position: relative">
              <a target="_blank" href="https://facebook.com/sintrabajosocial"
                ><img
                  alt="Pagina de Facebook"
                  title="Pagina de Facebook"
                  src="/img/face.png?expires=895784545" /></a
              >&nbsp;
              <a target="_blank" href="https://twitter.com/sintrabsocial"
                ><img
                  alt="Pagina de Twitter"
                  title="Pagina de Twitter"
                  src="/img/twitter.png?expires=895786455" /></a
              >&nbsp;
              <a
                target="_blank"
                href="https://www.instagram.com/sintrabajosocial/"
                ><img
                  alt="Pagina de Intsgram"
                  title="Pagina de Instagram"
                  src="/img/instagram.png?expires=895864541"
              /></a>
            </span>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style>
:root {
  --background: url(/img/fondo.jpg) center top no-repeat repeat;
  --color: rgba(255, 244, 233, 0.8);
  --alto-oferta: 3.2em;
  --color: black;
  --font-family: "Brygada 1918", serif;
}

body {
  background: var(--background);
  background-color: #2d2727;
  font-family: var(--font-family);
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5em;
}
header {
  margin-bottom: 1em;
  border: 6px double rgba(64, 61, 61, 0.677);
  padding: 1em;
}
</style>
