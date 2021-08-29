export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'username',
            type: 'string',
            readOnly: false
        },
        {
            name: 'text',
            type: 'text',
            readOnly: false
        },
        {
            name: 'post',
            type: 'reference',
            to: [ { type: 'post' } ]
        }
    ]
}