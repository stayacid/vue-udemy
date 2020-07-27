<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select class="form-control" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" type="transition">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / remove</button>
                <br>
                <br>
                <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave"
                    @after-leave="afterLeave" @leave-cancelled="leaveCancelled" :css="false">
                    <div class="test" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="switchComponent">Switch component</button>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent" />
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br>

                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" v-for="(number, index) in numbers" @click="removeItem(index)"
                            style="cursor: pointer" :key="index">{{number}}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import dangerAlert from './DangerAlert.vue'
    import successAlert from './SuccessAlert.vue'
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            switchComponent() {
                this.selectedComponent == 'app-success-alert' ? this.selectedComponent = 'app-danger-alert' : this
                    .selectedComponent = 'app-success-alert'
            },
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px'
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px'
                    round++
                    if (round > 20) {
                        clearInterval(interval)
                        done()
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300
                el.style.width = this.elementWidth + 'px'
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px'
                    round++
                    if (round > 20) {
                        clearInterval(interval)
                        done()
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length)
                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            }
        },
        components: {
            appDangerAlert: dangerAlert,
            appSuccessAlert: successAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;

    }

    .fade-enter-active {
        transition: opacity 1s;

    }

    .fade-leave {}

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease forwards;
        transition: opacity 1s ease;
    }

    .slide-leave {}

    .slide-leave-active {
        animation: slide-out 1s ease forwards;
        opacity: 0;
        transition: opacity 1s ease;
        position: absolute;
        width: 100%;
    }

    .slide-move {
        transition: transform 1s
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        }

        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0)
        }

        to {
            transform: translateY(20px)
        }
    }

    .test {
        width: 300px;
        height: 100px;
        background-color: lightgreen;
    }
</style>