<script setup>
import { reactive } from "vue";

const showHidden = reactive({
  question_one: false,
  question_two: false,
  question_thr: false,
  question_fou: false,
  question_fiv: false,
  question_six: false,
  question_sev: false,
});
</script>

<template>
  <section class="flex flex-wrap flex-col gap-4 py-20 justify-center items-center">
    <header class="flex flex-col items-center gap-4">
      <h2 class="font-bold text-4xl">Frequently Asked Questions</h2>
    </header>

    <div
      class="question_container mt-16 flex flex-wrap items-start justify-center w-full gap-x-32 gap-y-4"
    >
      <div
        class="question w-full p-6 rounded-xl flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">What is Build Together?</h3>
          <svg
            @click="showHidden.question_one = !showHidden.question_one"
            :class="{ rotate: showHidden.question_one }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_one }"
        >
          Build Together is a collaborative platform that brings together tech
          enthusiasts, creators and builders from diverse backgrounds. It’s a space where
          talents collaborate, learn, and contribute to real world projects, fostering
          growth in the tech ecosystem.
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">Who is Build Together for?</h3>
          <svg
            @click="showHidden.question_two = !showHidden.question_two"
            :class="{ rotate: showHidden.question_two }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button0text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_two }"
        >
          Build Together is for anyone passionate about technology, whether you’re a
          beginner with 0-1 years of experience, an experienced professional, or an
          entrepreneur looking to build or collaborate on innovative projects.
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">
            How does the matching process work for teams?
          </h3>
          <svg
            @click="showHidden.question_thr = !showHidden.question_thr"
            :class="{ rotate: showHidden.question_thr }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_thr }"
        >
          When you join a project, we consider factors like your experience, availability,
          and skills to match you with a suitable team. Our goal is to create diverse and
          effective teams for successful projects outcomes.
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">
            What projects are available on Build Together?
          </h3>
          <svg
            @click="showHidden.question_fou = !showHidden.question_fou"
            :class="{ rotate: showHidden.question_fou }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_fou }"
        >
          Build Together hosts a variety of projects spanning different domains. From
          beginner friendly initiatives to advanced challenges, there’s a project for
          everyone. Check our Projects page for the latest opportunities
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">
            How does collaboration work on Build Together?
          </h3>
          <svg
            @click="showHidden.question_fiv = !showHidden.question_fiv"
            :class="{ rotate: showHidden.question_fiv }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_fiv }"
        >
          Collaboration is at the core of Build Together. Once you join a project, you’ll
          work with a team of like-minded individuals. Use our platform for seamless
          communication, share ideas, and contribute your skills to bring projects to
          life.
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">
            Can I join even if i’m a beginner in tech?
          </h3>
          <svg
            @click="showHidden.question_six = !showHidden.question_six"
            :class="{ rotate: showHidden.question_six }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_six }"
        >
          Absolutely! Build Together is designed to support beginners. Our BT Basic
          program is tailored for those with 0-1 years of experience. You’ll have access
          to learning resources, mentorship, and the opportunity to contribute to hands-on
          projects.
        </p>
      </div>

      <div
        class="question w-full rounded-xl p-6 flex flex-col"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-2xl font-normal leading-normal">
            What benefits do i get from joining Build Together?
          </h3>
          <svg
            @click="showHidden.question_sev = !showHidden.question_sev"
            :class="{ rotate: showHidden.question_sev }"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953"
              stroke="#202020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="answer w-full text-custom_card_button text-xl font-normal leading-normal"
          :class="{ dropdown: showHidden.question_sev }"
        >
          By joining Build Together, you gain hands-on experience, build a professional
          portfolio, and collaborate with a global community. Depending on your
          involvement, you may also have opportunities for mentorship, employment, and
          profit-sharing in certain projects.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.question {
  background: #fafaf9;
}
.question_header {
  gap: 4px;
  align-items: flex-start;
}

.answer {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0px;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.5s linear;
}

.dropdown {
  max-height: 270px;
}

svg {
  cursor: pointer;
  transition: all 0.5s linear;
}
.rotate {
  transform: rotate(-180deg);
}

@media screen and (max-width: 768px) {
  section {
    padding: 32px 0px;
  }
  header {
    text-align: center;
    gap: 8px;
    margin-bottom: 0px;
  }
  header h2 {
    font-size: 20px;
    line-height: normal;
  }
  .question_container {
    margin: 32px 0px;
  }
  .question_header h3 {
    font-size: 16px;
    width: 80%;
  }
  .question_header svg {
    width: 24px;
    height: 24px;
  }
  .question p {
    font-size: 14px;
  }
}
</style>
