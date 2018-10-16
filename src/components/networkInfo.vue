<template>
    <div>
        <h3>网络信息</h3>
        <button @click="onClick">检查网络类型</button>
        <p>{{info}}</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            info: ''
        }
    },
    methods: {
        onOffline() {
            this.info = '网络未连接'
        },
        onOnLine() {
            this.info = '网络已连接'
        },
        onClick() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN] = "Unknown connection";
            states[Connection.ETHERNET] = "Ethernet connection";
            states[Connection.WIFI] = "WiFi connection";
            states[Connection.CELL_2G] = "Cell 2G connection";
            states[Connection.CELL_3G] = "Cell 3G connection";
            states[Connection.CELL_4G] = "Cell 4G connection";
            states[Connection.CELL] = "Cell generic connection";
            states[Connection.NONE] = "No network connection";

            this.info = '网络类型: ' + states[networkState]
        }
    },
    created() {
        document.addEventListener("offline", this.onOffline, false);
        document.addEventListener("online", this.onOnLine, false);
    }
};
</script>

<style>
</style>
