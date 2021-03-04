<template>
  <div class="employee-card-list">
    <div v-if="error">
      {{ error }}
    </div>

    <template v-else>
      <employee-card
        v-for="field in contact.employees"
        :key="field.id"
        :name="field.employee_name"
        :position="field.employee_position"
        :imgSrc="field.image.url"
        :imgAlt="field.image.alternativeText"
        :socialMediaLinks="field.social_media_links"/>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCardList',
  data () {
    return {
      contact: [],
      error: null
    }
  },
  async fetch() {
    try {
      this.contact = await this.$strapi.$contact.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>