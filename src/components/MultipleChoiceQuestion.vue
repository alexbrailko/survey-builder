<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
        Multiple Choice Question
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="question"
        type="text"
        v-model="localQuestion.text"
        @input="emitUpdate"
        placeholder="Enter your question"
      />
    </div>
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Options</h3>
      <div
        v-for="(option, index) in options"
        :key="index"
        class="flex items-center mb-2"
      >
        <div class="w-8 h-8 rounded-full mr-2" :class="option.color"></div>
        <span class="mr-2">{{ index + 1 }}:</span>
        <span>{{ option.text }}</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="$emit('delete')"
      >
        Delete Question
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue';
import type { Question } from '@/types/question';

export interface Option {
  text: string;
  color: string;
}

export default defineComponent({
  name: 'MultipleChoiceQuestion',
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const localQuestion = ref({ ...props.question });

    const options: Option[] = [
      { text: 'Very often', color: 'bg-red-500' },
      { text: 'Quite often', color: 'bg-orange-500' },
      { text: 'Sometimes', color: 'bg-yellow-500' },
      { text: 'Rarely', color: 'bg-lime-500' },
      { text: 'Never', color: 'bg-green-500' },
    ];

    const emitUpdate = () => {
      emit('update:question', localQuestion.value);
    };

    return {
      localQuestion,
      options,
      emitUpdate,
    };
  },
});
</script>
