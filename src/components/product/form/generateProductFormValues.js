export const generateProductFormValues = () => {
    return {
        name: {
            value: '',
            required: true,
            error: '',
            validateInput: (name) => 
                name.length > 1 ? null : 'name should have at least 2 charecter',
        },
        description: {
            value: '',
            required: true,
            error: '',
            validateInput: (description) => 
                description.length > 1
                    ? null
                    : 'description should have at least 2 charecter'
            ,
        },
        category: {
            value: '',
            required: true,
            error: '',
            validateInput: (category) => 
                category.length > 1
                    ? null
                    : 'category should have at least 2 charecter',
            
        },
        brand: {
            value: '',
            required: true,
            error: '',
            validateInput: (brand) => 
                brand.length > 1
                    ? null
                    : 'brand should have at least 2 charecter',
            
        },

        price: {
            value: 0,
            required: true,
            error: '',
            validateInput: (price) => 
                price > 0 ? null : 'price should be positive number',
        },
    }
}
