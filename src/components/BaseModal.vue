<template lang="">
    <Transition name="modal-animation">
        <div v-show="activeModal" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="activeModal" class="modal-inner">
                <div id="baseModal"
                tabindex="-1"
                v-if="activeModal"
                >
                  
                        <h4>Add task</h4>
                        <div class="butt"><button id="closeButton" type="button" @click="$emit('closeModal')">Close</button></div>
                   

                        <slot />
                </div>
                </div>
            </transition>
        </div>
    </Transition>
    <div v-if="activeModal" modal-backdrop=""></div>
</template>

<script setup>
defineEmits(['closeModal'])
defineProps({
    activeModal: {
        type: Boolean,
        default: false
    }
})
</script>
<style lang="scss">
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
#closeButton{
    background-color: rgb(137, 25, 25);
    margin-left: 220px;
}
h4{
    background-color: #fff;
}
.butt{
    background-color: #fff;
    margin-bottom: -5px;
    margin-top: -45px;
}


.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  
}
</style>