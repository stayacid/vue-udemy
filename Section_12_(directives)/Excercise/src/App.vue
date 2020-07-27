<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-listener:click="clicked">Click me!</button>
                <button v-listener:hover="{overColor:'#3D9970', outColor: '#ddd'}">Click me!</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            listener: {
                bind(el, binding) {
                    if (binding.arg === 'click') {
                        el.addEventListener('click', function() {
                            binding.value(el)
                    })
                    } else if (binding.arg === 'hover') {
                        el.addEventListener('mouseover', () =>
                            el.style.backgroundColor = binding.value.overColor
                        )
                        el.addEventListener('mouseout', () =>
                            el.style.backgroundColor = binding.value.outColor
                        )
                    }
                }
            }
        },
        methods: {
            clicked(el) {
                el.innerText = 'Clicked!'
            }
        }
    }
</script>

<style>
</style>