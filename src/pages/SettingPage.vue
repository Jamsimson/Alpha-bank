<template>
  <q-page class="q-pa-md">
    <q-dialog v-model="confirmLogOut" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to log out? </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Log out"
            color="negative"
            v-close-popup
            @click="logOut"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- title -->
    <div class="text-h4 text-weight-bold">Setting</div>
    <!-- item -->
    <q-list>
      <!-- user -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img
            :src="database.image"
            alt=""
            class="usericon"
            style="width: 50px; height: 50px; object-fit: cover"
          />
        </q-item-section>
        <q-item-section>{{ database.username }}</q-item-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Manage email -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="mail" />
        </q-item-section>
        <q-item-section
          >Manage email
          <q-item-label caption lines="2">
            {{ database.user.email }}
          </q-item-label>
        </q-item-section>
        <q-itme-section class="flex flex-center">
          <span class="text-positive q-pr-md">Confirmed</span>
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Password -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="lock" />
        </q-item-section>
        <q-item-section>Password </q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Phone Number -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="call" />
        </q-item-section>
        <q-item-section
          >Phone Number
          <q-item-label caption lines="2"> 099 999 9999 </q-item-label>
        </q-item-section>
        <q-itme-section class="flex flex-center">
          <span class="text-positive q-pr-md">Confirmed</span>
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Transfer Limit -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="sync_alt" />
        </q-item-section>
        <q-item-section
          >Transfer Limit
          <q-item-label class="text-indigo-8" lines="2">
            $ 2,0000
          </q-item-label>
        </q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <q-item clickable v-ripple @click="confirmLogOut = true">
        <q-item-section avatar>
          <q-icon color="dark" name="logout" />
        </q-item-section>
        <q-item-section>Log out</q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
    </q-list>
    <div
      class="text-caption text-weight-thin text-grey-7"
      style="margin-left: 42%"
    >
      Alpha banking app version 2.0.12
    </div>
    <br />
    <div class="" style="margin-left: 67%">
      <q-btn-group rounded>
        <q-btn outline color="primary" rounded label="EN" />
        <q-btn outline color="grey" rounded label="TH" />
      </q-btn-group>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { alpha_database } from "../stores/database";
export default defineComponent({
  name: "SettingPage",
  data() {
    return {
      database: alpha_database(),
      confirmLogOut: ref(false),
    };
  },
  methods: {
    // handle click
    async logOut() {
      await this.$auth.signOut();
      console.log("User signed out!");
      this.$router.push("/");
    },
  },
});
</script>
<style>
.usericon {
  height: 40px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
}
</style>
