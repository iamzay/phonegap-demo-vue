<template>
    <div>
        <h3>设备信息</h3>
        <table>
            <tr>
                <td>cordova版本</td>
                <td>{{device.cordova}}</td>
            </tr>
            <tr>
                <td>model</td>
                <td>{{device.model}}</td>
            </tr>
            <tr>
                <td>设备平台</td>
                <td>{{device.platform}}</td>
            </tr>
            <tr>
                <td>uuid</td>
                <td>{{device.uuid}}</td>
            </tr>
            <tr>
                <td>设备版本</td>
                <td>{{device.version}}</td>
            </tr>
            <tr>
                <td>制造商</td>
                <td>{{device.manufacturer}}</td>
            </tr>
            <tr>
                <td>模拟器</td>
                <td>{{device.isVirtual}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    created () {

    }
}
</script>

<style>

</style>
