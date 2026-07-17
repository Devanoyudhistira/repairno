import convertToMoney from "@/function/convert";
import imageurl from "@/lib/imageurl";
import truncate from "@/lib/truncat";
import supabase from "@/supabase/supabase";


export async function generateMetadata({ params }) {
    const { id } = await params;

    const { data: shop, error } = await supabase.from("shop").select("description,name,gambar,price").eq("id", id).single()    
    return {
        title: shop.name,
        description: truncate(shop.description, 15),
        openGraph: {
            title: shop.name,
            description: truncate(shop.description, 25) + " " + convertToMoney( shop.price ),
            images: [
                {
                    url: imageurl(shop.gambar),
                    width: 1200,
                    height: 630,
                    alt: shop.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: shop.name + shop.price,
            description: shop.description,
            images: [imageurl(shop.gambar)],
        },
    };
}
export default function Layout({ children }) {
    return <div> {children}  </div>
}