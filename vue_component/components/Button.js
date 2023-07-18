export default{
    template: `<button :class="type">
    <slot />
    </button>`,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
    },
    data() {
        return {
            processing: true
        }
    },
    
}