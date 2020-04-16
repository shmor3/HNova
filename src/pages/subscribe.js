import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscribe from "../components/subscribe";
export default function() {
    return (
        <Layout>
            <SEO lang="en" title="subscribe" />
            <div style={{ minHeight: "600px" }}>
                <Subscribe />
            </div>
        </Layout>
    );
}