import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      defineField({
        name:"productName",
        title:"Product Name",
        type:"string",
        // to:[{
        //     type:"category"
        // }]
    }
    ),

        defineField({
            name:"category",
            title:"Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }
        ),
        defineField({
            name: "name",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug",
            options:{
                source :"product"
            }
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
          }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of:[{
                type: "string"
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
          }),
          defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features of the product',
          }),
          defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              { name: 'height', title: 'Height', type: 'string' },
              { name: 'width', title: 'Width', type: 'string' },
              { name: 'depth', title: 'Depth', type: 'string' },
            ],
            description: 'Dimensions of the product',
          }),
    ]
}) 
//  product.js (Sanity schema)
// export default {
//     name: "product",
//     type: "document",
//     fields: [
//       {
//         name: "productName",
//         type: "string",
//         title: "Product Name",
//       },
//       {
//         name: "slug",
//         type: "slug",
//         title: "Slug",
//         options: {
//           source: "name",
//           maxLength: 96,
//         },
//       },
//       {
//         name: "image",
//         type: "image",
//         title: "Product Image",
//       },
//       {
//         name: "price",
//         type: "number",
//         title: "Price",
//       },
//       {
//         name: "description",
//         type: "text",
//         title: "Product Description",
//       },
//     ],
//   };
  