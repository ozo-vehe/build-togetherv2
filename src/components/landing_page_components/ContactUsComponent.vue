<script setup>
import contact_us from "@/assets/images/contact_us.png";
import { reactive, ref } from "vue";
// import { RouterLink } from "vue-router";

// Contact us form details
const form = reactive({
  name: "",
  email: "",
  message: "",
  phone_number: "",
});
// Loading state
let loading = ref(false);
// Error state
let error_msg = ref(null);

// Submit contact us form
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    loading.value = true;
    console.log("Set up");
    console.log(form);
  } catch (error) {
    loading.value = false;
    error_msg.value = error;
  }
};
</script>
<template>
  <section
    class="contact_us flex flex-wrap flex-col gap-4 py-20 justify-center items-center"
  >
    <header class="flex flex-col items-center gap-4">
      <h2 class="text-custom_orange text-2xl">We're here to help</h2>
      <p class="font-bold text-4xl">Contact Us</p>
    </header>

    <div class="mt-16 flex flex-wrap items-start justify-center w-full gap-x-32 gap-y-4">
      <div class="form_image w-500 flex flex-col gap-y-32">
        <img class="w-450" :src="contact_us" alt="Contact us image" />
        <div class="social_icon_link w-full flex gap-5 justify-center">
          <a href="https://twitter.com/buildtogetherhq" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M28.7275 3.43636C29.3452 3.43636 29.8477 3.93891 29.8477 4.55662V28.9828C29.8477 29.6005 29.3452 30.103 28.7275 30.103H4.30132C3.68362 30.103 3.18107 29.6005 3.18107 28.9828V4.55662C3.18107 3.93891 3.68362 3.43636 4.30132 3.43636H28.7275ZM28.7275 2.10303H4.30132C2.94624 2.10303 1.84774 3.20153 1.84774 4.55662V28.9828C1.84774 30.3379 2.94624 31.4364 4.30132 31.4364H28.7275C30.0826 31.4364 31.1811 30.3379 31.1811 28.9828V4.55662C31.1811 3.20153 30.0826 2.10303 28.7275 2.10303Z"
                fill="#F47722"
              />
              <path
                d="M18.5464 15.1372L26.489 6.10303H24.6071L17.7074 13.9456L12.2006 6.10303H5.84774L14.1769 17.9635L5.84774 27.4364H7.72965L15.0115 19.1524L20.8282 27.4364H27.1811L18.5464 15.1372ZM15.968 18.0676L15.1228 16.8858L8.40831 7.49126H11.2993L16.7197 15.0758L17.5613 16.2576L24.6063 26.1158H21.7153L15.968 18.0676Z"
                fill="#F47722"
              />
            </svg>
          </a>

          <a href="https://twitter.com/buildtogetherhq" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <g clip-path="url(#clip0_181_161)">
                <path
                  d="M16.5144 20.7698C18.7235 20.7698 20.5144 18.9789 20.5144 16.7698C20.5144 14.5606 18.7235 12.7698 16.5144 12.7698C14.3053 12.7698 12.5144 14.5606 12.5144 16.7698C12.5144 18.9789 14.3053 20.7698 16.5144 20.7698Z"
                  fill="#1B3447"
                />
                <path
                  d="M22.0144 4.26978H11.0144C9.15789 4.26978 7.37741 5.00727 6.06466 6.32003C4.7519 7.63278 4.0144 9.41326 4.0144 11.2698V22.2698C4.0144 24.1263 4.7519 25.9068 6.06466 27.2195C7.37741 28.5323 9.15789 29.2698 11.0144 29.2698H22.0144C23.8709 29.2698 25.6514 28.5323 26.9642 27.2195C28.2769 25.9068 29.0144 24.1263 29.0144 22.2698V11.2698C29.0144 9.41326 28.2769 7.63278 26.9642 6.32003C25.6514 5.00727 23.8709 4.26978 22.0144 4.26978ZM16.5144 22.7698C15.3277 22.7698 14.1677 22.4179 13.181 21.7586C12.1943 21.0993 11.4253 20.1622 10.9711 19.0659C10.517 17.9695 10.3982 16.7631 10.6297 15.5992C10.8612 14.4353 11.4326 13.3663 12.2718 12.5271C13.1109 11.688 14.18 11.1166 15.3439 10.8851C16.5077 10.6536 17.7141 10.7724 18.8105 11.2265C19.9069 11.6806 20.8439 12.4497 21.5032 13.4364C22.1625 14.423 22.5144 15.5831 22.5144 16.7698C22.5144 18.3611 21.8823 19.8872 20.757 21.0124C19.6318 22.1376 18.1057 22.7698 16.5144 22.7698ZM23.0144 11.7698C22.7177 11.7698 22.4277 11.6818 22.181 11.517C21.9344 11.3522 21.7421 11.1179 21.6286 10.8438C21.5151 10.5697 21.4853 10.2681 21.5432 9.97714C21.6011 9.68617 21.744 9.41889 21.9537 9.20912C22.1635 8.99934 22.4308 8.85648 22.7218 8.7986C23.0127 8.74072 23.3143 8.77042 23.5884 8.88396C23.8625 8.99749 24.0968 9.18975 24.2616 9.43642C24.4264 9.68309 24.5144 9.9731 24.5144 10.2698C24.5144 10.6676 24.3564 11.0491 24.0751 11.3304C23.7938 11.6117 23.4122 11.7698 23.0144 11.7698Z"
                  fill="#1B3447"
                />
              </g>
              <defs>
                <clipPath id="clip0_181_161">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.514404 0.769775)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/build-together-hq/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <g clip-path="url(#clip0_181_159)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.6048 0.769775C30.7626 0.769775 32.5144 2.52165 32.5144 4.6794V28.8602C32.5144 31.0179 30.7625 32.7698 28.6048 32.7698H4.42403C2.26628 32.7698 0.514404 31.0179 0.514404 28.8602V4.6794C0.514404 2.52165 2.26622 0.769775 4.42403 0.769775L28.6048 0.769775ZM10.5432 27.2247V13.1173H5.85322V27.2247H10.5432ZM27.4519 27.2247V19.1347C27.4519 14.8014 25.1383 12.7856 22.0531 12.7856C19.5653 12.7856 18.451 14.1538 17.827 15.1147V13.1173H13.1382C13.2004 14.4412 13.1382 27.2247 13.1382 27.2247H17.827V19.3461C17.827 18.9244 17.8573 18.5029 17.9816 18.2015C18.32 17.3593 19.092 16.4868 20.3875 16.4868C22.0834 16.4868 22.7629 17.781 22.7629 19.6767V27.2247H27.4519ZM8.2299 6.3149C6.62528 6.3149 5.5769 7.36984 5.5769 8.75253C5.5769 10.1062 6.5934 11.1902 8.16784 11.1902H8.19809C9.8334 11.1902 10.8513 10.1062 10.8513 8.75253C10.821 7.37178 9.83628 6.3179 8.2299 6.3149Z"
                  fill="#F47722"
                />
              </g>
              <defs>
                <clipPath id="clip0_181_159">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.514404 0.769775)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <form @submit="handleSubmit" class="w-450 flex flex-col gap-8">
        <div class="form_input">
          <label for="name" class="">Name</label>
          <input
            v-model="form.name"
            class=""
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            required
          />
        </div>

        <div class="form_input">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div class="form_input">
          <label for="phone_number">Phone Number</label>
          <input
            v-model="form.phone_number"
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="Phone Number"
          />
        </div>

        <div class="form_input">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            class=""
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-40 px-5 py-3 rounded-xl bg-custom_orange text-slate-50 hover:bg-custom_dark_orange transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form_input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.form_input label {
  color: var(--foundation-black-black-600, #202020);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.form_input input,
.form_input textarea {
  display: flex;
  width: 100%;
  padding: 12px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #fafaf9;
}

.form_input textarea {
  height: 127px;
}

@media screen and (max-width: 768px) {
  .contact_us {
    padding: 32px 0px;
    gap: 0px;
  }

  header {
    text-align: center;
    gap: 8px;
    margin-bottom: 0px;
  }

  header h2 {
    font-size: 14px;
    line-height: normal;
  }

  header p {
    line-height: normal;
    font-size: 20px;
    margin: 0px;
  }

  .contact_us > div {
    margin: 30px 0px;
  }

  .form_image {
    gap: 20px;
    align-items: center;
    order: 2;
    margin-top: 30px;
  }

  .form_image img {
    width: 80%;
  }

  .social_icon_link {
    gap: 16px;
  }

  .social_icon_link svg {
    width: 24px;
    height: 24px;
  }

  .form_input label {
    font-size: 16px;
  }

  form input::placeholder {
    font-size: 14px;
  }

  form button {
    font-size: 12px;
    width: 134px;
  }
}
</style>
