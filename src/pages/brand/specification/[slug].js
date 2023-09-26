import { useRouter } from 'next/router';
import specData from '../../../const/specData';

function ProductSpecification() {
    const router = useRouter();
    const { slug } = router.query; // Use the correct parameter name, which is 'slug'

    // Check if 'slug' is defined and a string before cleaning it
    const cleanedSlug = typeof slug === 'string' ? slug.replace(/%20/g, ' ').replace(/detailed\s*specifications/gi, '').trim() : '';

    // Find the matching object in specData based on the cleaned slug
    const matchedProduct = specData.find((product) => {
        if (typeof slug !== 'string') return false; // Ensure 'slug' is a string before proceeding
        const productNameInData = Object.keys(product)[0].toLowerCase().replace(/detailed\s*specifications/gi, '').trim();

        // Check if the cleaned slug matches the cleaned product name
        return productNameInData.toLowerCase() === cleanedSlug.toLowerCase();
    });

    if (!matchedProduct) {
        return <p>Product not found</p>;
    }

    // Extract the product details
    const productName = Object.keys(matchedProduct)[0];
    const productDetails = matchedProduct[productName];

    return (
        <div>
            <h1>Product Specification</h1>
            <p>Product Name: {productName}</p>
            <ul>
                {Object.entries(productDetails).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductSpecification;
