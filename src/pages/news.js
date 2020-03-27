import React from "react";
import Layout from "../components/layout";
import "../style/news.less";
import SEO from "../components/seo";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
export default function() {
    return <Layout>
        <SEO lang="en" title="News" />
        <div class= "twitterFeed">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="hydronovamusic"
        options={{height: 1344}}
        theme="dark"/>
        </div>
    </Layout>
}