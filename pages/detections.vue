<template>
    <div>
        <Card class="has-table">
            <detections-table 
            :data-url="
                        `${$router.options.base}detections`
                    "
            />
        </Card>
    </div>
</template>

<script>
import DetectionsTable from '@/components/DetectionsTable'
import Card from '@/components/Card'
export default {
    layout: 'dashboard',
    components: {
        DetectionsTable,
        Card
    }
}
</script>
