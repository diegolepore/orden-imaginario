<template>
  <div class="gift-box" :class="{ 'gift-box--open': isBoxOpen }">
    <div class="gift-box__inner m-auto" @click="openBox">  
      <div class="gift-box__top"></div>
      <div class="gift-box__bottom"></div>
    </div>

    <div class="flex flex-col justify-center items-center text-center p-8 gift-box__content">
      <h3 class="m-0">{{ randomMsj }}</h3>
    </div>
    <div class="gift-box__overlay" @click="closeBox"></div>
  </div>
</template>

<script>
  import GIFT_BOX_MESSAGES from '../constants/giftMessages'

  export default {
    name: 'GiftBox',
    data() {
      return {
        isBoxOpen: false,
        randomMsj: ''
      }
    },
    methods: {
      openBox() {
        this.pickRandomMessage()
        this.isBoxOpen = true
      },
      closeBox() {
        this.isBoxOpen = false
      },
      pickRandomMessage() {
        const msgLength = GIFT_BOX_MESSAGES.length
        const randomNum = Math.floor((Math.random() * msgLength))
        this.randomMsj = GIFT_BOX_MESSAGES[randomNum]
      }
    }
  }
</script>

<style lang="scss">
.gift-box {
  $parent: &;

  &__inner {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  
  &__top {
    width: 100%;
    height: 38px;
    background-color: #EFB025;
    flex-shrink: 0;
    transition: all 0.3s ease;
    position: relative;
    border-radius: 4px;
    z-index: 2;
    border: 3px solid #333333;
    transform: translateY(10px);
    cursor: pointer;
    
    &:before {
      content: '';
      background: url(https://zealous-visvesvaraya-628daf.netlify.app/ribbon.svg) center center no-repeat;
      background-size: contain;
      width: 100%;
      height: 120px;
      position: absolute;
      top: 72%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
  &__bottom {
    width: 90%;
    height: 80px;
    background-color: #EFB025;
    flex-shrink: 0;
    border-radius: 0 0 4px 4px;
    position: relative;
    z-index: 1;
    border: 3px solid #333333;
    cursor: pointer;
    
    &:after {
      content: '';
      width: 27px;
      height: 100%;
      position: absolute;
      background-color: #FF4440;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  &__content {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgb(131,58,180);
    background: linear-gradient(321deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%);
    opacity: 0;
    transition: all 0.3s 0.3s ease;
    border-radius: 4px;
    z-index: 4;
    pointer-events: none;
    color: #fff;
  }
  
  &__overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
    transition: all 0.3s 0.3s ease;
  }

  &--open {
    #{$parent}__top {
      transform: translateY(-90px);
    }

    #{$parent}__content {
      position: fixed;
      width: 300px;
      min-height: 100px;
      height: auto;
      opacity: 1;
      pointer-events: all;
    }

    #{$parent}__overlay {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>