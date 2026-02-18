export default {
    name: 'portfolio',
    type: 'document',
    title: 'Portofolio',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Dokumentasi Proyek',
        },
        {
            name: 'altText',
            type: 'string',
            title: 'Nama Proyek',
        },
        {
            name: 'category',
            type: 'string',
            title: 'Kategori Portofolio',
            options: {
                list: [
                    { title: 'Highlight', value: 'highlight' },
                ]
            }
        },
    ]
}