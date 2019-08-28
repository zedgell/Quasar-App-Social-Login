<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img id="image">
            </q-avatar>
          </q-item-section>
          <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
        <q-icon name="menu" />
        </q-btn>
        </q-item>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Account Settings</q-item-label>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img id="image2">
              </q-avatar>
            </q-item-section>
            <q-item-section id="name"></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
