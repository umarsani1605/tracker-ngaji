<script setup>
import { supabase } from '../utils/supabase'

const santri = ref([])

async function getTodos() {
  const { data } = await supabase.from('santri').select()
  santri.value = data
  console.log("tes" + santri.value);
}

onMounted(() => {
  getTodos()
})

</script>

<template>

</template>