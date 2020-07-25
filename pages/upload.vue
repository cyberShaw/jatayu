<template>
    <section class="section is-main-section">
        <Card title="Forms" icon="ballot">
            <form @submit.prevent="submit">
                <b-field label="From" horizontal>
                    <b-field>
                        <b-input
                            v-model="form.name"
                            icon="account"
                            placeholder="Name"
                            name="name"
                            required
                        />
                    </b-field>
                    <b-field>
                        <b-input
                            v-model="form.email"
                            icon="email"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            required
                        />
                    </b-field>
                </b-field>
                <b-field message="Do not enter the leading zero" horizontal>
                    <b-field>
                        <p class="control">
                            <a class="button is-static">
                                +44
                            </a>
                        </p>
                        <b-input
                            v-model="form.phone"
                            type="tel"
                            name="phone"
                            expanded
                        />
                    </b-field>
                </b-field>
                <b-field label="Department" horizontal>
                    <b-select
                        v-model="form.department"
                        placeholder="Select a department"
                        required
                    >
                        <option
                            v-for="(department, index) in departments"
                            :key="index"
                            :value="department"
                        >
                            {{ department }}
                        </option>
                    </b-select>
                </b-field>
                <hr />
                <b-field label="Subject" message="Message subject" horizontal>
                    <b-input
                        v-model="form.subject"
                        placeholder="e.g. Partnership proposal"
                        required
                    />
                </b-field>
                <b-field
                    label="Question"
                    message="Your question. Max 255 characters"
                    horizontal
                >
                    <b-input
                        v-model="form.question"
                        type="textarea"
                        placeholder="Explain how we can help you"
                        maxlength="255"
                        required
                    />
                </b-field>
                <b-field label="File" horizontal>
                    <FilePicker v-model="form.file" />
                </b-field>
                <hr />
                <b-field horizontal>
                    <b-field grouped>
                        <div class="control">
                            <b-button native-type="submit" type="is-primary">
                                Submit
                            </b-button>
                        </div>
                        <div class="control">
                            <b-button
                                type="is-primary is-outlined"
                                @click="reset"
                            >
                                Reset
                            </b-button>
                        </div>
                    </b-field>
                </b-field>
                
            </form>
        </Card>
    </section>
</template>

<script>
import Card from '../components/Card'
import FilePicker from '../components/FilePicker'
export default {
    layout: 'dashboard',
    components: {
        Card,
        FilePicker
    },
    data() {
        return {
            isLoading: false,
            form: {
                name: null,
                email: null,
                phone: null,
                department: null,
                subject: null,
                question: null
            }
        }
    }
}
</script>
