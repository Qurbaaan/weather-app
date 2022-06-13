<template>
  <b-container class="home">
        <b-row>
            <b-col>
                <cities/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import cities from '@/components/cities.vue'; // import component
export default {
  name: 'home',
  components: {
    cities
  }
}
</script>
