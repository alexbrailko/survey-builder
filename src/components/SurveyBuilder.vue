<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Survey Builder</h1>
    <div class="mb-4">
      <button
        @click="addQuestion(QuestionType.MultipleChoice)"
        class="bg-blue-500 text-white px-4 py-2 rounded mr-2 xs:w-full xs:mb-2"
      >
        Add Multiple Choice Question
      </button>
      <button
        @click="addQuestion(QuestionType.Open)"
        class="bg-green-500 text-white px-4 py-2 rounded xs:w-full"
      >
        Add Open Question
      </button>
    </div>
    <div v-for="(question, index) in survey" :key="index" class="mb-4">
      <multiple-choice-question
        v-if="question.type === QuestionType.MultipleChoice"
        :question="question"
        @update:question="updateQuestion(index, $event)"
        @delete="deleteQuestion(index)"
      />
      <open-question
        v-else
        :question="question"
        @update:question="updateQuestion(index, $event)"
        @delete="deleteQuestion(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion.vue';
import OpenQuestion from '../components/OpenQuestion.vue';
import { QuestionType, type Question } from '../types/question';

export default defineComponent({
  name: 'SurveyBuilder',
  components: {
    MultipleChoiceQuestion,
    OpenQuestion,
  },
  setup() {
    const survey = ref<Question[]>([]);

    const addQuestion = (type: QuestionType) => {
      survey.value.push({ type, text: '' });
    };

    const updateQuestion = (index: number, updatedQuestion: Question) => {
      survey.value[index] = updatedQuestion;
    };

    const deleteQuestion = (index: number) => {
      survey.value.splice(index, 1);
    };

    const loadSurvey = () => {
      const savedSurvey = localStorage.getItem('survey');
      if (savedSurvey) {
        survey.value = JSON.parse(savedSurvey);
      }
    };

    const saveSurvey = () => {
      localStorage.setItem('survey', JSON.stringify(survey.value));
    };

    onMounted(loadSurvey);

    watch(survey, saveSurvey, { deep: true });

    return {
      survey,
      addQuestion,
      updateQuestion,
      deleteQuestion,
      QuestionType,
    };
  },
});
</script>

<style></style>
