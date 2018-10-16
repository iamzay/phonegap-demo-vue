<template>
    <div>
        <h3>拨打电话</h3>
        <input type="tel" id="phone" name="phone" placeholder="输入电话号码" v-model.trim="number"/>
        <button class="dial-button" @click="dial()">拨打</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            number: ''
        }
    },
    methods: {
       dial() {
           if(!this.number.length) {
               alert('电话不能为空')
               return
           }

            window.plugins.CallNumber.callNumber(
                function() {
                    alert('拨打成功!')
                },
                function(result) {
                    alert("Error:" + result);
                },
                this.number
            );
        }
    }
};
</script>

<style>
</style>
