<template>
  <div>
      <router-view v-slot="{ Component }">
          <transition name="fade">
              <component :is="Component" />
          </transition>
      </router-view>
  </div>
</template>

<script setup>
import { useRouter} from 'vue-router'

const router = useRouter()

router.push('Home')

// console.log('router', router)
// console.log('route', route)


// router.push({ name: 'About', params: { key: 'Hello key' }})

</script>

<style>
.v-enter-active,
.v-leave-active {
transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
opacity: 0;
}

a:hover{
  color:blue;
}
</style>