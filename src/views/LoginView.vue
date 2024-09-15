<template>
  <div class="bg-[rgb(16, 16, 16)] h-screen">
    <div class="h-3/5" :class="['bg-auth']">
    </div>
    <form @submit="onSubmit">
      <div
        class="flex flex-col border rounded-lg p-5 min-w-[500px] space-y-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h4 class="text-center font-bold bg-gray-500/80 py-3 rounded-md inline-block">Log in with your Instagram account</h4>
        <div class="field">
          <InputText v-model="email" type="email" placeholder="Username, phone or email"
            class="w-full p-3 text-white rounded-md" :pt="{
              root: { class: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500' }
            }" />
          <small v-if="emailError" class="text-red-500 ml-1">{{ emailError }}</small>
        </div>

        <div class="field">
          <Password v-model="password" placeholder="Password" :feedback="false" class="w-full"
            :inputClass="['w-full p-3 bg-gray-800 text-white rounded-md', 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500']"
            :toggleMask="true" :pt="{
              root: { class: 'w-full' },
              input: { class: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500' }
            }" />
          <small v-if="passwordError" class="text-red-500 ml-1">{{ passwordError }}</small>
        </div>
        <BtnThreads variant="light" full type="'submit">Login</BtnThreads>

        <RouterLink class="text-gray-700 text-center my-3 text-sm" to="/forgot-password">Forgot password?</RouterLink>
        <div class="flex gap-2 items-center">
          <span class="h-[0.5px] bg-gray-700 flex-1"></span>
          <span class="bg-transparent w-10 text-gray-400 text-center">or</span>
          <span class="h-[0.5px] bg-gray-700 flex-1"></span>
        </div>
        <div class="flex items-center gap-3 justify-between border-2 border-gray-700 rounded-md py-2 px-3 cursor-pointer">
          <Icon width="40" height="40" icon="flat-color-icons:google" />
          <p class="flex-1 text-center">Continue with google</p>
          <Icon width="22" height="22" icon="mingcute:right-line" />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
// import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { Icon } from '@iconify/vue';

const schema = yup.object({
  email: yup.string().required('không được bỏ trống').email('email không hợp lệ'),
  password: yup.string().required('không được bỏ trống').min(6, 'mật khẩu phải có ít nhất 6 ký tự'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

</script>
<style>
.bg-auth {
  background-image: url('../assets/image.png');
  background-size: cover;
  background-position: center center;
  width: 100%;
}
</style>