module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/impropermelon/71cbce5658bc4b3b9e835c1c1c8870c2?v=de8fab50fe454f48a55e0f29206ced87"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/impropermelon/8aa826240b1c42d9905b85e4769fda3e?v=f2e78341da144dd9b17b2eaaffbb3010"
            }
        }
    ],
}
