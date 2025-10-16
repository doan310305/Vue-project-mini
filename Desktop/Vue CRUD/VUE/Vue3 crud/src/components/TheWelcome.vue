<script setup>
import { values } from 'lodash';

const props = defineProps(['count']);
const emit = defineEmits(['handle-increase']);

const IncreaseCount = () => {
emit('handle-increase',{label:"hello" ,value:10});
}
</script>
<template>
  <div>Count: {{ props.count }}</div>
  <button @click="IncreaseCount">Click++</button>

</template>