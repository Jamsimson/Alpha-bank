<template>
  <q-page class="q-pa-md">
    <!-- title -->
    <div class="text-h4 text-weight-bold">Setting</div>
    <!-- item -->
    <q-list>
      <!-- user -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img src="img/user icon.png" alt="" class="usericon" />
        </q-item-section>
        <q-item-section>John</q-item-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Manage email -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="mail" />
        </q-item-section>
        <q-item-section>Manage email</q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Password -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="lock" />
        </q-item-section>
        <q-item-section>Password</q-item-section>
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
        <q-item-section>Phone Number</q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <!-- Transfer Limit -->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="sync_alt" />
        </q-item-section>
        <q-item-section>Transfer Limit</q-item-section>
        <q-itme-section class="flex flex-center">
          <q-icon name="arrow_forward_ios" />
        </q-itme-section>
      </q-item>
      <q-separator spaced inset />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="dark" name="sync_alt" />
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
        <q-btn outline color="primary" rounded glossy label="EN" />
        <q-btn outline color="primary" rounded glossy label="TH" />
      </q-btn-group>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingPage",
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
