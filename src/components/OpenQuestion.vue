<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
        Open Question
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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="answer">
        Answer (Preview)
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="answer"
        rows="4"
        placeholder="The respondent's answer will appear here"
        disabled
      ></textarea>
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
import type { Question } from '@/types/question';
import { defineComponent, type PropType, ref } from 'vue';

export default defineComponent({
  name: 'OpenQuestion',
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const localQuestion = ref({
      ...props.question,
    });

    const emitUpdate = () => {
      emit('update:question', localQuestion.value);
    };

    return {
      localQuestion,
      emitUpdate,
    };
  },
});
</script>
