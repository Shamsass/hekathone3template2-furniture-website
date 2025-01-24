import { defineType,defineField } from "sanity";

export const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields:[
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (rule) => rule.required(),
            options: {
                source: "name",
            }
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
    ]
})

// import { defineType,defineField } from "sanity";

// export const Category = defineType({
//     name: "category",
//     title: "Category",
//     type: "document",
//     fields:[
//         defineField({
//             name: "name",
//             title: "Name",
//             type: "string",
//             validation: (rule) => rule.required(),
//         }),
//         defineField({
//             name: "slug",
//             title: "Slug",
//             type: "slug",
//             validation: (rule) => rule.required(),
//             options: {
//                 source: "name",
//             }
//         })
//     ]
// })