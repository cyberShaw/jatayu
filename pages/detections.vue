<template>
  <div>
    <PageHead title="Detections" subtitle="Track & Detect" />
    <Card class="has-table">
      <detections-table :data-url="`${$router.options.base}detections`" />
    </Card>
  </div>
</template>

<script>
import DetectionsTable from '@/components/DetectionsTable';
import Card from '@/components/Card';
import PageHead from '@/components/PageHead';
export default {
  layout: 'dashboard',
  components: {
    DetectionsTable,
    Card,
    PageHead,
  },
};
</script>
