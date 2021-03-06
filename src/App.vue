<template>
  <md-app :id="this.$router.currentRoute.name != 'Home' ? 'app' : 'landing'" md-mode="reveal">
    <md-app-toolbar md-elevation="0" id="toolbar" style="background-color: transparent">
      <router-link class="logo" to="/" v-if="this.$router.currentRoute.name != 'Home'">
        <img class="logo" src="@/assets/svg/logo.svg" />
      </router-link>

      <div class="md-toolbar-section-end">
        <span>
          <clickable-address style="margin-top:20px" :eth-address="userAddress" />
        </span>
      </div>
    </md-app-toolbar>

    <md-app-content>
      <router-view />
      <div class="footer">
        <div class="md-layout" style="text-align: center;">
          <div class="md-layout-item">
            <img src="@/assets/svg/logo.svg" alt="logo" />
          </div>
          <div class="md-layout-item">
            <span style="font-size: 16px;">
              Created at EthOnline 2020
            </span>
          </div>
          <div class="md-layout-item">
            <a href="https://twitter.com/mindfulcash" target="_blank"
              ><img class="footer-icon" src="@/assets/svg/icons/twitter.svg" alt="logo"
            /></a>
            <a href="https://github.com/Mindful-Cash/mindful.cash/" target="_blank">
              <img class="footer-icon" src="@/assets/svg/icons/github.svg" alt="logo"
            /></a>
            <a href="https://medium.com/@mindful-cash" target="_blank">
              <img class="footer-icon" src="@/assets/svg/icons/medium.svg" alt="logo"
            /></a>
          </div>
        </div>
      </div>
      <div v-if="userAddress">
        <!-- <mining-transaction /> -->
      </div>
      <div
        style="padding-top: 200px; padding-left: 20px; padding-right: 20px; color: #292929;"
        v-if="!userAddress && this.$router.currentRoute.name != 'Home'"
      >
        <h1>Connect a Web3 wallet to get started</h1>
        <div
          class="md-layout-item"
          v-if="!userAddress"
          style="padding-top: 20px; padding-left: 20px; padding-right: 20px"
        >
          <md-button class="md-raised md-accent connect-button" @click="connectWallet">🦊 Connect Wallet</md-button>
        </div>
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
import MiningTransaction from "@/components/widgets/MiningTransaction";
import ClickableAddress from "@/components/widgets/ClickableAddress";

import { mapActions, mapState } from "vuex";
import router from "@/router";

export default {
  name: "app",
  components: { ClickableAddress, MiningTransaction },
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    ...mapActions(["setUp"]),
    connectWallet() {
      this.setUp();
    },
    goToLanding() {
      router.push({ path: "/landing" });
    }
  },

  computed: {
    ...mapState(["currentNetwork", "userAddress"])
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Inter:400,500,600,700,400italic");
@import url("https://fonts.googleapis.com/css?family=Space+Mono");
@import url("https://fonts.googleapis.com/css?family=Coiny|Rubik");
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@import "@/styles/variables.scss";
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme(
  "default",
  (
    primary: #000023,
    // The primary color of your brand
      accent: #fff,
    // The secondary color of your brand,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  )
);
@import "~vue-material/dist/theme/all"; // Apply the theme

html {
  font-family: -apple-system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: red;
  font-size: 16px;
}

body {
  background: linear-gradient(180deg, #f5feff 0%, #f8f5ff 100%);
}

custom-navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0px auto;
  background: none;
  overflow: visible !important;
}

#landing {
  text-align: center;
  min-height: 100vh;
  max-width: 2024px;
  margin: 0px auto;
  background: none;
  overflow: visible !important;
  margin-top: -75px !important;
}

.md-app-container {
  overflow: visible !important;
}

.md-content {
  padding: 0 !important;
  background: none !important;
  border: none !important;
}

.md-toolbar {
  min-height: 100px !important;
}

.phone-viewport {
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}

nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  cursor: pointer;
}

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.md-theme-default a {
  color: $darkgray;
}

.menu-link {
  margin-top: 50px !important;
  padding: 10px;
  cursor: pointer;
}

.connect-button {
  background: linear-gradient(74.67deg, #00e0ff -6.3%, #aa55ff 111.05%) !important;
  border-radius: 8px !important;
  width: 199px;
  height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff !important;
  text-transform: none !important;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

.footer-icon {
  padding-left: 8px;
  padding-right: 8px;
}
</style>
