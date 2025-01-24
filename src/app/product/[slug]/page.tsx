 import { client } from "@/sanity/lib/client";
import { product } from "../../../../scripts/types/products"; // Ensure this matches the schema
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"; // Make sure to import Image component
// import { category } from "@/sanity/schemaTypes/category";


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<product>{
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,  // Changed product to name
      _type,
      image,
      price,
      quantity,
      description,  // Added description for completeness
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps){
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-4 md:grid-cols-2 gap-12"> {/* Fixed grid class */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName} // Correct field name
              width={500}
              height={500}
              className="rounded-lg shadow-md" // Fixed typo from "rounded-1g"
            />
          )},
        </div>
        <div className="flex flex-col gap-8"> {/* Fixed layout */}
          <h1 className="text-4xl font-bold">{product.productName}</h1> {/* Correct field name */}
          <p className="text-2xl font-sans">{product.price}</p>
          <p className="text-2xl font-sans">{product.quantity}</p>
          <p className="text-2xl font-sans">{product.description}</p> {/* Added description */}
        </div>
      </div>
    </div>
  );
}
